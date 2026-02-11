import { StandardBulletList } from '@/components/shared/StandardBulletList';

export function OutcomesSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              What Changes After Inovics?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              We don't just implement systems. We transform how your business operates.
            </p>
            
            <StandardBulletList
              items={[
                'Real-time visibility into operations, cash flow, and performance',
                'Automated workflows that eliminate manual bottlenecks',
                'Centralized data architecture that replaces fragmented spreadsheets',
                'AI-powered insights for faster, smarter decision-making',
                'Reduced founder dependency through structured governance',
                'Scalable infrastructure that grows with your business',
              ]}
            />
          </div>

          {/* Right Column - Visual */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border-2 border-border shadow-2xl">
              <img
                src="/assets/generated/inovics-dashboard-mockup-logo-palette.dim_1200x800.png"
                alt="Inovics Business Operating System Dashboard"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
