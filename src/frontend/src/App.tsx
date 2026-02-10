import { useEffect, useState } from 'react';
import { TopNav } from './components/TopNav';
import { HeroSection } from './components/sections/HeroSection';
import { ProblemSection } from './components/sections/ProblemSection';
import { WhatInovicsDoesSection } from './components/sections/WhatInovicsDoesSection';
import { ControlFrameworkSection } from './components/sections/ControlFrameworkSection';
import { OutcomesSection } from './components/sections/OutcomesSection';
import { IndustriesSection } from './components/sections/IndustriesSection';
import { ProcessSection } from './components/sections/ProcessSection';
import { EmotionalBlockSection } from './components/sections/EmotionalBlockSection';
import { InsightsSection } from './components/sections/InsightsSection';
import { FinalCtaSection } from './components/sections/FinalCtaSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/Footer';
import { ControlFrameworkPage } from './pages/ControlFrameworkPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check if we're on the CONTROL Framework page
  const isControlFrameworkPage = currentPath === '/control-framework';

  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopNav />
      {isControlFrameworkPage ? (
        <ControlFrameworkPage />
      ) : (
        <main>
          <HeroSection />
          <ProblemSection />
          <WhatInovicsDoesSection />
          <ControlFrameworkSection />
          <OutcomesSection />
          <IndustriesSection />
          <ProcessSection />
          <EmotionalBlockSection />
          <InsightsSection />
          <FinalCtaSection />
          <ContactSection />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
