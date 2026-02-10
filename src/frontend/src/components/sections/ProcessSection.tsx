const processSteps = [
  {
    number: '01',
    title: 'Founder Control Blueprint™',
    description:
      'Deep-dive assessment of current operations, founder dependencies, and strategic priorities to create a customized transformation roadmap.',
  },
  {
    number: '02',
    title: 'Business OS Implementation',
    description:
      'Deploy core infrastructure: process automation, data centralization, workflow standardization, and role clarity across the organization.',
  },
  {
    number: '03',
    title: 'AI Intelligence Layer',
    description:
      'Integrate AI-powered analytics, predictive insights, automated reporting, and intelligent decision support systems.',
  },
  {
    number: '04',
    title: 'Digital Governance & Growth Council',
    description:
      'Establish ongoing optimization protocols, performance monitoring, and strategic advisory to ensure sustained transformation.',
  },
];

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

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative p-8 rounded-lg bg-background/95 backdrop-blur-sm border border-border hover:border-accent-yellow/50 transition-all"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-lg bg-accent-yellow/10 flex items-center justify-center border-2 border-accent-yellow">
                      <span className="text-2xl font-bold text-accent-yellow">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
