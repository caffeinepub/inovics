import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Iter "mo:core/Iter";

actor {
  type Lead = {
    firstName : Text;
    lastName : Text;
    email : Text;
    message : Text;
  };

  let leads = Map.empty<Nat, Lead>();
  var nextId = 0;

  public shared ({ caller }) func addLead(firstName : Text, lastName : Text, email : Text, message : Text) : async Nat {
    let lead : Lead = { firstName; lastName; email; message };
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
