import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

// In this case, we follow the without update migration style since there is no data change. Only a UI change! No field or datatype change.
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
