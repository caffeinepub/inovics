import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ControlLeadGenForm } from '@/components/forms/ControlLeadGenForm';
import { bookStrategyCall } from '@/lib/strategyCall';
import { CheckCircle2 } from 'lucide-react';

export function ControlFrameworkPage() {
  const scrollToLeadGen = () => {
    const element = document.getElementById('lead-generation');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-background opacity-95" />
        <div className="absolute inset-0 bg-[url('/assets/generated/inovics-data-grid-bg-logo-palette.dim_1920x1080.png')] bg-cover bg-center opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              The CONTROL™ Framework
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed">
              A 7-stage methodology to transform founder-dependent chaos into institutional operating systems.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Built for ₹5–50 Cr family-run businesses ready to scale beyond founder dependency.
            </p>
            <Button
              onClick={scrollToLeadGen}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6"
            >
              Request Your Blueprint
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1 - What is CONTROL™? */}
      <section className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              What is CONTROL™?
            </h2>
            
            <Card className="bg-card border-border p-8 lg:p-10">
              <p className="text-lg text-muted-foreground mb-6">
                CONTROL™ is our proprietary 7-stage framework that systematically transforms fragmented, founder-dependent operations into scalable, AI-powered business operating systems.
              </p>
              
              <p className="text-lg text-muted-foreground mb-6">
                It's not a software product. It's a transformation methodology.
              </p>
              
              <p className="text-lg text-foreground font-semibold">
                Each stage builds on the previous one — creating institutional strength layer by layer.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2 - The 7 Stages */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              The 7 Stages of CONTROL™
            </h2>
            
            <div className="space-y-8">
              {/* Stage 1 - Clarify */}
              <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-yellow">C</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Clarify</h3>
                    <p className="text-lg text-muted-foreground">Map the current state of operational chaos.</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-muted-foreground mb-4">
                    We conduct deep founder interviews, department-level workflow mapping, and data architecture audits to understand where systems are broken and where founder dependency is highest.
                  </p>
                  <p className="text-foreground font-semibold">
                    Outcome: A diagnostic report showing operational bottlenecks and profit leakage points.
                  </p>
                </div>
              </Card>

              {/* Stage 2 - Organize */}
              <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-yellow">O</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Organize</h3>
                    <p className="text-lg text-muted-foreground">Design the centralized data architecture.</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-muted-foreground mb-4">
                    We structure your business data layer — defining how information flows between departments, what gets tracked, and how decisions will be made using real-time data instead of gut feel.
                  </p>
                  <p className="text-foreground font-semibold">
                    Outcome: A system blueprint defining your future operating model.
                  </p>
                </div>
              </Card>

              {/* Stage 3 - Normalize */}
              <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-yellow">N</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Normalize</h3>
                    <p className="text-lg text-muted-foreground">Standardize workflows and eliminate inconsistencies.</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-muted-foreground mb-4">
                    We digitize SOPs, create approval hierarchies, and ensure every department follows the same process — removing the "it depends on who you ask" problem.
                  </p>
                  <p className="text-foreground font-semibold">
                    Outcome: Consistent, repeatable processes across the organization.
                  </p>
                </div>
              </Card>

              {/* Stage 4 - Transform */}
              <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-yellow">T</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Transform</h3>
                    <p className="text-lg text-muted-foreground">Deploy automation and integrated systems.</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-muted-foreground mb-4">
                    We implement CRM, workflow automation, dashboards, and approval routing systems — replacing manual coordination with automated intelligence.
                  </p>
                  <p className="text-foreground font-semibold">
                    Outcome: Live operational systems replacing fragmented spreadsheets and WhatsApp groups.
                  </p>
                </div>
              </Card>

              {/* Stage 5 - Report */}
              <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-yellow">R</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Report</h3>
                    <p className="text-lg text-muted-foreground">Build real-time founder dashboards.</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-muted-foreground mb-4">
                    We create executive dashboards that give founders real-time visibility into sales, operations, cash flow, and team performance — without asking anyone for updates.
                  </p>
                  <p className="text-foreground font-semibold">
                    Outcome: Data-driven decision-making instead of reactive firefighting.
                  </p>
                </div>
              </Card>

              {/* Stage 6 - Optimize */}
              <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-yellow">O</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Optimize</h3>
                    <p className="text-lg text-muted-foreground">Layer AI-powered intelligence.</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-muted-foreground mb-4">
                    We add predictive analytics, forecasting models, and AI-driven insights that help you anticipate problems before they happen and identify growth opportunities automatically.
                  </p>
                  <p className="text-foreground font-semibold">
                    Outcome: Proactive business management powered by AI.
                  </p>
                </div>
              </Card>

              {/* Stage 7 - Lead */}
              <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent-yellow">L</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">Lead</h3>
                    <p className="text-lg text-muted-foreground">Institutionalize governance and leadership.</p>
                  </div>
                </div>
                
                <div className="ml-16">
                  <p className="text-muted-foreground mb-4">
                    We establish governance structures, performance review cadences, and leadership dashboards that allow the business to run independently of the founder's daily involvement.
                  </p>
                  <p className="text-foreground font-semibold">
                    Outcome: A business that scales without founder dependency.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - What Changes After CONTROL™? */}
      <section className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              What Changes After CONTROL™?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold text-destructive mb-6">Before:</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Founder approves everything</li>
                  <li>• Data scattered across tools</li>
                  <li>• Manual reporting takes days</li>
                  <li>• Team waits for decisions</li>
                  <li>• Growth creates chaos</li>
                </ul>
              </Card>
              
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold text-accent-yellow mb-6">After:</h3>
                <ul className="space-y-3">
                  {[
                    'Systems make decisions',
                    'Centralized data layer',
                    'Real-time dashboards',
                    'Team operates independently',
                    'Growth creates predictability',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Who is This For? */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              Who is CONTROL™ For?
            </h2>
            
            <Card className="bg-card border-border p-8 lg:p-10">
              <p className="text-lg text-muted-foreground mb-6">
                CONTROL™ is designed for:
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  '₹5–50 Cr family-run businesses',
                  'Second-generation leaders inheriting legacy operations',
                  'Founders feeling trapped by operational chaos',
                  'Businesses where growth is creating more problems than profits',
                  'Companies ready to institutionalize — not just digitize',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              
              <p className="text-lg text-foreground font-semibold text-center">
                If you're looking for a quick fix or a basic software tool — this is not for you.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 5 - Lead Generation */}
      <section id="lead-generation" className="py-20 lg:py-28 bg-card/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Request Your Founder Control Blueprint™
              </h2>
              <p className="text-xl text-muted-foreground">
                Get a custom diagnostic report showing where your business is leaking control — and how to fix it.
              </p>
            </div>
            
            <ControlLeadGenForm />
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Ready to Take Back Control?
            </h2>
            <Button
              onClick={bookStrategyCall}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6"
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
