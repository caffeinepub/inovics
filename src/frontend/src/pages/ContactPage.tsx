import { Button } from '@/components/ui/button';
import { ContactOptionsGrid } from '@/components/contact/ContactOptionsGrid';
import { FounderControlBlueprintInquiryForm } from '@/components/forms/FounderControlBlueprintInquiryForm';
import { Check } from 'lucide-react';
import { bookStrategyCall } from '@/lib/strategyCall';
import { PageHero } from '@/components/sections/PageHero';
import { useEffect } from 'react';

export function ContactPage() {
  useEffect(() => {
    // Handle hash-based scroll after navigation
    if (window.location.hash) {
      const hash = window.location.hash.substring(1);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, []);

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <PageHero
        title="Let's Build Beyond the Founder."
        subtitle="Whether you're exploring transformation or ready to begin — start the conversation."
        description="We work with a limited number of growth-stage businesses each quarter."
      />

      {/* Contact Options Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
              Choose How You'd Like to Connect
            </h2>
            <ContactOptionsGrid />
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section id="founder-control-blueprint" className="py-16 lg:py-24 bg-background scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Request a Founder Control Blueprint™
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Tell us about your business and operational challenges.
              </p>
            </div>
            <FounderControlBlueprintInquiryForm />
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
              Who We Work With
            </h2>
            <div className="bg-background border border-border rounded-xl p-8 lg:p-10">
              <p className="text-lg text-muted-foreground mb-6">We are best suited for:</p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent-yellow shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">₹5–50 Cr revenue businesses</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent-yellow shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">20+ employees</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent-yellow shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">Growth-stage, system-fragmented companies</p>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="h-6 w-6 text-accent-yellow shrink-0 mt-0.5" />
                  <p className="text-lg text-foreground">Founders ready for structural transformation</p>
                </div>
              </div>
              <div className="pt-6 border-t border-border">
                <p className="text-base text-muted-foreground">
                  If you're seeking basic website development or marketing services, we may not be the right fit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Presence Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-8">
              Our Presence
            </h2>
            <div className="text-center mb-8">
              <p className="text-lg text-muted-foreground mb-2">Based in India.</p>
              <p className="text-lg text-muted-foreground">
                Serving growth-stage family businesses nationally.
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-border/50">
              <img
                src="/assets/generated/inovics-presence-map-india.dim_1400x600.png"
                alt="Inovics presence across India"
                className="w-full h-auto opacity-60"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Structure Precedes Scale.
            </h2>
            <p className="text-xl text-muted-foreground">
              Every institutional business began with a structured decision.
            </p>
            <Button
              onClick={bookStrategyCall}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto"
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
