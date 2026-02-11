import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { StandardBulletList } from '@/components/shared/StandardBulletList';

const processSteps = [
  {
    number: '01',
    title: 'Diagnose',
    subtitle: 'Founder Control Blueprint™',
    description:
      'We map your workflows, identify bottlenecks, and expose hidden dependencies. No generic assessments—just structured clarity.',
    details: [
      'Deep founder interview and operational audit',
      'Department-level workflow mapping',
      'Data architecture assessment',
      'Risk and dependency analysis',
      'Profit leakage identification',
    ],
  },
  {
    number: '02',
    title: 'Architect',
    subtitle: 'Business OS Design',
    description:
      'We design your centralized operating system—CRM, dashboards, workflows, and governance structures tailored to your business.',
    details: [
      'Centralized data architecture design',
      'CRM and workflow structure planning',
      'Access hierarchies and permissions',
      'Dashboard and reporting blueprint',
      'Automation roadmap development',
    ],
  },
  {
    number: '03',
    title: 'Implement',
    subtitle: 'Controlled Deployment',
    description:
      'We deploy systems in phases, train your team, and ensure adoption. No disruption. No chaos. Just structured transformation.',
    details: [
      'Phased system deployment',
      'Data migration and integration',
      'Team training and onboarding',
      'Workflow automation setup',
      'AI intelligence layer implementation',
    ],
  },
  {
    number: '04',
    title: 'Optimize',
    subtitle: 'Continuous Governance',
    description:
      'Post-implementation, we provide ongoing governance, AI optimization, and strategic advisory to ensure long-term institutional strength.',
    details: [
      'Monthly performance reviews',
      'AI model optimization',
      'System upgrades and enhancements',
      'Governance alignment sessions',
      'Strategic advisory and planning',
    ],
  },
];

export function ProcessSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured, risk-controlled path from operational chaos to institutional strength.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {processSteps.map((step, index) => (
              <AccordionItem
                key={index}
                value={`step-${index}`}
                className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent-yellow/50 transition-all"
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left [&[data-state=open]]:border-b [&[data-state=open]]:border-border">
                  <div className="flex items-center gap-4 w-full pr-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                      <span className="text-xl font-bold text-accent-yellow">
                        {step.number}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-accent-yellow font-semibold">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 py-5">
                  <div className="ml-16 space-y-4">
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground mb-3">
                        Key Activities:
                      </h4>
                      <StandardBulletList items={step.details} />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
