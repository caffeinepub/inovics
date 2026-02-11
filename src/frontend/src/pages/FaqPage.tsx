import { PageHero } from '@/components/sections/PageHero';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';
import { StandardBulletList } from '@/components/shared/StandardBulletList';

interface FaqItem {
  question: string;
  answer: string[];
}

const faqs: FaqItem[] = [
  {
    question: 'What does Inovics actually do?',
    answer: [
      'Inovics designs and implements AI-powered business operating systems for ₹5–50 Cr legacy family-run businesses.',
      'We replace fragmented workflows, manual reporting, and founder dependency with structured, centralized infrastructure.',
      'We engineer architecture — not just software installation.',
    ],
  },
  {
    question: 'Who is your ideal client?',
    answer: [
      'We work with:',
      '₹5–50 Cr revenue businesses',
      '20+ employees',
      'Operationally complex companies',
      'Founder-led or second-generation leadership teams',
      'We are not suited for early-stage startups or marketing-only needs.',
    ],
  },
  {
    question: 'How is Business OS Implementation different from hiring an IT vendor?',
    answer: [
      'An IT vendor installs tools.',
      'We redesign your operational architecture.',
      'Our focus is:',
      'Founder dependency reduction',
      'Structural visibility',
      'Governance systems',
      'Centralized data',
      'AI-enabled decision support',
      'We treat transformation as infrastructure — not a tech project.',
    ],
  },
  {
    question: 'Do we need ERP to work with you?',
    answer: [
      'Not necessarily.',
      'Some businesses require ERP integration. Others need CRM + workflow architecture first.',
      'We evaluate your current systems before recommending change.',
      'Technology follows structure — not the other way around.',
    ],
  },
  {
    question: 'How long does implementation take?',
    answer: [
      'Typical Business OS Implementation spans: 90–180 days.',
      'The timeline depends on:',
      'Organizational complexity',
      'Team size',
      'Data fragmentation',
      'Integration depth',
      'AI intelligence layer scope',
      'We deploy in phases to avoid disruption.',
    ],
  },
  {
    question: 'What kind of results can we expect?',
    answer: [
      'Results vary by business, but common outcomes include:',
      '40–60% reduction in manual processes',
      'Faster reporting cycles',
      'Improved receivables tracking',
      'Reduced founder approval bottlenecks',
      'Real-time performance visibility',
      'The primary shift is structural control.',
    ],
  },
  {
    question: 'What is the Founder Control Blueprint™?',
    answer: [
      'It is our structured diagnostic engagement.',
      'Before implementation, we assess:',
      'Workflow gaps',
      'Data silos',
      'Founder dependency exposure',
      'Operational inefficiencies',
      'AI leverage potential',
      'This ensures transformation is intentional, not reactive.',
    ],
  },
  {
    question: 'What is the investment range?',
    answer: [
      'Business OS Implementation typically ranges from: ₹8L – ₹35L+',
      'The range depends on:',
      'System complexity',
      'Team scale',
      'Industry requirements',
      'Integration scope',
      'Intelligence layer depth',
      'We price infrastructure, not features.',
    ],
  },
  {
    question: 'Will our team need training?',
    answer: [
      'Yes. System adoption is critical.',
      'We conduct:',
      'Role-based onboarding',
      'Dashboard training',
      'Workflow education',
      'Governance alignment sessions',
      'Technology without adoption fails.',
    ],
  },
  {
    question: 'Will this disrupt daily operations?',
    answer: [
      'No. We implement in controlled phases.',
      'Parallel system testing ensures continuity. We avoid abrupt transitions.',
      'Structured rollout reduces risk.',
    ],
  },
  {
    question: 'How involved does the founder need to be?',
    answer: [
      'Founder involvement is essential during:',
      'Initial blueprint stage',
      'Architecture approval',
      'Governance structuring',
      'Post-implementation, involvement reduces significantly.',
      'The goal is controlled leadership — not constant oversight.',
    ],
  },
  {
    question: 'What industries do you specialize in?',
    answer: [
      'We work with:',
      'Manufacturing SMEs',
      'Distributors & Trading Businesses',
      'Professional Service Firms',
      'Second-generation family enterprises',
      'Our methodology adapts to industry complexity.',
    ],
  },
  {
    question: 'Do you provide ongoing support?',
    answer: [
      'Yes. Through our Digital Governance & Growth Council:',
      'Monthly performance reviews',
      'AI optimization',
      'System upgrades',
      'Governance seen-through',
      'We focus on long-term institutional strength.',
    ],
  },
  {
    question: 'Is AI mandatory in your implementation?',
    answer: [
      'AI is layered strategically.',
      'We first stabilize core infrastructure.',
      'Then we deploy intelligence where it creates measurable leverage:',
      'Forecasting',
      'Margin analytics',
      'Performance prediction',
      'Reporting automation',
      'AI without structure creates noise.',
    ],
  },
  {
    question: 'How do we begin?',
    answer: [
      'Step 1: Apply for a Founder Strategy Session.',
      'Step 2: Undergo Founder Control Blueprint™ diagnostic.',
      'Step 3: Receive structured transformation roadmap.',
      'Step 4: Begin Business OS Implementation.',
      'Transformation begins with clarity.',
    ],
  },
];

