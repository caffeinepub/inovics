import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProcessLeadGenForm } from '@/components/forms/ProcessLeadGenForm';
import { bookStrategyCall } from '@/lib/strategyCall';
import { PageHero } from '@/components/sections/PageHero';
import { StandardBulletList } from '@/components/shared/StandardBulletList';

export function ProcessPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="pt-20">
        <PageHero
          title="Our Process"
          subtitle="A structured, risk-controlled path from operational chaos to institutional strength."
          description="Digital transformation fails without structure. We bring structure first."
        >
          <Button
            onClick={bookStrategyCall}
            size="lg"
            className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto mt-4"
          >
            Start with a Founder Strategy Call
          </Button>
        </PageHero>
      </div>

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
            <StandardBulletList
              items={[
                'Skip diagnosis',
                'Rush into tool implementation',
                'Ignore internal resistance',
                'Lack governance planning',
              ]}
              className="mb-8"
            />
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
                <StandardBulletList
                  items={[
                    'Deep founder interview',
                    'Department-level workflow mapping',
                    'Data architecture audit',
                    'Risk & dependency analysis',
                    'Profit leakage identification',
                  ]}
                  className="mb-6"
                />
                
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
                <StandardBulletList
                  items={[
                    'Centralized data architecture',
                    'CRM & workflow structure',
                    'Access hierarchies',
                    'Dashboard blueprint',
                    'Automation roadmap',
                  ]}
                  className="mb-6"
                />
                
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
                <StandardBulletList
                  items={[
                    'Workflow automation',
                    'CRM deployment',
                    'Dashboard creation',
                    'Data migration',
                    'Integration setup',
                    'AI intelligence layer',
                  ]}
                  className="mb-6"
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Duration:</p>
                    <p className="text-lg text-foreground">8–12 weeks</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Outcome:</p>
                    <p className="text-lg text-foreground">A live, operational Business OS with training and adoption support.</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Stage 4 */}
            <Card className="p-8 lg:p-10 border-l-4 border-l-accent-yellow">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-accent-yellow">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Stage 4 — Optimize</h3>
                  <p className="text-lg text-muted-foreground font-semibold mb-4">Continuous governance and growth.</p>
                </div>
              </div>
              
              <div className="ml-16">
                <h4 className="text-lg font-semibold text-foreground mb-3">Includes:</h4>
                <StandardBulletList
                  items={[
                    'Monthly performance reviews',
                    'AI optimization',
                    'System upgrades',
                    'Governance alignment',
                    'Strategic advisory',
                  ]}
                  className="mb-6"
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Duration:</p>
                    <p className="text-lg text-foreground">Ongoing</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Outcome:</p>
                    <p className="text-lg text-foreground">Long-term institutional strength and continuous improvement.</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3 - What Makes Us Different */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            What Makes Us Different
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-border hover:border-accent-yellow/50 transition-all">
              <h3 className="text-2xl font-bold text-foreground mb-4">Traditional IT Vendors</h3>
              <StandardBulletList
                items={[
                  'Install software',
                  'Focus on features',
                  'One-time project',
                  'Limited governance',
                  'Reactive support',
                ]}
              />
            </Card>
            
            <Card className="p-8 border-2 border-accent-yellow/50 bg-accent-yellow/5">
              <h3 className="text-2xl font-bold text-accent-yellow mb-4">Inovics Approach</h3>
              <StandardBulletList
                items={[
                  'Engineer infrastructure',
                  'Focus on outcomes',
                  'Long-term partnership',
                  'Built-in governance',
                  'Proactive optimization',
                ]}
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Section 4 - Timeline Visual */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            Typical Implementation Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-accent-yellow/30"></div>
            
            <div className="space-y-8">
              <div className="relative pl-20">
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent-yellow border-4 border-background"></div>
                <Card className="p-6">
                  <p className="text-sm font-semibold text-accent-yellow mb-1">Weeks 1-4</p>
                  <h4 className="text-xl font-bold text-foreground mb-2">Diagnose</h4>
                  <p className="text-muted-foreground">Founder Control Blueprint™ diagnostic</p>
                </Card>
              </div>
              
              <div className="relative pl-20">
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent-yellow border-4 border-background"></div>
                <Card className="p-6">
                  <p className="text-sm font-semibold text-accent-yellow mb-1">Weeks 5-10</p>
                  <h4 className="text-xl font-bold text-foreground mb-2">Architect</h4>
                  <p className="text-muted-foreground">Business OS design and planning</p>
                </Card>
              </div>
              
              <div className="relative pl-20">
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent-yellow border-4 border-background"></div>
                <Card className="p-6">
                  <p className="text-sm font-semibold text-accent-yellow mb-1">Weeks 11-22</p>
                  <h4 className="text-xl font-bold text-foreground mb-2">Implement</h4>
                  <p className="text-muted-foreground">System deployment and training</p>
                </Card>
              </div>
              
              <div className="relative pl-20">
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-accent-yellow border-4 border-background"></div>
                <Card className="p-6">
                  <p className="text-sm font-semibold text-accent-yellow mb-1">Week 23+</p>
                  <h4 className="text-xl font-bold text-foreground mb-2">Optimize</h4>
                  <p className="text-muted-foreground">Continuous improvement and governance</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - What We Expect From You */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
            What We Expect From You
          </h2>
          <p className="text-xl text-muted-foreground mb-12 text-center max-w-3xl mx-auto">
            Transformation requires partnership. Here's what we need from your team:
          </p>
          
          <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
            <StandardBulletList
              items={[
                'Founder commitment to the diagnostic and architecture phases',
                'Designated internal champion to coordinate with our team',
                'Access to key stakeholders across departments',
                'Willingness to challenge existing processes',
                'Commitment to team training and adoption',
                'Transparency about operational challenges',
                'Patience with the structured implementation timeline',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Section 6 - Lead Gen Form */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Request Your Founder Blueprint™
            </h2>
            <p className="text-xl text-muted-foreground">
              Start with a structured diagnostic. No generic proposals.
            </p>
          </div>
          
          <ProcessLeadGenForm />
        </div>
      </section>
    </div>
  );
}
