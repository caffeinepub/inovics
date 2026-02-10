import { Card } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { CaseStudyCard } from './CaseStudyCard';
import { MajorServiceTile } from './MajorServiceTile';
import type { IndustryContent } from './industriesContent';

interface IndustryBlockProps {
  industry: IndustryContent;
}

export function IndustryBlock({ industry }: IndustryBlockProps) {
  // Safely render only the tiles that have corresponding solutions
  const tilesToRender = industry.majorServices.slice(0, Math.min(industry.solutions.length, industry.majorServices.length));

  return (
    <div className="space-y-8">
      <Card className="p-8 lg:p-12 border-l-4 border-l-accent-yellow">
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            {industry.title}
          </h2>
          <p className="text-lg text-accent-yellow font-semibold">{industry.revenueRange}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column: Challenges & Solutions */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Common Challenges:</h3>
              <ul className="space-y-2">
                {industry.challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">What We Build:</h3>
              <ul className="space-y-2">
                {industry.solutions.map((solution, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-accent-yellow mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Major Services with captions matching solutions */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-4">Major Services:</h3>
            <div className="grid grid-cols-2 gap-4">
              {tilesToRender.map((service, idx) => (
                <MajorServiceTile key={idx} service={service} />
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Case Studies Section */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Case Studies</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {industry.caseStudies.map((caseStudy, idx) => (
            <CaseStudyCard key={idx} title={caseStudy.title} pdfUrl={caseStudy.pdfUrl} />
          ))}
        </div>
      </div>
    </div>
  );
}