// Helper to detect if a line is a list item (starts with bullet or is short/descriptive)
function isListItem(line: string, index: number, allLines: string[]): boolean {
  // If line starts with bullet character, it's a list item
  if (line.trim().startsWith('•')) return true;
  
  // If previous line ends with colon and this line is short, it's likely a list item
  if (index > 0 && allLines[index - 1].trim().endsWith(':')) {
    return line.length < 80 && !line.endsWith('.');
  }
  
  return false;
}

// Process FAQ answer into structured content
function processFaqAnswer(answer: string[]) {
  const result: Array<{ type: 'text' | 'list'; content: string | string[] }> = [];
  let currentList: string[] = [];
  
  answer.forEach((line, index) => {
    const cleanLine = line.replace(/^•\s*/, '').trim();
    
    if (isListItem(line, index, answer)) {
      currentList.push(cleanLine);
    } else {
      // Flush current list if exists
      if (currentList.length > 0) {
        result.push({ type: 'list', content: currentList });
        currentList = [];
      }
      // Add text line
      if (cleanLine) {
        result.push({ type: 'text', content: cleanLine });
      }
    }
  });
  
  // Flush remaining list
  if (currentList.length > 0) {
    result.push({ type: 'list', content: currentList });
  }
  
  return result;
}

export function FaqPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Inovics – AI-Powered Digital Transformation for Legacy Businesses"
      />

      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => {
                const processedAnswer = processFaqAnswer(faq.answer);
                
                return (
                  <AccordionItem
                    key={index}
                    value={`faq-${index}`}
                    className="bg-card border-2 border-border rounded-xl overflow-hidden hover:border-accent-yellow/60 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <AccordionTrigger className="px-6 sm:px-8 py-6 hover:no-underline text-left group [&[data-state=open]]:border-b-2 [&[data-state=open]]:border-border [&[data-state=open]]:bg-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground pr-4 group-hover:text-accent-yellow transition-colors">
                        {faq.question}
                      </h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 sm:px-8 py-6">
                      <div className="space-y-4">
                        {processedAnswer.map((block, blockIndex) => {
                          if (block.type === 'list' && Array.isArray(block.content)) {
                            return (
                              <StandardBulletList
                                key={blockIndex}
                                items={block.content}
                              />
                            );
                          } else if (block.type === 'text') {
                            return (
                              <p
                                key={blockIndex}
                                className="text-base lg:text-lg leading-relaxed text-muted-foreground"
                              >
                                {block.content as string}
                              </p>
                            );
                          }
                          return null;
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>
      </section>

      <FinalCtaSection />
    </div>
  );
}
