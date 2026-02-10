import { CheckCircle2 } from 'lucide-react';

const outcomes = [
  'Real-time founder dashboard',
  '40–60% reduction in manual work',
  'Transparent department performance',
  'Reduced operational chaos',
  'Faster decision-making',
  'Succession-ready systems',
];

export function OutcomesSection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
            What Changes After Inovics?
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="h-6 w-6 text-accent-yellow shrink-0 mt-1" />
                  <p className="text-lg text-muted-foreground font-medium">{outcome}</p>
                </div>
              ))}
            </div>

            <div className="relative">
              <div className="rounded-lg overflow-hidden border border-border shadow-2xl">
                <img
                  src="/assets/generated/inovics-dashboard-mockup-logo-palette.dim_1200x800.png"
                  alt="Abstract dashboard visualization"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -inset-4 bg-accent-yellow/5 rounded-lg -z-10 blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
