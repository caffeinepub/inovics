import { Factory, Package, Briefcase, Users2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const industries = [
  {
    icon: Factory,
    title: 'Manufacturing SMEs',
    description: 'Transform production workflows and supply chain operations with intelligent systems.',
  },
  {
    icon: Package,
    title: 'Distributors & Traders',
    description: 'Streamline inventory, logistics, and order management with real-time visibility.',
  },
  {
    icon: Briefcase,
    title: 'Professional Service Firms',
    description: 'Automate client management, project tracking, and resource allocation.',
  },
  {
    icon: Users2,
    title: 'Second-Generation Leadership',
    description: 'Build institutional systems that enable smooth succession and sustained growth.',
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 lg:py-32 bg-background scroll-mt-20 relative overflow-hidden">
      {/* Abstract Industry Mosaic Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src="/assets/generated/inovics-abstract-industry-mosaic.dim_1600x900.png"
          alt=""
          className="decorative-visual w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Built for Ambitious Family Businesses
            </h2>
            <p className="text-xl text-accent-yellow font-semibold">Revenue Range: ₹5–50 Cr</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="border-border hover:border-accent-yellow/50 transition-all hover:shadow-lg bg-card/95 backdrop-blur-sm"
              >
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-accent-yellow/10 mb-4">
                    <industry.icon className="h-6 w-6 text-accent-yellow" strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-2xl text-foreground">{industry.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
