import { useEffect, useState } from 'react';
import { TopNav } from './components/TopNav';
import { ScrollToTopControl } from './components/ScrollToTopControl';
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
import { IndustriesPage } from './pages/IndustriesPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';
import { StrategySessionPage } from './pages/StrategySessionPage';
import { AdminPage } from './pages/AdminPage';
import { FaqPage } from './pages/FaqPage';
import { InsightsPage } from './pages/InsightsPage';
import { ExcelIsNotABusinessSystemPage } from './pages/insights/ExcelIsNotABusinessSystemPage';
import { WhyGrowthBreaksWeakInfrastructurePage } from './pages/insights/WhyGrowthBreaksWeakInfrastructurePage';
import { FromFounderDrivenToSystemDrivenPage } from './pages/insights/FromFounderDrivenToSystemDrivenPage';
import { CrmVsErpWhatGrowingSmesActuallyNeedPage } from './pages/insights/CrmVsErpWhatGrowingSmesActuallyNeedPage';
import { TheHiddenCostOfManualReportingPage } from './pages/insights/TheHiddenCostOfManualReportingPage';
import { CanYourBusinessRunWithoutYouPage } from './pages/insights/CanYourBusinessRunWithoutYouPage';
import { isValidInsightSlug, INSIGHT_SLUGS } from './pages/insights/insightSlugs';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Check if we're on a standalone page
  const isControlFrameworkPage = currentPath === '/control-framework';
  const isIndustriesPage = currentPath === '/industries';
  const isProcessPage = currentPath === '/process';
  const isContactPage = currentPath === '/contact';
  const isStrategySessionPage = currentPath === '/strategy-session';
  const isAdminPage = currentPath === '/admin';
  const isFaqPage = currentPath === '/faq';
  const isInsightsHubPage = currentPath === '/insights';

  // Check for insight article pages
  const insightSlugMatch = currentPath.match(/^\/insights\/(.+)$/);
  const insightSlug = insightSlugMatch ? insightSlugMatch[1] : null;
  const isInsightArticlePage = insightSlug && isValidInsightSlug(insightSlug);

  // Render insight article pages
  if (isInsightArticlePage && insightSlug) {
    let ArticleComponent;
    switch (insightSlug) {
      case INSIGHT_SLUGS.EXCEL_IS_NOT_A_BUSINESS_SYSTEM:
        ArticleComponent = ExcelIsNotABusinessSystemPage;
        break;
      case INSIGHT_SLUGS.WHY_GROWTH_BREAKS_WEAK_INFRASTRUCTURE:
        ArticleComponent = WhyGrowthBreaksWeakInfrastructurePage;
        break;
      case INSIGHT_SLUGS.FROM_FOUNDER_DRIVEN_TO_SYSTEM_DRIVEN:
        ArticleComponent = FromFounderDrivenToSystemDrivenPage;
        break;
      case INSIGHT_SLUGS.CRM_VS_ERP_WHAT_GROWING_SMES_ACTUALLY_NEED:
        ArticleComponent = CrmVsErpWhatGrowingSmesActuallyNeedPage;
        break;
      case INSIGHT_SLUGS.THE_HIDDEN_COST_OF_MANUAL_REPORTING:
        ArticleComponent = TheHiddenCostOfManualReportingPage;
        break;
      case INSIGHT_SLUGS.CAN_YOUR_BUSINESS_RUN_WITHOUT_YOU:
        ArticleComponent = CanYourBusinessRunWithoutYouPage;
        break;
      default:
        ArticleComponent = null;
    }

    if (ArticleComponent) {
      return (
        <div className="min-h-screen bg-background">
          <TopNav />
          <ArticleComponent />
          <Footer />
          <ScrollToTopControl />
        </div>
      );
    }
  }

  // Render insights hub page
  if (isInsightsHubPage) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <InsightsPage />
        <Footer />
        <ScrollToTopControl />
      </div>
    );
  }

  // Render standalone pages
  if (isControlFrameworkPage) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <ControlFrameworkPage />
        <Footer />
        <ScrollToTopControl />
      </div>
    );
  }

  if (isIndustriesPage) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <IndustriesPage />
        <Footer />
        <ScrollToTopControl />
      </div>
    );
  }

  if (isProcessPage) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <ProcessPage />
        <Footer />
        <ScrollToTopControl />
      </div>
    );
  }

  if (isContactPage) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <ContactPage />
        <Footer />
        <ScrollToTopControl />
      </div>
    );
  }

  if (isStrategySessionPage) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <StrategySessionPage />
        <Footer />
        <ScrollToTopControl />
      </div>
    );
  }

  if (isAdminPage) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <AdminPage />
        <Footer />
        <ScrollToTopControl />
      </div>
    );
  }

  if (isFaqPage) {
    return (
      <div className="min-h-screen bg-background">
        <TopNav />
        <FaqPage />
        <Footer />
        <ScrollToTopControl />
      </div>
    );
  }

  // Render homepage
  return (
    <div className="min-h-screen bg-background">
      <TopNav />
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
      <Footer />
      <ScrollToTopControl />
    </div>
  );
}

export default App;
