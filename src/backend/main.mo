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

  public type AuthenticationResult = {
    success : Bool;
    message : Text;
  };

  let leads = Map.empty<Nat, Lead>();
  let userProfiles = Map.empty<Principal, UserProfile>();
  var nextId = 0;
  var adminBootstrapToken : ?Text = null;
  var adminInitialized = false;

  let ADMIN_USERNAME = "dreamznet@gmail.com";
  let ADMIN_PASSWORD = "prodigy#123";

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
    if (adminInitialized) {
      Runtime.trap("Unauthorized: Admin has already been initialized");
    };

    switch (adminBootstrapToken) {
      case (?currentToken) {
        if (currentToken != token) {
          Runtime.trap("Unauthorized: Invalid admin bootstrap token");
        };
        AccessControl.initialize(accessControlState, caller, currentToken, token);
        adminBootstrapToken := null;
        adminInitialized := true;
      };
      case (null) {
        Runtime.trap("Admin bootstrap token is missing");
      };
    };
  };

  public shared ({ caller }) func renewBootstrapToken() : async Text {
    if (adminInitialized) {
      if (not AccessControl.isAdmin(accessControlState, caller)) {
        Runtime.trap("Unauthorized: Only admins can renew the bootstrap token");
      };
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

  public shared ({ caller }) func authenticateAdminCredentials(username : Text, password : Text) : async AuthenticationResult {
    if (username == ADMIN_USERNAME and password == ADMIN_PASSWORD) {
      // Grant admin role to the caller
      if (not adminInitialized) {
        // First admin - initialize the system
        AccessControl.initialize(accessControlState, caller, "mockToken", "mockToken");
        adminInitialized := true;
      } else {
        // Subsequent admins - check if caller is already admin, if not, this should fail
        // or we need an existing admin to grant the role
        if (not AccessControl.isAdmin(accessControlState, caller)) {
          // For credential-based auth, we allow self-promotion with correct credentials
          // This is a special case for the hardcoded admin credentials
          AccessControl.assignRole(accessControlState, caller, caller, #admin);
        };
      };

      {
        success = true;
        message = "Authentication successful - admin privileges granted";
      };
    } else {
      {
        success = false;
        message = "Invalid credentials";
      };
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

  public shared ({ caller }) func adminReset() : async () {
    // SECURITY: Only existing admins can reset the admin initialization state
    // This allows recovery when an admin needs to reinitialize the system
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Only admins can reset admin initialization");
    };
    adminInitialized := false;
    adminBootstrapToken := null;
  };
};
