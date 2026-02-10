import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

// No with clause - state is not semantically changed, enabling RBAC is runtime enhancement
actor {
  // Secure actor with full RBAC
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

  // Public form submission (guests can submit)
  public func addLead(firstName : Text, lastName : Text, companyName : Text, industry : Text, revenueRange : Text, operationalBottleneck : Text, email : Text, mobileNumber : Text, message : Text) : async Nat {
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

  // Admin-only: View individual lead
  public query ({ caller }) func getLead(id : Nat) : async ?Lead {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leads.get(id);
  };

  // Admin-only: View all leads
  public query ({ caller }) func getAllLeads() : async [Lead] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leads.values().toArray();
  };

  // User profile management functions required for admin bootstrap UX
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
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
};
