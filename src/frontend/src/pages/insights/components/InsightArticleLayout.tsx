import { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { PageHero } from '@/components/sections/PageHero';
import { useInsightSeo } from './useInsightSeo';

interface InsightArticleLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function InsightArticleLayout({ title, description, children }: InsightArticleLayoutProps) {
  useInsightSeo({ title, description });

  const handleBackClick = () => {
    window.history.pushState({}, '', '/insights');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <>
      <PageHero title={title} />
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <button
          onClick={handleBackClick}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Insights
        </button>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {description}
          </p>
          {children}
        </div>
      </div>
    </>
  );
}
