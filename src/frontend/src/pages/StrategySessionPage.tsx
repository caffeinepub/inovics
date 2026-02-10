import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Clock, Target, TrendingUp, Shield } from 'lucide-react';
import { StrategySessionApplicationForm } from '@/components/forms/StrategySessionApplicationForm';
import { PageHero } from '@/components/sections/PageHero';

export function StrategySessionPage() {
  const scrollToForm = () => {
    const formElement = document.getElementById('application-form');
    if (formElement) {
      const offset = 80;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Focus first input after scroll
      setTimeout(() => {
        const firstInput = formElement.querySelector('input');
        if (firstInput) {
          firstInput.focus();
        }
      }, 500);
    }
  };

  return (
    <main className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <PageHero
        title="Schedule Your Founder Strategy Session"
        subtitle="A structured 60-minute diagnostic designed to identify system gaps, founder dependency risks, and AI transformation opportunities in your business."
      >
        <p className="text-lg text-accent-yellow font-semibold">
          This is not a sales call.<br />
          It is a strategic evaluation.
        </p>
        <Button
          onClick={scrollToForm}
          size="lg"
          className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto mt-4"
        >
          Apply for Strategy Session
        </Button>
      </PageHero>

      {/* Who This Session Is For */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
              This Session Is Designed For:
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* For */}
              <Card className="bg-background border-border p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Check className="h-6 w-6 text-accent-yellow" />
                  Ideal For
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-yellow shrink-0 mt-0.5" />
                    <p className="text-base text-foreground">₹5–50 Cr family-run businesses</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-yellow shrink-0 mt-0.5" />
                    <p className="text-base text-foreground">20+ employees</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-yellow shrink-0 mt-0.5" />
                    <p className="text-base text-foreground">Growing but operationally strained</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-yellow shrink-0 mt-0.5" />
                    <p className="text-base text-foreground">Founder-dependent systems</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-accent-yellow shrink-0 mt-0.5" />
                    <p className="text-base text-foreground">Excel-heavy workflows</p>
                  </div>
                </div>
              </Card>

              {/* Not For */}
              <Card className="bg-background border-border p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <X className="h-6 w-6 text-destructive" />
                  Not For
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">Early-stage startups</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">Businesses seeking website development</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">Marketing-only inquiries</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <X className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <p className="text-base text-muted-foreground">Casual exploration</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What We Will Cover */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
              What Happens in This 60-Minute Session
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-card border-border p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4">
                  <span className="text-2xl font-bold text-accent-yellow">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Current System Diagnosis</h3>
                <p className="text-base text-muted-foreground">
                  We identify operational bottlenecks and structural risks.
                </p>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4">
                  <span className="text-2xl font-bold text-accent-yellow">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Founder Dependency Mapping</h3>
                <p className="text-base text-muted-foreground">
                  Where is your business reliant on manual oversight?
                </p>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4">
                  <span className="text-2xl font-bold text-accent-yellow">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Data & Visibility Gaps</h3>
                <p className="text-base text-muted-foreground">
                  Do you truly have real-time control?
                </p>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4">
                  <span className="text-2xl font-bold text-accent-yellow">4</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">AI Leverage Opportunities</h3>
                <p className="text-base text-muted-foreground">
                  Where automation creates immediate impact.
                </p>
              </Card>

              <Card className="bg-card border-border p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4">
                  <span className="text-2xl font-bold text-accent-yellow">5</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Transformation Roadmap Overview</h3>
                <p className="text-base text-muted-foreground">
                  What your Business OS would look like.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You Walk Away With */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
              You Leave With Clarity.
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow/10 shrink-0">
                  <Target className="h-5 w-5 text-accent-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Immediate system risks identified</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow/10 shrink-0">
                  <TrendingUp className="h-5 w-5 text-accent-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Key bottlenecks mapped</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow/10 shrink-0">
                  <Shield className="h-5 w-5 text-accent-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Founder load analysis</h3>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent-yellow/10 shrink-0">
                  <Clock className="h-5 w-5 text-accent-yellow" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">Strategic next steps</h3>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-background border border-border rounded-xl">
              <p className="text-base text-muted-foreground text-center">
                <strong className="text-foreground">This is not a pitch.</strong> It's a structured diagnostic. If we're not the right fit, we'll tell you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Apply for Your Strategy Session
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Complete the form below. We review all applications personally and respond within 24–48 hours.
              </p>
            </div>
            <StrategySessionApplicationForm />
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
              What Happens After You Apply
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-4">
                  <span className="text-3xl font-bold text-accent-yellow">1</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Application Review</h3>
                <p className="text-base text-muted-foreground">
                  We review your submission within 24–48 hours to ensure mutual fit.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-4">
                  <span className="text-3xl font-bold text-accent-yellow">2</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Session Scheduled</h3>
                <p className="text-base text-muted-foreground">
                  If qualified, we'll send a calendar link to book your 60-minute session.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-yellow/10 mb-4">
                  <span className="text-3xl font-bold text-accent-yellow">3</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Strategic Diagnostic</h3>
                <p className="text-base text-muted-foreground">
                  We conduct a structured evaluation and provide immediate clarity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Structure Precedes Scale.
            </h2>
            <p className="text-xl text-muted-foreground">
              Every institutional business began with a structured decision.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
