import { Button } from '@/components/ui/button';

const frameworkSteps = [
  {
    letter: 'C',
    title: 'Clarify',
    description:
      "Map current workflows, identify bottlenecks, and define the founder's true role versus operational dependencies.",
    image: '/assets/generated/inovics-framework-clarify-colourful.dim_1200x750.png',
  },
  {
    letter: 'O',
    title: 'Organize',
    description:
      'Structure data flows, standardize processes, and establish clear ownership across departments.',
    image: '/assets/generated/inovics-framework-organize-colourful.dim_1200x750.png',
  },
  {
    letter: 'N',
    title: 'Normalize',
    description:
      'Create consistent protocols, documentation standards, and decision-making frameworks that work without the founder.',
    image: '/assets/generated/inovics-framework-normalize-colourful.dim_1200x750.png',
  },
  {
    letter: 'T',
    title: 'Transform',
    description:
      'Implement AI-powered automation, intelligent workflows, and digital infrastructure to replace manual processes.',
    image: '/assets/generated/inovics-framework-transform-colourful.dim_1200x750.png',
  },
  {
    letter: 'R',
    title: 'Report',
    description:
      'Deploy real-time dashboards, automated reporting systems, and performance metrics visible to leadership.',
    image: '/assets/generated/inovics-framework-report-colourful.dim_1200x750.png',
  },
  {
    letter: 'O',
    title: 'Optimize',
    description:
      'Continuously refine systems using data insights, eliminate inefficiencies, and scale operations intelligently.',
    image: '/assets/generated/inovics-framework-optimize-colourful.dim_1200x750.png',
  },
  {
    letter: 'L',
    title: 'Lead',
    description:
      'Transition from operational firefighting to strategic leadership with systems that run independently.',
    image: '/assets/generated/inovics-framework-lead-colourful.dim_1200x750.png',
  },
];

export function ControlFrameworkSection() {
  const handleReadMore = () => {
    window.history.pushState({}, '', '/control-framework');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="framework" className="py-24 lg:py-32 bg-background scroll-mt-20 relative overflow-hidden">
      {/* Subtle gradient backdrop for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground">
            The CONTROL™ Framework
          </h2>

          {/* Horizontal scrollable container on mobile, grid on desktop */}
          <div className="overflow-x-auto pb-4 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible">
            <div className="flex gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-w-max sm:min-w-0">
              {frameworkSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-80 sm:w-auto group"
                >
                  <div className="h-full border border-border rounded-xl bg-card/95 backdrop-blur-sm hover:border-accent-yellow/50 hover:shadow-lg hover:shadow-accent-yellow/10 transition-all duration-300 overflow-hidden flex flex-col">
                    {/* Image */}
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img
                        src={step.image}
                        alt={`${step.title} step - ${step.description}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Subtle overlay gradient for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                      
                      {/* Letter Badge overlaid on image */}
                      <div className="absolute top-4 left-4 w-14 h-14 rounded-full bg-accent-yellow/90 backdrop-blur-sm flex items-center justify-center border-2 border-accent-yellow group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <span className="text-2xl font-bold text-white">{step.letter}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent-yellow/90 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-sm">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Read More Button */}
          <div className="text-center mt-12">
            <Button
              onClick={handleReadMore}
              size="lg"
              variant="outline"
              className="border-accent-yellow text-accent-yellow hover:bg-accent-yellow/10 font-semibold"
            >
              Read More About CONTROL™
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
