import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { bookStrategyCall } from '@/lib/strategyCall';

const navLinks = [
  { label: 'Framework', href: '#framework', isHash: true },
  { label: 'Industries', href: '/industries', isHash: false },
  { label: 'Process', href: '/process', isHash: false },
  { label: 'Contact', href: '/contact', isHash: false },
  { label: 'CONTROL™', href: '/control-framework', isHash: false },
];

export function TopNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only update active section on homepage
      if (currentPath === '/') {
        const sections = navLinks.filter(link => link.isHash).map(link => link.href.substring(1));
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(section);
              break;
            }
          }
        }
      }
    };

    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('popstate', handlePopState);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [currentPath]);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1));
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    
    if (link.isHash) {
      // Hash link - check if we need to navigate home first
      if (currentPath !== '/') {
        window.history.pushState({}, '', '/');
        window.dispatchEvent(new PopStateEvent('popstate'));
        setTimeout(() => scrollToSection(link.href), 100);
      } else {
        scrollToSection(link.href);
      }
    } else {
      // Route link
      window.history.pushState({}, '', link.href);
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (currentPath !== '/') {
      window.history.pushState({}, '', '/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Enhanced Brand Mark with Tagline */}
          <a
            href="/"
            onClick={handleBrandClick}
            className="flex flex-col hover:opacity-90 transition-opacity"
          >
            <span className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none">
              INOVICS
            </span>
            <span className="text-[10px] sm:text-xs text-white/80 tracking-wide mt-0.5 font-medium">
              Structure Wins. Chaos Loses.
            </span>
          </a>

          {/* Desktop Navigation - Enhanced with pill styling */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => {
              const isActive = link.isHash 
                ? activeSection === link.href.substring(1)
                : currentPath === link.href;
              
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`
                    px-4 py-2.5 text-sm font-semibold rounded-full transition-all duration-200
                    ${isActive 
                      ? 'bg-accent-yellow text-navy shadow-md shadow-accent-yellow/20' 
                      : 'text-white/90 hover:bg-white/10 hover:text-white hover:shadow-sm'
                    }
                  `}
                >
                  {link.label}
                </a>
              );
            })}
            <Button
              onClick={bookStrategyCall}
              className="ml-2 bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-bold shadow-lg shadow-accent-yellow/30 hover:shadow-xl hover:shadow-accent-yellow/40 transition-all duration-200"
            >
              Book Strategy Call
            </Button>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="h-7 w-7" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-l-2 border-accent-yellow/20">
              <div className="flex flex-col gap-3 mt-8">
                {navLinks.map((link) => {
                  const isActive = link.isHash 
                    ? activeSection === link.href.substring(1)
                    : currentPath === link.href;
                  
                  return (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link)}
                        className={`
                          px-5 py-4 text-lg font-semibold rounded-lg transition-all duration-200 border-l-4
                          ${isActive 
                            ? 'bg-accent-yellow/20 text-accent-yellow border-accent-yellow shadow-sm' 
                            : 'text-foreground border-transparent hover:bg-accent/50 hover:border-accent-yellow/40'
                          }
                        `}
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  );
                })}
                <div className="h-px bg-border my-2" />
                <SheetClose asChild>
                  <Button
                    onClick={bookStrategyCall}
                    className="bg-accent-yellow text-navy hover:bg-accent-yellow/90 font-bold w-full py-6 text-lg shadow-lg shadow-accent-yellow/30"
                  >
                    Book Strategy Call
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
