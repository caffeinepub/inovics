import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const scrollToFramework = () => {
    const element = document.getElementById('framework');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background with data grid pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-dark to-charcoal">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(/assets/generated/inovics-data-grid-bg-logo-palette.dim_1920x1080.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
            Build Beyond the Founder.
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto leading-relaxed">
            AI-powered operating systems for legacy family businesses ready to eliminate chaos,
            reduce dependency, and scale with control.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground/90 max-w-3xl mx-auto">
            If your business still runs on Excel, WhatsApp approvals, and memory — growth will
            eventually break it.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto"
            >
              Book a Founder Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={scrollToFramework}
              size="lg"
              variant="outline"
              className="border-accent-yellow text-accent-yellow hover:bg-accent-yellow/10 font-semibold text-lg px-8 py-6 h-auto"
            >
              Explore the CONTROL™ Framework
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
