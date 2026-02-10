import { HeroSlider } from './HeroSlider';

export function HeroSection() {
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

      {/* Slider Content */}
      <div className="relative z-10 w-full h-full">
        <HeroSlider />
      </div>
    </section>
  );
}
