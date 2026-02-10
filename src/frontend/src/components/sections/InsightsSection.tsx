import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const insights = [
  {
    title: 'Why Excel Is Killing Your Growth',
    excerpt:
      'Spreadsheets were never designed to run a ₹20 Cr business. Learn why scattered data is your biggest operational risk.',
    category: 'Operations',
  },
  {
    title: 'The Founder Dependency Trap',
    excerpt:
      'How successful family businesses accidentally build themselves around a single person—and what to do about it.',
    category: 'Leadership',
  },
  {
    title: 'AI for Legacy Businesses: A Practical Guide',
    excerpt:
      'Demystifying AI implementation for traditional Indian businesses. No hype, just practical transformation.',
    category: 'Technology',
  },
];

export function InsightsSection() {
  return (
    <section id="insights" className="py-24 lg:py-32 bg-background scroll-mt-20 relative overflow-hidden">
      {/* Abstract Insights Header Visual */}
      <div className="absolute top-0 left-0 right-0 h-48 opacity-20 pointer-events-none">
        <img
          src="/assets/generated/inovics-abstract-insights-header-v2.dim_1600x600.png"
          alt=""
          className="decorative-visual w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
            Insights
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {insights.map((insight, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent-yellow/50 transition-all hover:shadow-lg bg-card/95 backdrop-blur-sm group cursor-pointer"
              >
                <CardHeader>
                  <div className="text-sm font-semibold text-accent-yellow mb-2">
                    {insight.category}
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-accent-yellow transition-colors">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {insight.excerpt}
                  </CardDescription>
                  <div className="flex items-center text-accent-yellow font-medium text-sm group-hover:gap-2 transition-all">
                    Read More
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
