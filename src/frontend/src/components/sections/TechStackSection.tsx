import { techStackLogos } from '@/lib/techStackLogos';

export function TechStackSection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We leverage best-in-class platforms and tools to build your Business OS
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {techStackLogos.map((logo) => (
            <div
              key={logo.label}
              className="flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-background/50 hover:bg-background transition-colors"
            >
              <div className="w-24 h-24 flex items-center justify-center">
                <img
                  src={logo.imagePath}
                  alt={logo.altText}
                  className="w-full h-full object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
              </div>
              <p className="text-sm font-medium text-center text-muted-foreground">
                {logo.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
