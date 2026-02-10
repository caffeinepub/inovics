import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProcessLeadGenForm } from '@/components/forms/ProcessLeadGenForm';
import { bookStrategyCall } from '@/lib/strategyCall';
import { CheckCircle2 } from 'lucide-react';

export function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-charcoal to-navy">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Our Process
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
            A structured, risk-controlled path from operational chaos to institutional strength.
          </p>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Digital transformation fails without structure.<br />
            We bring structure first.
          </p>
          <Button
            onClick={bookStrategyCall}
            size="lg"
            className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6"
          >
            Start with a Founder Strategy Call
          </Button>
        </div>
      </section>

      {/* Section 1 - The Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
            We Don't Install Software.<br />
            We Engineer Business Infrastructure.
          </h2>
          <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
            <p className="text-lg text-muted-foreground mb-6">
              Most digital projects fail because they:
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-lg text-muted-foreground">
                <span className="text-destructive mt-1">•</span>
                <span>Skip diagnosis</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-muted-foreground">
                <span className="text-destructive mt-1">•</span>
                <span>Rush into tool implementation</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-muted-foreground">
                <span className="text-destructive mt-1">•</span>
                <span>Ignore internal resistance</span>
              </li>
              <li className="flex items-start gap-3 text-lg text-muted-foreground">
                <span className="text-destructive mt-1">•</span>
                <span>Lack governance planning</span>
              </li>
            </ul>
            <p className="text-xl font-semibold text-foreground text-center">
              At Inovics, transformation is engineered in phases — not improvised.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 - The 4-Stage Process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            The 4-Stage Process
          </h2>
          
          <div className="space-y-8">
            {/* Stage 1 */}
            <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-yellow">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Stage 1 — Diagnose</h3>
                  <p className="text-lg text-accent-yellow font-semibold mb-4">Founder Control Blueprint™</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-foreground mb-3">What Happens:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Deep founder interview</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Department-level workflow mapping</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Data architecture audit</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Risk & dependency analysis</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Profit leakage identification</span>
                  </li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Duration:</p>
                    <p className="text-lg text-foreground">2–4 weeks</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Outcome:</p>
                    <p className="text-lg text-foreground">A structured transformation roadmap with clear priorities and ROI mapping.</p>
                  </div>
                </div>
                
                <p className="text-lg font-semibold text-accent-yellow italic">
                  No implementation starts without clarity.
                </p>
              </div>
            </Card>

            {/* Stage 2 */}
            <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-yellow">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Stage 2 — Architect</h3>
                  <p className="text-lg text-muted-foreground font-semibold mb-4">We design your Business Operating System.</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-foreground mb-3">Includes:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Centralized data architecture</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>CRM & workflow structure</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Access hierarchies</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Dashboard blueprint</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Automation roadmap</span>
                  </li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Duration:</p>
                    <p className="text-lg text-foreground">3–6 weeks</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Outcome:</p>
                    <p className="text-lg text-foreground">A system design document that defines how your business will function post-transformation.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stage 3 */}
            <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-yellow">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Stage 3 — Implement</h3>
                  <p className="text-lg text-muted-foreground font-semibold mb-4">Controlled deployment of systems.</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-foreground mb-3">Includes:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Workflow automation</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>CRM deployment</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Dashboard creation</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Approval routing systems</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>SOP digitization</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Internal team onboarding</span>
                  </li>
                </ul>
                
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Duration:</p>
                    <p className="text-lg text-foreground">8–16 weeks</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Outcome:</p>
                    <p className="text-lg text-foreground">Live operational systems replacing fragmented processes.</p>
                  </div>
                </div>
                
                <p className="text-lg font-semibold text-foreground italic">
                  We implement in phases to reduce disruption.
                </p>
              </div>
            </Card>

            {/* Stage 4 */}
            <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-yellow">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Stage 4 — Institutionalize</h3>
                  <p className="text-lg text-muted-foreground font-semibold mb-4">Where most vendors stop — we don't.</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-foreground mb-3">Includes:</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Governance structure setup</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Performance review cadence</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Leadership dashboard integration</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>AI optimization layer</span>
                  </li>
                  <li className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>Ongoing refinement</span>
                  </li>
                </ul>
                
                <div>
                  <p className="text-sm font-semibold text-muted-foreground mb-1">Outcome:</p>
                  <p className="text-lg text-foreground font-semibold">
                    A business that runs on systems, not founder intervention.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3 - What Makes Our Process Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            Why Transformations Fail — And Why Ours Don't
          </h2>
          
          <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
            <p className="text-lg text-muted-foreground mb-6">We focus on:</p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Founder alignment first</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Structured rollout</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Team adoption management</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Clear governance</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Measurable KPIs</span>
              </li>
            </ul>
            <p className="text-xl font-semibold text-foreground text-center">
              We treat transformation as infrastructure — not a tech project.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 - Timeline Visual Block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            Typical Engagement Timeline
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent-yellow mb-3">Month 1</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Diagnosis & Blueprint</h3>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent-yellow mb-3">Month 2</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">System Architecture</h3>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent-yellow mb-3">Month 3–5</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Phased Implementation</h3>
            </Card>
            
            <Card className="p-6 text-center">
              <div className="text-4xl font-bold text-accent-yellow mb-3">Month 6+</div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Governance & Optimization</h3>
            </Card>
          </div>
          
          <p className="text-lg text-muted-foreground text-center italic">
            Clear expectations reduce friction.
          </p>
        </div>
      </section>

      {/* Section 5 - Client Responsibility */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            What We Expect From You
          </h2>
          
          <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Founder commitment</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Internal decision authority</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Team participation</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="h-6 w-6 text-accent-yellow mt-0.5 flex-shrink-0" />
                <span className="text-foreground">Process transparency</span>
              </li>
            </ul>
            <p className="text-xl font-semibold text-foreground text-center">
              Transformation is collaborative.
            </p>
          </div>
        </div>
      </section>

      {/* Section 6 - Lead Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Begin the Process?
            </h2>
            <p className="text-xl text-muted-foreground">
              Every transformation begins with a structured diagnosis.
            </p>
          </div>
          
          <ProcessLeadGenForm />
          
          <p className="text-sm text-muted-foreground text-center mt-6 italic">
            We work with a limited number of businesses per quarter.
          </p>
        </div>
      </section>

      {/* Final Block */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-navy via-charcoal to-navy">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8">
            Structure Precedes Scale.
          </h2>
          <Button
            onClick={bookStrategyCall}
            size="lg"
            className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6"
          >
            Book Strategy Call
          </Button>
        </div>
      </section>
    </div>
  );
}
