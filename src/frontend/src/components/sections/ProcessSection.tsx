import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';

const processSteps = [
  {
    number: '01',
    title: 'Founder Control Blueprint™',
    anchor: 'founder-control-blueprint',
    sections: [
      {
        heading: 'What It Is',
        content: [
          'A high-level structural diagnostic for serious businesses ready to confront operational reality.',
        ],
        punchline: 'We do not guess.\nWe map architecture.',
      },
      {
        heading: 'What We Examine',
        bullets: [
          'Founder dependency exposure',
          'Structural bottlenecks',
          'Data fragmentation',
          'Reporting blindness',
          'Decision latency',
          'Hidden profit leakage',
        ],
      },
      {
        heading: 'What You Gain',
        content: [
          'A clear, uncompromising view of how your business actually operates — not how you think it operates.',
        ],
        punchline: 'A structured transformation blueprint.\nNo fluff. No theory.',
        closing: 'This is where control begins.',
      },
    ],
    cta: 'Request Founder Control Blueprint™',
  },
  {
    number: '02',
    title: 'Business OS Implementation',
    anchor: 'business-os-implementation',
    sections: [
      {
        heading: 'What It Is',
        content: [
          'A full-scale operating system rebuild.',
        ],
        punchline: '90–180 days.\nStructured. Milestone-driven. Institutional.',
      },
      {
        heading: 'What We Build',
        bullets: [
          'Centralized CRM architecture',
          'Automated workflows',
          'ERP integration (where required)',
          'Defined approval hierarchies',
          'Real-time AI dashboards',
          'Reporting automation',
          'Role-based access control',
          'Structured document governance',
          'Lead-to-cash lifecycle tracking',
        ],
        punchline: 'We do not "install tools."\nWe engineer infrastructure.',
      },
      {
        heading: 'What Changes',
        bullets: [
          'One source of truth',
          'Founder-level command dashboard',
          '40–60% reduction in manual friction',
          'Structural accountability',
          'Scalable governance',
        ],
      },
      {
        heading: 'Investment',
        isInvestment: true,
        content: [
          '₹8L – ₹35L+',
          '(Complexity determines architecture.)',
        ],
        punchline: 'This is not software implementation.\nThis is institutional design.',
      },
    ],
    cta: 'Explore Business OS Implementation',
  },
  {
    number: '03',
    title: 'AI Intelligence Layer',
    anchor: 'ai-intelligence-layer',
    sections: [
      {
        heading: 'What It Is',
        content: [
          'The intelligence engine layered on top of your Business OS.',
        ],
        punchline: 'Most businesses collect data.\nFew use it structurally.',
      },
      {
        heading: 'What We Deploy',
        bullets: [
          'Predictive revenue forecasting',
          'Demand modelling',
          'Margin optimization analytics',
          'Performance intelligence dashboards',
          'AI-driven executive reporting',
        ],
        content: [
          'This is where you move from reactive oversight to predictive leadership.',
        ],
        punchline: 'Decisions become calculated.\nNot emotional.',
      },
    ],
    cta: 'Activate AI Intelligence',
  },
  {
    number: '04',
    title: 'Digital Governance & Growth Council',
    anchor: 'digital-governance-growth-council',
    sections: [
      {
        heading: 'What It Is',
        content: [
          'Ongoing institutional oversight for businesses that refuse regression.',
        ],
        punchline: 'Most vendors disappear after implementation.\nWe ensure evolution.',
      },
      {
        heading: 'What We Oversee',
        bullets: [
          'Monthly performance governance',
          'System optimization cycles',
          'AI upgrades',
          'Structural KPI reviews',
          'Leadership dashboard refinement',
          'Strategic recalibration',
        ],
      },
      {
        heading: 'What It Ensures',
        content: [
          'Your business does not drift back into chaos.',
          'It institutionalizes.',
        ],
        closing: 'This is partnership — not support.',
      },
    ],
    cta: 'Join the Governance Council',
  },
];

function navigateToContact(anchor: string) {
  window.history.pushState({}, '', `/contact#${anchor}`);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function ProcessSection() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-card scroll-mt-20 relative overflow-hidden">
      {/* Abstract Process Flow Visual */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-64 lg:h-full opacity-15 pointer-events-none">
        <img
          src="/assets/generated/inovics-abstract-process-flow.dim_1600x900.png"
          alt=""
          className="decorative-visual w-full h-full object-cover object-left"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
            How We Work
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            {processSteps.map((step, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background/95 backdrop-blur-sm border border-border rounded-lg overflow-hidden hover:border-accent-yellow/50 transition-all"
              >
                <AccordionTrigger className="px-6 sm:px-8 py-6 hover:no-underline [&[data-state=open]]:border-b [&[data-state=open]]:border-border">
                  <div className="flex items-center gap-4 sm:gap-6 text-left">
                    <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-accent-yellow/10 flex items-center justify-center border-2 border-accent-yellow">
                      <span className="text-xl sm:text-2xl font-bold text-accent-yellow">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 sm:px-8 py-8">
                  <div className="space-y-10">
                    {step.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex} className="space-y-4">
                        <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
                          {section.heading}
                        </h4>
                        
                        {section.isInvestment ? (
                          <div className="process-investment-block">
                            {section.content && section.content.map((line, idx) => (
                              <p key={idx} className="text-lg sm:text-xl font-semibold text-foreground">
                                {line}
                              </p>
                            ))}
                          </div>
                        ) : (
                          <>
                            {section.content && (
                              <div className="space-y-3">
                                {section.content.map((paragraph, pIndex) => (
                                  <p
                                    key={pIndex}
                                    className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                                  >
                                    {paragraph}
                                  </p>
                                ))}
                              </div>
                            )}
                          </>
                        )}
                        
                        {section.bullets && (
                          <ul className="space-y-3 mt-4">
                            {section.bullets.map((bullet, bIndex) => (
                              <li
                                key={bIndex}
                                className="text-base sm:text-lg text-muted-foreground leading-relaxed list-disc ml-6"
                              >
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        )}
                        
                        {section.punchline && (
                          <div className="process-punchline">
                            <p className="text-base sm:text-lg font-semibold text-foreground italic whitespace-pre-line leading-relaxed">
                              {section.punchline}
                            </p>
                          </div>
                        )}
                        
                        {section.closing && (
                          <p className="text-base sm:text-lg font-semibold text-accent-yellow mt-4">
                            {section.closing}
                          </p>
                        )}
                      </div>
                    ))}
                    <div className="pt-6">
                      <Button
                        onClick={() => navigateToContact(step.anchor)}
                        className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-base sm:text-lg px-6 py-6 h-auto"
                      >
                        {step.cta}
                      </Button>
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
