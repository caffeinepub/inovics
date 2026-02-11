import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  type Lead = {
    firstName : Text;
    lastName : Text;
    companyName : Text;
    industry : Text;
    revenueRange : Text;
    operationalBottleneck : Text;
    email : Text;
    mobileNumber : Text;
    message : Text;
  };

  public type UserProfile = {
    name : Text;
  };

  let leads = Map.empty<Nat, Lead>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  var nextId = 0;
  var adminBootstrapToken : ?Text = null;
  var hasAdminBeenInitialized = false; // deprecated, use adminInitialzed instead
  var adminInitialized = false;

  public query ({ caller }) func healthCheck() : async Text {
    "Backend is reachable";
  };

  public func addLead(
    firstName : Text,
    lastName : Text,
    companyName : Text,
    industry : Text,
    revenueRange : Text,
    operationalBottleneck : Text,
    email : Text,
    mobileNumber : Text,
    message : Text,
  ) : async Nat {
    let lead : Lead = {
      firstName;
      lastName;
      companyName;
      industry;
      revenueRange;
      operationalBottleneck;
      email;
      mobileNumber;
      message;
    };
    leads.add(nextId, lead);
    nextId += 1;
    nextId - 1;
  };

  public query ({ caller }) func getLead(id : Nat) : async ?Lead {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leads.get(id);
  };

  public query ({ caller }) func getAllLeads() : async [Lead] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leads.values().toArray();
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  public shared ({ caller }) func promoteFirstAdmin(token : Text) : async () {
    // Only allow promotion if no admin has been initialized yet
    if (adminInitialized) {
      Runtime.trap("Unauthorized: Admin has already been initialized");
    };

    if (adminBootstrapToken != ?token) {
      Runtime.trap("Unauthorized: Invalid admin bootstrap token");
    };

    switch (adminBootstrapToken) {
      case (?currentToken) {
        AccessControl.initialize(accessControlState, caller, currentToken, token);
      };
      case (null) {
        Runtime.trap("Admin bootstrap token is missing (unrecoverable state)");
      };
    };
    adminBootstrapToken := null;
    adminInitialized := true;
  };

  public shared ({ caller }) func renewBootstrapToken() : async Text {
    if (adminInitialized and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can renew the bootstrap token");
    };

    switch (adminBootstrapToken) {
      case (null) {
        let randomToken = "mocked-token";
        adminBootstrapToken := ?randomToken;
        randomToken;
      };
      case (?existingToken) { existingToken };
    };
  };

  public query ({ caller }) func isAdminInitialized() : async Bool {
    adminInitialized;
  };

  public shared ({ caller }) func grantAdminPrivileges(target : Principal) : async () {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can grant admin privileges");
    };
    AccessControl.assignRole(accessControlState, caller, target, #admin);
  };
};
