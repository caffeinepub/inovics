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
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { CONTACT_CONFIG } from '@/lib/contactConfig';

interface CompanyProfileDownloadDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const revenueRanges = [
  '₹5–10 Cr',
  '₹10–25 Cr',
  '₹25–50 Cr',
  '50+ Cr',
];

export function CompanyProfileDownloadDialog({
  open,
  onOpenChange,
}: CompanyProfileDownloadDialogProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    companyName: '',
    revenueRange: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { submitLead, isLoading, isSuccess, error } = useLeadSubmission();

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Work email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    if (!formData.revenueRange) newErrors.revenueRange = 'Revenue range is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const message = `Company Profile Download Request
Company: ${formData.companyName}
Revenue Range: ${formData.revenueRange}

This is a company profile download request.`;

    await submitLead({
      firstName: formData.firstName,
      lastName: '',
      companyName: formData.companyName,
      revenueRange: formData.revenueRange,
      email: formData.email,
      message,
    });

    // Trigger download after successful submission
    if (CONTACT_CONFIG.companyProfileUrl) {
      window.open(CONTACT_CONFIG.companyProfileUrl, '_blank');
    }
  };

  const handleClose = () => {
    setFormData({
      firstName: '',
      email: '',
      companyName: '',
      revenueRange: '',
    });
    setErrors({});
    onOpenChange(false);
  };

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <div className="text-center py-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-6">
              <CheckCircle2 className="h-8 w-8 text-accent-yellow" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">Thank You!</h3>
            <p className="text-lg text-muted-foreground mb-6">
              {CONTACT_CONFIG.companyProfileUrl
                ? 'Your download should start automatically. If not, please check your downloads folder.'
                : 'We have received your request. Our team will send you the company profile shortly.'}
            </p>
            <Button
              onClick={handleClose}
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-foreground">
            Download Company Profile
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Please provide your details to access our company profile.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div>
            <Label htmlFor="firstName" className="text-foreground mb-2 block">
              First Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="firstName"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              className={errors.firstName ? 'border-destructive' : ''}
              disabled={isLoading}
              placeholder="Your first name"
            />
            {errors.firstName && <p className="text-sm text-destructive mt-1">{errors.firstName}</p>}
          </div>

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
              disabled={isLoading}
              placeholder="you@company.com"
            />
            {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
          </div>

          <div>
            <Label htmlFor="companyName" className="text-foreground mb-2 block">
              Company Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="companyName"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className={errors.companyName ? 'border-destructive' : ''}
              disabled={isLoading}
              placeholder="Your company"
            />
            {errors.companyName && <p className="text-sm text-destructive mt-1">{errors.companyName}</p>}
          </div>

          <div>
            <Label htmlFor="revenueRange" className="text-foreground mb-2 block">
              Revenue Range <span className="text-destructive">*</span>
            </Label>
            <Select
              value={formData.revenueRange}
              onValueChange={(value) => setFormData({ ...formData, revenueRange: value })}
              disabled={isLoading}
            >
              <SelectTrigger id="revenueRange" className={errors.revenueRange ? 'border-destructive' : ''}>
                <SelectValue placeholder="Select revenue range" />
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

          {error && (
            <div className="p-4 bg-destructive/10 border border-destructive rounded-lg">
              <p className="text-sm text-destructive">{error}</p>
            </div>
          )}

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Processing...
              </>
            ) : (
              'Download Now'
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
