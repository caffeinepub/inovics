import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitFormByEmail } from "@/lib/mailtoSubmit";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";

const revenueRanges = ["₹5–10 Cr", "₹10–25 Cr", "₹25–50 Cr", "50+ Cr"];

export function InsightsNewsletterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    companyName: "",
    revenueRange: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    if (!formData.email.trim()) newErrors.email = "Work email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email address";
    if (!formData.companyName.trim())
      newErrors.companyName = "Company name is required";
    if (!formData.revenueRange)
      newErrors.revenueRange = "Revenue range is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const body = `Insights Newsletter Subscription

Name: ${formData.firstName}
Company: ${formData.companyName}
Revenue Range: ${formData.revenueRange}
Email: ${formData.email}

Please add to strategic insights mailing list.`;
    submitFormByEmail(
      `Insights Newsletter Subscription – ${formData.companyName}`,
      body,
    );
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-6">
          <CheckCircle2 className="h-8 w-8 text-accent-yellow" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Opening Your Email Client…
        </h3>
        <p className="text-lg text-muted-foreground mb-4">
          Your details have been prepared. Please send the email that just
          opened.
        </p>
        <p className="text-sm text-muted-foreground">
          If nothing opened, email us at{" "}
          <a
            href="mailto:contact@weareinovics.com"
            className="text-accent-yellow underline"
          >
            contact@weareinovics.com
          </a>
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          variant="outline"
          className="mt-6 border-accent-yellow text-accent-yellow hover:bg-accent-yellow/10"
        >
          Subscribe Another Email
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card border border-border rounded-xl p-8"
      data-ocid="newsletter_form.panel"
    >
      <div className="mb-6">
        <Label htmlFor="firstName" className="text-foreground mb-2 block">
          First Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="firstName"
          value={formData.firstName}
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
          className={errors.firstName ? "border-destructive" : ""}
          placeholder="Your first name"
          data-ocid="newsletter_form.firstName.input"
        />
        {errors.firstName && (
          <p className="text-sm text-destructive mt-1">{errors.firstName}</p>
        )}
      </div>
      <div className="mb-6">
        <Label htmlFor="email" className="text-foreground mb-2 block">
          Work Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className={errors.email ? "border-destructive" : ""}
          placeholder="you@company.com"
          data-ocid="newsletter_form.email.input"
        />
        {errors.email && (
          <p className="text-sm text-destructive mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-6">
        <Label htmlFor="companyName" className="text-foreground mb-2 block">
          Company Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="companyName"
          value={formData.companyName}
          onChange={(e) =>
            setFormData({ ...formData, companyName: e.target.value })
          }
          className={errors.companyName ? "border-destructive" : ""}
          placeholder="Your company"
          data-ocid="newsletter_form.companyName.input"
        />
        {errors.companyName && (
          <p className="text-sm text-destructive mt-1">{errors.companyName}</p>
        )}
      </div>
      <div className="mb-6">
        <Label htmlFor="revenueRange" className="text-foreground mb-2 block">
          Revenue Range <span className="text-destructive">*</span>
        </Label>
        <Select
          value={formData.revenueRange}
          onValueChange={(v) => setFormData({ ...formData, revenueRange: v })}
        >
          <SelectTrigger
            id="revenueRange"
            className={errors.revenueRange ? "border-destructive" : ""}
            data-ocid="newsletter_form.revenueRange.select"
          >
            <SelectValue placeholder="Select revenue range" />
          </SelectTrigger>
          <SelectContent>
            {revenueRanges.map((r) => (
              <SelectItem key={r} value={r}>
                {r}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.revenueRange && (
          <p className="text-sm text-destructive mt-1">{errors.revenueRange}</p>
        )}
      </div>
      <Button
        type="submit"
        className="w-full bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold"
        data-ocid="newsletter_form.submit_button"
      >
        Subscribe to Insights
      </Button>
    </form>
  );
}
