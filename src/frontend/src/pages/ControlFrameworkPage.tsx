import { Button } from '@/components/ui/button';
import { ControlLeadGenForm } from '@/components/forms/ControlLeadGenForm';
import { bookStrategyCall } from '@/lib/strategyCall';
import { CheckCircle2 } from 'lucide-react';

const frameworkDetails = [
  {
    letter: 'C',
    title: 'Clarify',
    description: 'We conduct a deep diagnostic across departments to identify:',
    points: [
      'Data silos',
      'Approval bottlenecks',
      'Founder dependency points',
      'Profit leakage',
      'Reporting inefficiencies',
    ],
    outcome: 'A Founder Control Blueprint™ that defines your transformation roadmap.',
  },
  {
    letter: 'O',
    title: 'Organize',
    description: 'We design a centralized data architecture.',
    points: [
      'Unified data layer',
      'CRM + operations integration',
      'Access hierarchy design',
      'Role-based visibility',
    ],
    outcome: 'A single source of truth.',
  },
  {
    letter: 'N',
    title: 'Normalize',
    description: 'We convert tribal knowledge into documented digital processes.',
    points: [
      'SOP digitization',
      'Workflow mapping',
      'Approval routing',
      'Department alignment',
    ],
    outcome: 'Predictable execution.',
  },
  {
    letter: 'T',
    title: 'Transform',
    description: 'We implement automation and AI-powered workflows.',
    points: [
      'CRM automation',
      'Sales tracking',
      'Inventory sync',
      'Approval workflows',
      'Internal dashboards',
    ],
    outcome: 'Reduced manual workload and faster decisions.',
  },
  {
    letter: 'R',
    title: 'Report',
    description: 'We build real-time founder dashboards.',
    points: [
      'Sales visibility',
      'Margin tracking',
      'Department performance',
      'Cash flow indicators',
    ],
    outcome: 'Control without constant follow-up.',
  },
  {
    letter: 'O',
    title: 'Optimize',
    description: 'Once systems are stable, we layer intelligence.',
    points: [
      'Forecasting models',
      'Predictive insights',
      'Margin optimization',
      'Performance analytics',
    ],
    outcome: 'Smarter decisions, not reactive management.',
  },
  {
    letter: 'L',
    title: 'Lead',
    description: 'We institutionalize governance.',
    points: [
      'Structured review systems',
      'Leadership dashboards',
      'Succession-ready transparency',
      'Reduced founder dependency',
    ],
    outcome: 'A business that scales beyond the founder.',
  },
];

export function ControlFrameworkPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-background via-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
              The CONTROL™ Framework
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
              A structured AI-powered methodology designed to transform founder-driven businesses into system-driven enterprises.
            </p>
            <p className="text-lg text-muted-foreground mb-10">
              If growth has exposed operational chaos, this is your blueprint for clarity, control, and continuity.
            </p>
            <Button
              onClick={bookStrategyCall}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto"
            >
              Book a Founder Strategy Call
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1 - Why a Framework */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">
              Digital Tools Don't Fix Broken Systems.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>Most businesses try to solve operational problems by buying software.</p>
              <p className="pl-6 border-l-4 border-accent-yellow/50">
                New CRM.<br />
                New ERP.<br />
                New dashboards.
              </p>
              <p>But tools without structure create more complexity.</p>
              <p className="text-xl font-semibold text-foreground mt-8">
                The CONTROL™ Framework is not about installing software.<br />
                It is about institutionalizing your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - The CONTROL Framework (Detailed) */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-16 text-center text-foreground">
              The CONTROL™ Framework
            </h2>
            <div className="space-y-16">
              {frameworkDetails.map((step, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-8 lg:p-10">
                  <div className="flex items-start gap-6 mb-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-accent-yellow flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">{step.letter}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-foreground mb-4">{step.title}</h3>
                      <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                      <ul className="space-y-3 mb-6">
                        {step.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-accent-yellow flex-shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="bg-accent-yellow/10 border border-accent-yellow/30 rounded-lg p-4">
                        <p className="text-sm font-semibold text-foreground">
                          <span className="text-accent-yellow">Outcome:</span> {step.outcome}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - What This Means For You */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-foreground">
              From Operational Chaos to Institutional Strength
            </h2>
            <div className="bg-card border border-border rounded-xl p-8 lg:p-10 mb-8">
              <p className="text-lg text-muted-foreground mb-6">After CONTROL™ implementation:</p>
              <ul className="space-y-4">
                {[
                  '40–60% reduction in manual processes',
                  'Real-time performance visibility',
                  'Faster decision-making cycles',
                  'Transparent accountability',
                  'Scalable governance systems',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center text-xl space-y-2">
              <p className="text-foreground font-semibold">You stop managing chaos.</p>
              <p className="text-accent-yellow font-bold">You start leading growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Who This Is For */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center text-foreground">
              This Framework Is Designed For:
            </h2>
            <div className="bg-card border border-border rounded-xl p-8 lg:p-10 mb-8">
              <ul className="space-y-4">
                {[
                  '₹5–50 Cr family-run businesses',
                  'Founders overwhelmed by operational oversight',
                  'Second-generation leaders modernizing legacy systems',
                  'Businesses dependent on Excel & WhatsApp workflows',
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-lg">
                    <CheckCircle2 className="h-6 w-6 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center text-lg space-y-3 text-muted-foreground">
              <p>If you want a website redesign, this isn't for you.</p>
              <p className="text-xl font-semibold text-foreground">
                If you want institutional-grade systems — we should talk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Lead Generation Form */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
                Request Your Founder Control Blueprint™
              </h2>
              <p className="text-xl text-muted-foreground">
                Let's assess your current systems and identify the gaps limiting your scale.
              </p>
            </div>
            <ControlLeadGenForm />
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-foreground">
              Ready to Build Beyond the Founder?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              The CONTROL™ Framework is not a software upgrade.<br />
              It is a structural transformation of how your business operates.
            </p>
            <Button
              onClick={bookStrategyCall}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto"
            >
              Book a Founder Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
