import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, X, Clock, Target, TrendingUp, Shield } from 'lucide-react';
import { StrategySessionApplicationForm } from '@/components/forms/StrategySessionApplicationForm';

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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-charcoal">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url(/assets/generated/inovics-data-grid-bg-logo-palette.dim_1920x1080.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
              Schedule Your Founder Strategy Session
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
              A structured 60-minute diagnostic designed to identify system gaps, founder dependency risks, and AI transformation opportunities in your business.
            </p>
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
          </div>
        </div>
      </section>

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
              <p className="text-lg text-center text-muted-foreground">
                <span className="font-semibold text-foreground">Honest assessment if we're a fit.</span><br />
                Even if you don't proceed, you gain insight.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why We Limit Sessions */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              We Work With a Limited Number of Businesses Each Quarter.
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>Transformation requires deep engagement.</p>
              <p>We do not run high-volume calls.</p>
              <p className="font-semibold text-foreground">Every session is reviewed personally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application-form" className="py-16 lg:py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                Apply for a Founder Strategy Session
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Tell us about your business before scheduling.
              </p>
            </div>
            <StrategySessionApplicationForm />
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
              What Happens Next
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-card border-border p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4 mx-auto">
                  <span className="text-xl font-bold text-accent-yellow">1</span>
                </div>
                <p className="text-base text-foreground">We review your application.</p>
              </Card>

              <Card className="bg-card border-border p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4 mx-auto">
                  <span className="text-xl font-bold text-accent-yellow">2</span>
                </div>
                <p className="text-base text-foreground">If aligned, you receive a calendar link.</p>
              </Card>

              <Card className="bg-card border-border p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4 mx-auto">
                  <span className="text-xl font-bold text-accent-yellow">3</span>
                </div>
                <p className="text-base text-foreground">Pre-session briefing email is shared.</p>
              </Card>

              <Card className="bg-card border-border p-6 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent-yellow/10 mb-4 mx-auto">
                  <span className="text-xl font-bold text-accent-yellow">4</span>
                </div>
                <p className="text-base text-foreground">60-minute structured strategy session.</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-20 lg:py-32 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              Structure Precedes Scale.
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              If your business growth feels heavier than it should,<br />
              the issue is rarely effort — it's architecture.
            </p>
            <Button
              onClick={scrollToForm}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto"
            >
              Apply for Strategy Session
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
