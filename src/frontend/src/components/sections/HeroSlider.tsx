import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { bookStrategyCall } from '@/lib/strategyCall';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface SlideContent {
  headline: string;
  subheadline: string;
  supportingLine: string;
  primaryCta: {
    text: string;
    action: () => void;
  };
  secondaryCta?: {
    text: string;
    action: () => void;
  };
}

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  const scrollToFramework = () => {
    const element = document.getElementById('framework');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
      window.scrollTo({ top: offsetPosition, behavior: scrollBehavior });
    }
  };

  const navigateToPage = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new PopStateEvent('popstate'));
    const scrollBehavior = prefersReducedMotion ? 'auto' : 'smooth';
    window.scrollTo({ top: 0, behavior: scrollBehavior });
  };

  const slides: SlideContent[] = [
    {
      headline: 'Growth Is Breaking Your Systems.',
      subheadline: 'Excel sheets. WhatsApp approvals. Manual reporting. Founder bottlenecks.',
      supportingLine: "You don't have a revenue problem. You have a structural problem.",
      primaryCta: {
        text: 'Book a Founder Strategy Call',
        action: bookStrategyCall,
      },
      secondaryCta: {
        text: 'Explore the CONTROL™ Framework',
        action: scrollToFramework,
      },
    },
    {
      headline: 'Build Beyond the Founder.',
      subheadline: 'Turn your legacy family business into a system-driven enterprise powered by AI.',
      supportingLine: 'Real-time dashboards. Automated workflows. Institutional governance. Control. Clarity. Continuity.',
      primaryCta: {
        text: 'Start Your Transformation',
        action: () => navigateToPage('/process'),
      },
      secondaryCta: {
        text: 'Request Founder Blueprint™',
        action: () => navigateToPage('/contact'),
      },
    },
    {
      headline: 'AI Is Not the Advantage. System Design Is.',
      subheadline: 'Inovics builds AI-powered operating systems for ₹5–50 Cr family businesses ready to scale without chaos.',
      supportingLine: "We don't install tools. We engineer infrastructure.",
      primaryCta: {
        text: 'See How We Work',
        action: () => navigateToPage('/process'),
      },
      secondaryCta: {
        text: 'Book Strategy Call',
        action: bookStrategyCall,
      },
    },
    {
      headline: 'If You Step Away for 30 Days… What Happens?',
      subheadline: 'Does your business operate on systems — or on you?',
      supportingLine: 'Institutional strength begins with structured transformation.',
      primaryCta: {
        text: 'Evaluate Your Systems',
        action: () => navigateToPage('/contact'),
      },
      secondaryCta: {
        text: 'Schedule Strategy Call',
        action: bookStrategyCall,
      },
    },
  ];

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  // Touch and pointer event handlers for drag/swipe
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 50;
    if (translateX > threshold) {
      goToPrevious();
    } else if (translateX < -threshold) {
      goToNext();
    }
    setTranslateX(0);
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  // IntersectionObserver to detect visibility
  useEffect(() => {
    if (!sliderRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(sliderRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Auto-advance effect
  useEffect(() => {
    // Don't auto-advance if:
    // - User prefers reduced motion
    // - Slider is not visible
    // - User is dragging
    if (prefersReducedMotion || !isVisible || isDragging) {
      return;
    }

    const intervalId = setInterval(() => {
      goToNext();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [prefersReducedMotion, isVisible, isDragging, currentSlide]);

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
      setTranslateX(0);
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    return () => window.removeEventListener('mouseup', handleGlobalMouseUp);
  }, []);

  const transitionClass = prefersReducedMotion
    ? ''
    : isDragging
    ? ''
    : 'transition-transform duration-500 ease-out';

  return (
    <div
      ref={sliderRef}
      className="relative w-full h-full"
      role="region"
      aria-roledescription="carousel"
      aria-label="Hero banner carousel"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* Slides container */}
      <div
        className="relative w-full h-full overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex h-full ${transitionClass}`}
          style={{
            transform: `translateX(calc(-${currentSlide * 100}% + ${translateX}px))`,
            cursor: isDragging ? 'grabbing' : 'grab',
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
              aria-hidden={index !== currentSlide}
            >
              <div className="max-w-5xl mx-auto text-center space-y-8">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                  {slide.headline}
                </h1>

                <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium max-w-4xl mx-auto leading-relaxed">
                  {slide.subheadline}
                </p>

                <p className="text-base sm:text-lg text-muted-foreground/90 max-w-3xl mx-auto">
                  {slide.supportingLine}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                  <Button
                    onClick={slide.primaryCta.action}
                    size="lg"
                    className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-semibold text-lg px-8 py-6 h-auto"
                  >
                    {slide.primaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {slide.secondaryCta && (
                    <Button
                      onClick={slide.secondaryCta.action}
                      size="lg"
                      variant="outline"
                      className="border-accent-yellow text-accent-yellow hover:bg-accent-yellow/10 font-semibold text-lg px-8 py-6 h-auto"
                    >
                      {slide.secondaryCta.text}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-8 z-20">
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          className="p-3 rounded-full bg-accent-yellow/20 hover:bg-accent-yellow/30 text-accent-yellow backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>

        {/* Slide indicators */}
        <div className="flex gap-2" role="tablist" aria-label="Slide navigation">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
              role="tab"
              className={`h-3 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${
                index === currentSlide
                  ? 'w-12 bg-accent-yellow'
                  : 'w-3 bg-accent-yellow/40 hover:bg-accent-yellow/60'
              }`}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          aria-label="Next slide"
          className="p-3 rounded-full bg-accent-yellow/20 hover:bg-accent-yellow/30 text-accent-yellow backdrop-blur-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
