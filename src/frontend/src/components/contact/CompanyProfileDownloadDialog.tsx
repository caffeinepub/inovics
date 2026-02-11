import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import { Loader2, Download, CheckCircle2, WifiOff, RefreshCw } from 'lucide-react';
import { COMPANY_PROFILE_URL } from '@/lib/contactConfig';

interface CompanyProfileDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

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

export function CompanyProfileDownloadDialog({ open, onOpenChange }: CompanyProfileDownloadDialogProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    industry: '',
    revenueRange: '',
    email: '',
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
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const message = `Company Profile Download Request
Company: ${formData.companyName}
Industry: ${formData.industry}
Revenue Range: ${formData.revenueRange}`;

    await submitLead({
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      industry: formData.industry,
      revenueRange: formData.revenueRange,
      email: formData.email,
      message,
    });

    // Trigger download on success
    if (!error) {
      setTimeout(() => {
        window.open(COMPANY_PROFILE_URL, '_blank');
      }, 500);
    }
  };

  const handleRetry = async () => {
    await retry();
  };

  const handleClose = () => {
    onOpenChange(false);
    // Reset form after a delay to avoid visual glitch
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        companyName: '',
        industry: '',
        revenueRange: '',
        email: '',
      });
      setErrors({});
    }, 300);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Download Company Profile</DialogTitle>
          <DialogDescription>
            Please provide your details to download our company profile.
          </DialogDescription>
        </DialogHeader>

        {isSuccess ? (
          <div className="text-center py-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-4">
              <CheckCircle2 className="h-8 w-8 text-accent-yellow" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Download Started!</h3>
            <p className="text-muted-foreground mb-6">
              Your download should begin shortly. If it doesn't start automatically, click the button below.
            </p>
            <div className="flex gap-3 justify-center">
              <Button
                onClick={() => window.open(COMPANY_PROFILE_URL, '_blank')}
                className="bg-accent-yellow text-navy hover:bg-accent-yellow/90"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Again
              </Button>
              <Button onClick={handleClose} variant="outline">
                Close
              </Button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {actorInitializing && (
              <Alert>
                <Loader2 className="h-4 w-4 animate-spin" />
                <AlertDescription>
                  Connecting to backend, please wait...
                </AlertDescription>
              </Alert>
            )}

            {error && (
              <Alert variant="destructive">
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

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="dialog-firstName">
                  First Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="dialog-firstName"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className={errors.firstName ? 'border-destructive' : ''}
                  disabled={isLoading || actorInitializing}
                />
                {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
              </div>

              <div>
                <Label htmlFor="dialog-lastName">
                  Last Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="dialog-lastName"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className={errors.lastName ? 'border-destructive' : ''}
                  disabled={isLoading || actorInitializing}
                />
                {errors.lastName && <p className="text-sm text-destructive mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="dialog-companyName">
                Company Name <span className="text-destructive">*</span>
              </Label>
              <Input
                id="dialog-companyName"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                className={errors.companyName ? 'border-destructive' : ''}
                disabled={isLoading || actorInitializing}
              />
              {errors.companyName && <p className="text-sm text-destructive mt-1">{errors.companyName}</p>}
            </div>

            <div>
              <Label htmlFor="dialog-industry">
                Industry <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.industry}
                onValueChange={(value) => setFormData({ ...formData, industry: value })}
                disabled={isLoading || actorInitializing}
              >
                <SelectTrigger id="dialog-industry" className={errors.industry ? 'border-destructive' : ''}>
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
              <Label htmlFor="dialog-revenueRange">
                Annual Revenue Range <span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.revenueRange}
                onValueChange={(value) => setFormData({ ...formData, revenueRange: value })}
                disabled={isLoading || actorInitializing}
              >
                <SelectTrigger id="dialog-revenueRange" className={errors.revenueRange ? 'border-destructive' : ''}>
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

            <div>
              <Label htmlFor="dialog-email">
                Work Email <span className="text-destructive">*</span>
              </Label>
              <Input
                id="dialog-email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={errors.email ? 'border-destructive' : ''}
                disabled={isLoading || actorInitializing}
              />
              {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
            </div>

            <div className="flex gap-3 pt-4">
              <Button
                type="submit"
                disabled={isLoading || actorInitializing}
                className="flex-1 bg-accent-yellow text-navy hover:bg-accent-yellow/90"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : actorInitializing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Connecting...
                  </>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" />
                    Download Profile
                  </>
                )}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                disabled={isLoading}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
