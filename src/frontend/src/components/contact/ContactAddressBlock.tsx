import { CONTACT_ADDRESS } from "@/lib/contactConfig";
import { MapPin } from "lucide-react";

export function ContactAddressBlock() {
  return (
    <div className="bg-background border border-border rounded-xl p-8 lg:p-10">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-accent-yellow/10 flex items-center justify-center shrink-0">
          <MapPin className="h-6 w-6 text-accent-yellow" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-3">
            Office Address
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {CONTACT_ADDRESS}
          </p>
        </div>
      </div>
    </div>
  );
}
