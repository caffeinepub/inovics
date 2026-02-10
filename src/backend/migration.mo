import Map "mo:core/Map";
import Nat "mo:core/Nat";

module {
  type OldLead = {
    firstName : Text;
    lastName : Text;
    email : Text;
    message : Text;
  };

  type OldActor = {
    leads : Map.Map<Nat, OldLead>;
    nextId : Nat;
  };

  type NewLead = {
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

  type NewActor = {
    leads : Map.Map<Nat, NewLead>;
    nextId : Nat;
  };

  public func run(old : OldActor) : NewActor {
    let newLeads = old.leads.map<Nat, OldLead, NewLead>(
      func(_id, oldLead) {
        {
          oldLead with
          companyName = "";
          industry = "";
          revenueRange = "";
          operationalBottleneck = "";
          mobileNumber = "";
        };
      }
    );
    { old with leads = newLeads };
  };
};
