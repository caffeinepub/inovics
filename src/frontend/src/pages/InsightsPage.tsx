import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { InsightsNewsletterForm } from '@/components/forms/InsightsNewsletterForm';
import { bookStrategyCall } from '@/lib/strategyCall';
import { BookOpen, Building2, Cpu, TrendingUp, Users } from 'lucide-react';

const contentCategories = [
  {
    icon: Users,
    title: 'Founder Dependency & Governance',
    items: [
      'How to reduce operational bottlenecks',
      'Building systems beyond the founder',
      'Succession readiness in family businesses',
    ],
  },
  {
    icon: Cpu,
    title: 'AI & Operational Infrastructure',
    items: [
      'Where AI actually creates leverage',
      'Automation vs. over-automation',
      'Designing a centralized data layer',
      'Predictive dashboards for SMEs',
    ],
  },
  {
    icon: Building2,
    title: 'Industry-Specific System Design',
    items: [
      'Manufacturing system bottlenecks',
      'Distribution & inventory chaos',
      'CRM architecture for professional firms',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Growth Without Chaos',
    items: [
      'Why revenue growth breaks weak systems',
      'From spreadsheet chaos to structured visibility',
      'When to upgrade your operating system',
    ],
  },
];

const featuredArticles = [
  {
    title: 'Excel Is Not a Business System.',
    preview:
      'Most businesses outgrow spreadsheets long before they realize it. Learn why Excel becomes a liability at scale and what institutional systems look like.',
  },
  {
    title: 'Why Most Digital Transformations Fail in Family Businesses.',
    preview:
      'Digital transformation is not about technology—it is about governance. Discover the structural reasons legacy businesses struggle with modernization.',
  },
  {
    title: 'The Hidden Cost of Founder Dependency.',
    preview:
      'When every decision flows through one person, growth stalls. Explore how founder dependency creates invisible bottlenecks that limit institutional strength.',
  },
  {
    title: 'AI Is Not Strategy. System Design Is.',
    preview:
      'AI tools are everywhere, but without proper system architecture, they create more chaos than clarity. Learn the difference between tools and transformation.',
  },
  {
    title: 'From ₹10 Cr to ₹50 Cr: Why Structure Matters More Than Marketing.',
    preview:
      'Revenue growth without operational structure leads to chaos. Understand why scaling requires institutional systems, not just sales momentum.',
  },
  {
    title: 'Building Predictive Dashboards That Actually Drive Decisions.',
    preview:
      'Most dashboards are rear-view mirrors. Learn how to design forward-looking operational intelligence that enables proactive leadership.',
  },
];

export function InsightsPage() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        {/* Optional decorative header visual */}
        <div className="absolute inset-0 opacity-10">
          <img
            src="/assets/generated/inovics-abstract-insights-header-v2.dim_1600x600.png"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Insights for Institutional Growth
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed">
              Strategic thinking on AI, systems, governance, and scaling legacy family businesses beyond founder dependency.
            </p>
            <p className="text-lg text-accent-yellow font-medium">
              For founders who want structure — not noise.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center">
              We Don't Write About Trends.
              <br />
              <span className="text-accent-yellow">We Write About Structural Advantage.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 text-center">
              Most content talks about tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 shrink-0" />
                <p className="text-lg text-foreground">System design</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 shrink-0" />
                <p className="text-lg text-foreground">Governance architecture</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 shrink-0" />
                <p className="text-lg text-foreground">Founder dependency reduction</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 shrink-0" />
                <p className="text-lg text-foreground">AI-driven operational clarity</p>
              </div>
              <div className="flex items-start gap-3 sm:col-span-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-yellow mt-2 shrink-0" />
                <p className="text-lg text-foreground">Institutionalizing legacy businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Content Categories
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {contentCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="bg-card border-border hover:border-accent-yellow/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent-yellow/10 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-accent-yellow" />
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground leading-tight">
                        {category.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-yellow mt-2 shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-12 text-center">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="bg-card border-border hover:border-accent-yellow/50 transition-all hover:shadow-lg hover:shadow-accent-yellow/5 flex flex-col">
                <CardHeader>
                  <div className="flex items-start gap-3 mb-3">
                    <BookOpen className="w-5 h-5 text-accent-yellow shrink-0 mt-1" />
                    <CardTitle className="text-xl font-bold text-foreground leading-tight">
                      {article.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 line-clamp-2 flex-1">
                    {article.preview}
                  </p>
                  <Button
                    variant="outline"
                    className="border-accent-yellow text-accent-yellow hover:bg-accent-yellow/10 w-full"
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Letter */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-center">
              A Note to Founders
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Legacy businesses don't fail because of lack of effort.
                <br />
                They struggle because systems were never designed for scale.
              </p>
              <p>
                AI does not replace leadership.
                <br />
                It strengthens it — when implemented structurally.
              </p>
              <p className="text-foreground font-medium">
                At Inovics, we believe institutional strength is the ultimate competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Lead Capture */}
      <section className="py-16 lg:py-24 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Get Strategic Insights in Your Inbox
              </h2>
              <p className="text-lg text-muted-foreground">
                Practical thinking on AI infrastructure, governance, and scalable systems for growth-stage businesses.
              </p>
            </div>
            <InsightsNewsletterForm />
            <p className="text-sm text-muted-foreground text-center mt-6">
              No noise. Only strategic thinking.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
              Ready to Apply These Insights to Your Business?
            </h2>
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
