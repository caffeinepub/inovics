import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import { CheckCircle2, Loader2, WifiOff, RefreshCw } from 'lucide-react';

const industries = [
  'Manufacturing',
  'Distribution & Logistics',
  'Retail & E-commerce',
  'Professional Services',
  'Healthcare',
  'Real Estate',
  'Food & Beverage',
  'Technology',
  'Other',
];

const revenueRanges = [
  '₹5–10 Cr',
  '₹10–25 Cr',
  '₹25–50 Cr',
  '50+ Cr',
];

export function ControlLeadGenForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    industry: '',
    revenueRange: '',
    challenge: '',
    email: '',
    mobile: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { submitLead, isLoading, isSuccess, error, actorInitializing, retry } = useLeadSubmission();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.industry) newErrors.industry = 'Industry is required';
    if (!formData.revenueRange) newErrors.revenueRange = 'Revenue range is required';
    if (!formData.challenge.trim()) newErrors.challenge = 'Please describe your challenge';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const message = `Company: ${formData.companyName}
Industry: ${formData.industry}
Revenue Range: ${formData.revenueRange}
Mobile: ${formData.mobile}
Challenge: ${formData.challenge}`;

    await submitLead({
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      industry: formData.industry,
      revenueRange: formData.revenueRange,
      operationalBottleneck: formData.challenge,
      email: formData.email,
      mobileNumber: formData.mobile,
      message,
    });
  };

  const handleRetry = async () => {
    await retry();
  };

  if (isSuccess) {
    return (
      <div className="bg-card border border-border rounded-xl p-8 lg:p-10 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-6">
          <CheckCircle2 className="h-8 w-8 text-accent-yellow" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
        <p className="text-lg text-muted-foreground mb-6">
          Your request has been received. We'll review your information and get back to you shortly.
        </p>
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
          className="border-accent-yellow text-accent-yellow hover:bg-accent-yellow/10"
        >
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 lg:p-10">
      {actorInitializing && (
        <Alert className="mb-6">
          <Loader2 className="h-4 w-4 animate-spin" />
          <AlertDescription>
            Connecting to backend, please wait...
          </AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive" className="mb-6">
          <WifiOff className="h-4 w-4" />
          <AlertDescription className="flex items-center justify-between">
            <span>{error}</span>
            {error.includes('retry') && (
              <Button onClick={handleRetry} variant="outline" size="sm" className="ml-4">
                <RefreshCw className="mr-2 h-3 w-3" />
                Retry
              </Button>
            )}
          </AlertDescription>
        </Alert>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="firstName" className="text-foreground mb-2 block">
            First Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="firstName"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
            className={errors.firstName ? 'border-destructive' : ''}
            disabled={isLoading || actorInitializing}
          />
          {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <Label htmlFor="lastName" className="text-foreground mb-2 block">
            Last Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="lastName"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
            className={errors.lastName ? 'border-destructive' : ''}
            disabled={isLoading || actorInitializing}
          />
          {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="companyName" className="text-foreground mb-2 block">
          Company Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="companyName"
          value={formData.companyName}
          onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          className={errors.companyName ? 'border-destructive' : ''}
          disabled={isLoading || actorInitializing}
        />
        {errors.companyName && <p className="text-sm text-destructive mt-1">{errors.companyName}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="industry" className="text-foreground mb-2 block">
            Industry <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.industry}
            onValueChange={(value) => setFormData({ ...formData, industry: value })}
            disabled={isLoading || actorInitializing}
          >
            <SelectTrigger id="industry" className={errors.industry ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select industry" />
            </SelectTrigger>
            <SelectContent>
              {industries.map((industry) => (
                <SelectItem key={industry} value={industry}>
                  {industry}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.industry && <p className="text-sm text-destructive mt-1">{errors.industry}</p>}
        </div>

        <div>
          <Label htmlFor="revenueRange" className="text-foreground mb-2 block">
            Annual Revenue Range <span className="text-destructive">*</span>
          </Label>
          <Select
            value={formData.revenueRange}
            onValueChange={(value) => setFormData({ ...formData, revenueRange: value })}
            disabled={isLoading || actorInitializing}
          >
            <SelectTrigger id="revenueRange" className={errors.revenueRange ? 'border-destructive' : ''}>
              <SelectValue placeholder="Select range" />
            </SelectTrigger>
            <SelectContent>
              {revenueRanges.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.revenueRange && <p className="text-sm text-destructive mt-1">{errors.revenueRange}</p>}
        </div>
      </div>

      <div className="mb-6">
        <Label htmlFor="challenge" className="text-foreground mb-2 block">
          Biggest Operational Challenge <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="challenge"
          value={formData.challenge}
          onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
          className={errors.challenge ? 'border-destructive' : ''}
          rows={4}
          disabled={isLoading || actorInitializing}
        />
        {errors.challenge && <p className="text-sm text-destructive mt-1">{errors.challenge}</p>}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div>
          <Label htmlFor="email" className="text-foreground mb-2 block">
            Work Email <span className="text-destructive">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={errors.email ? 'border-destructive' : ''}
            disabled={isLoading || actorInitializing}
          />
          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
        </div>

        <div>
          <Label htmlFor="mobile" className="text-foreground mb-2 block">
            Mobile Number <span className="text-destructive">*</span>
          </Label>
          <Input
            id="mobile"
            type="tel"
            value={formData.mobile}
            onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
            className={errors.mobile ? 'border-destructive' : ''}
            disabled={isLoading || actorInitializing}
          />
          {errors.mobile && <p className="text-sm text-destructive mt-1">{errors.mobile}</p>}
        </div>
      </div>

      <Button
        type="submit"
        disabled={isLoading || actorInitializing}
        className="w-full bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg py-6"
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Submitting...
          </>
        ) : actorInitializing ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Connecting...
          </>
        ) : (
          'Request CONTROL™ Framework'
        )}
      </Button>
    </form>
  );
}
