import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { IndustriesLeadGenForm } from '@/components/forms/IndustriesLeadGenForm';
import { bookStrategyCall } from '@/lib/strategyCall';
import { CheckCircle2 } from 'lucide-react';

export function IndustriesPage() {
  const scrollToLeadGen = () => {
    const element = document.getElementById('lead-generation');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-charcoal to-background opacity-95" />
        <div className="absolute inset-0 bg-[url('/assets/generated/inovics-data-grid-bg-logo-palette.dim_1920x1080.png')] bg-cover bg-center opacity-10" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Industries We Institutionalize
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-4 leading-relaxed">
              AI-powered operating systems tailored for legacy family-run businesses ready to scale beyond founder dependency.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Different industries. Same problem. Broken systems limiting growth.
            </p>
            <Button
              onClick={scrollToLeadGen}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6"
            >
              Request Founder Blueprint
            </Button>
          </div>
        </div>
      </section>

      {/* Section 1 - Our Focus */}
      <section className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              We Work with Operationally Complex, Growth-Stage Businesses
            </h2>
            
            <Card className="bg-card border-border p-8 lg:p-10">
              <p className="text-lg text-muted-foreground mb-6">
                We specialize in ₹5–50 Cr family-run businesses where:
              </p>
              
              <ul className="space-y-4">
                {[
                  'Revenue is growing',
                  'Systems are fragmented',
                  'Data is scattered',
                  'Founder dependency is high',
                  'Visibility is low',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-accent-yellow flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 2 - Industry Blocks */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Manufacturing SMEs */}
            <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                1️⃣ Manufacturing SMEs
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">Common Challenges:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Inventory misalignment</li>
                    <li>• Production planning inefficiencies</li>
                    <li>• Manual reporting</li>
                    <li>• No real-time margin tracking</li>
                    <li>• Department silos</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">What We Implement:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Integrated CRM + production visibility</li>
                    <li>• Inventory tracking systems</li>
                    <li>• Automated reporting dashboards</li>
                    <li>• Approval workflows</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">Outcome:</h4>
                  <p className="text-foreground font-medium">
                    Operational clarity from raw material to dispatch.
                  </p>
                </div>
              </div>
            </div>

            {/* Distributors & Trading Companies */}
            <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                2️⃣ Distributors & Trading Companies
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">Common Challenges:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Order management chaos</li>
                    <li>• Stock visibility gaps</li>
                    <li>• Credit cycle mismanagement</li>
                    <li>• Sales tracking inconsistencies</li>
                    <li>• WhatsApp-based coordination</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">What We Implement:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Sales pipeline automation</li>
                    <li>• Inventory visibility dashboards</li>
                    <li>• Credit & payment tracking systems</li>
                    <li>• Centralized order workflows</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">Outcome:</h4>
                  <p className="text-foreground font-medium">
                    Controlled cash flow. Transparent performance. Scalable sales operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Service Firms */}
            <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                3️⃣ Professional Service Firms (CA, Legal, Consultants)
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">Common Challenges:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Client tracking in spreadsheets</li>
                    <li>• Missed follow-ups</li>
                    <li>• Billing inefficiencies</li>
                    <li>• Dependency on key individuals</li>
                    <li>• No structured reporting</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">What We Implement:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• CRM-based client lifecycle management</li>
                    <li>• Task automation workflows</li>
                    <li>• Billing and payment dashboards</li>
                    <li>• Performance tracking systems</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">Outcome:</h4>
                  <p className="text-foreground font-medium">
                    Structured growth without operational overwhelm.
                  </p>
                </div>
              </div>
            </div>

            {/* Second-Generation Leadership Teams */}
            <div className="bg-card border border-border rounded-xl p-8 lg:p-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                4️⃣ Second-Generation Leadership Teams
              </h3>
              
              <div className="grid lg:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">Common Challenges:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Legacy systems resistant to change</li>
                    <li>• Founder-driven approvals</li>
                    <li>• Lack of transparency</li>
                    <li>• No data-backed decision-making</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">What We Implement:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Institutional dashboards</li>
                    <li>• Governance reporting systems</li>
                    <li>• Role-based access architecture</li>
                    <li>• AI forecasting layers</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-accent-yellow mb-4">Outcome:</h4>
                  <p className="text-foreground font-medium">
                    A scalable, institutionalized enterprise ready for the next decade.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - What Stays Consistent */}
      <section className="py-20 lg:py-28 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12">
              Every Industry. Same Core Transformation.
            </h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {[
                'Centralized data layer',
                'Automation of manual workflows',
                'Real-time founder dashboards',
                'Reduced dependency',
                'Institutional governance',
              ].map((item, index) => (
                <Card key={index} className="bg-card border-border p-6">
                  <p className="text-lg font-semibold text-foreground">{item}</p>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 space-y-2">
              <p className="text-xl text-muted-foreground font-medium">
                The tools may vary.
              </p>
              <p className="text-xl text-foreground font-bold">
                The transformation does not.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Qualifying Statement */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
              Is This Right for You?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold text-accent-yellow mb-6">We are a fit if:</h3>
                <ul className="space-y-4">
                  {[
                    "You're ₹5–50 Cr revenue",
                    'You have 20+ team members',
                    'You feel operational chaos increasing',
                    'You want systems — not software',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-accent-yellow flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <Card className="bg-card border-border p-8">
                <h3 className="text-xl font-bold text-destructive mb-6">We are not a fit if:</h3>
                <p className="text-muted-foreground">
                  You're looking for a basic website or marketing service.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5 - Lead Generation */}
      <section id="lead-generation" className="py-20 lg:py-28 bg-card/30 scroll-mt-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Let's Evaluate Your Industry Systems
              </h2>
              <p className="text-xl text-muted-foreground">
                Request a Founder Control Blueprint™ tailored to your industry.
              </p>
            </div>
            
            <IndustriesLeadGenForm />
          </div>
        </div>
      </section>

      {/* Final CTA Block */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Ready to Institutionalize Your Industry Operations?
            </h2>
            <Button
              onClick={bookStrategyCall}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6"
            >
              Book Strategy Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
