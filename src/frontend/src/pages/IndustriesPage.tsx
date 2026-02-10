import { Button } from '@/components/ui/button';
import { IndustriesLeadGenForm } from '@/components/forms/IndustriesLeadGenForm';
import { bookStrategyCall } from '@/lib/strategyCall';
import { CheckCircle2 } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { IndustryBlock } from '@/components/industries/IndustryBlock';
import { industriesContent } from '@/components/industries/industriesContent';

export function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-20">
        <PageHero
          title="Industries We Serve"
          subtitle="We specialize in transforming ₹5–50 Cr family-run businesses across four core sectors."
          description="Operational complexity, not industry, defines our fit."
        >
          <Button
            onClick={bookStrategyCall}
            size="lg"
            className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto mt-4"
          >
            Book Strategy Call
          </Button>
        </PageHero>
      </div>

      {/* Focus Statement */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl sm:text-2xl text-muted-foreground leading-relaxed">
              We work with businesses that have <strong className="text-foreground">outgrown manual systems</strong> but lack the internal capacity to architect transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Blocks */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {industriesContent.map((industry) => (
              <IndustryBlock key={industry.id} industry={industry} />
            ))}
          </div>
        </div>
      </section>

      {/* Consistency Section */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-8">
              What's Consistent Across All Industries
            </h2>
            <div className="bg-background border border-border rounded-xl p-8 lg:p-10">
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Founder-dependent decision-making</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Fragmented data across tools</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Manual, repetitive workflows</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Lack of real-time visibility</span>
                </li>
                <li className="flex items-start gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">No governance structure</span>
                </li>
              </ul>
              <p className="text-xl font-semibold text-foreground text-center mt-8">
                We solve structural problems, not industry-specific ones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Request Your Founder Blueprint™
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Tell us about your business and operational challenges.
            </p>
          </div>
          <IndustriesLeadGenForm />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto max-w-4xl text-center space-y-8">
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
      </section>
    </div>
  );
}
