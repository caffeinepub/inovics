import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Download, Mail, MessageCircle } from 'lucide-react';
import { CompanyProfileDownloadDialog } from './CompanyProfileDownloadDialog';
import { bookStrategyCall } from '@/lib/strategyCall';
import { CONTACT_CONFIG } from '@/lib/contactConfig';

export function ContactOptionsGrid() {
  const [isDownloadDialogOpen, setIsDownloadDialogOpen] = useState(false);

  const handleWhatsAppClick = () => {
    if (CONTACT_CONFIG.whatsappUrl) {
      window.open(CONTACT_CONFIG.whatsappUrl, '_blank');
    } else {
      alert('WhatsApp Business link is not configured. Please contact us via email.');
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Option 1: Book a Strategy Call */}
        <Card className="bg-background border-border hover:border-accent-yellow/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-accent-yellow/10 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-accent-yellow" />
            </div>
            <CardTitle className="text-xl text-foreground">Schedule a Founder Strategy Call</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="text-muted-foreground">
              Discuss your operational challenges, system gaps, and growth objectives with our transformation team.
            </CardDescription>
            <Button
              onClick={bookStrategyCall}
              className="w-full bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold"
            >
              Book Call
            </Button>
          </CardContent>
        </Card>

        {/* Option 2: Download Company Profile */}
        <Card className="bg-background border-border hover:border-accent-yellow/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-accent-yellow/10 flex items-center justify-center mb-4">
              <Download className="h-6 w-6 text-accent-yellow" />
            </div>
            <CardTitle className="text-xl text-foreground">Download Our Company Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="text-muted-foreground">
              Explore our methodology, industries served, engagement model, and case insights.
            </CardDescription>
            <Button
              onClick={() => setIsDownloadDialogOpen(true)}
              variant="outline"
              className="w-full border-accent-yellow text-accent-yellow hover:bg-accent-yellow/10 font-semibold"
            >
              Download Profile
            </Button>
          </CardContent>
        </Card>

        {/* Option 3: Email Us */}
        <Card className="bg-background border-border hover:border-accent-yellow/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-accent-yellow/10 flex items-center justify-center mb-4">
              <Mail className="h-6 w-6 text-accent-yellow" />
            </div>
            <CardTitle className="text-xl text-foreground">Reach Us Directly</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <a
                href="mailto:contact@inovics.in"
                className="text-accent-yellow hover:underline font-medium block"
              >
                contact@inovics.in
              </a>
              <CardDescription className="text-muted-foreground text-sm">
                For partnership inquiries, consulting discussions, or strategic conversations.
              </CardDescription>
              <p className="text-sm text-muted-foreground/80">Response time: 24–48 hours.</p>
            </div>
          </CardContent>
        </Card>

        {/* Option 4: WhatsApp Business */}
        <Card className="bg-background border-border hover:border-accent-yellow/50 transition-colors">
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-accent-yellow/10 flex items-center justify-center mb-4">
              <MessageCircle className="h-6 w-6 text-accent-yellow" />
            </div>
            <CardTitle className="text-xl text-foreground">Chat on WhatsApp</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <CardDescription className="text-muted-foreground">
              Prefer quick communication? Message us directly for an initial conversation.
            </CardDescription>
            <Button
              onClick={handleWhatsAppClick}
              variant="outline"
              className="w-full border-accent-yellow text-accent-yellow hover:bg-accent-yellow/10 font-semibold"
            >
              Start WhatsApp Chat
            </Button>
            <p className="text-xs text-muted-foreground/70 text-center">Serious inquiries only.</p>
          </CardContent>
        </Card>
      </div>

      <CompanyProfileDownloadDialog
        open={isDownloadDialogOpen}
        onOpenChange={setIsDownloadDialogOpen}
      />
    </>
  );
}
