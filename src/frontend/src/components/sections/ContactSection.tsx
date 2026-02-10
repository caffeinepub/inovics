import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { bookStrategyCall } from '@/lib/strategyCall';
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_ADDRESS } from '@/lib/contactConfig';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-background scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Contact
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your business? Let's start the conversation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4">
                <Mail className="h-6 w-6 text-accent-yellow" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-muted-foreground hover:text-accent-yellow transition-colors"
              >
                {CONTACT_EMAIL}
              </a>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4">
                <Phone className="h-6 w-6 text-accent-yellow" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Phone</h3>
              <a
                href={CONTACT_PHONE_TEL}
                className="text-muted-foreground hover:text-accent-yellow transition-colors"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
            </div>

            <div className="text-center p-6 rounded-lg bg-card border border-border">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4">
                <MapPin className="h-6 w-6 text-accent-yellow" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Location</h3>
              <p className="text-muted-foreground">{CONTACT_ADDRESS}</p>
            </div>
          </div>

          <div className="text-center">
            <Button
              onClick={bookStrategyCall}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto"
            >
              Schedule Your Strategy Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
