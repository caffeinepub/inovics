import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Migration "migration";
import List "mo:core/List";

// Use behavior migration which we found to work after updating a couple paths. Steve, could you try to simulate this one in runtime as it is not working stably for me? Thanks!

(with migration = Migration.run)
actor {
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

  // Use persistent Map instead of var Map.
  let leads = Map.empty<Nat, Lead>();

  var nextId = 0;

  public shared ({ caller }) func addLead(firstName : Text, lastName : Text, companyName : Text, industry : Text, revenueRange : Text, operationalBottleneck : Text, email : Text, mobileNumber : Text, message : Text) : async Nat {
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
    leads.get(id);
  };

  public query ({ caller }) func getAllLeads() : async [Lead] {
    leads.values().toArray();
  };
};
