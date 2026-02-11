import { PageHero } from '@/components/sections/PageHero';
import { InsightsNewsletterForm } from '@/components/forms/InsightsNewsletterForm';
import { INSIGHT_ARTICLES } from './insights/insightArticles';
import { ORDERED_INSIGHT_SLUGS } from './insights/insightSlugs';
import { useEffect } from 'react';

export function InsightsPage() {
  useEffect(() => {
    document.title = 'Insights | INOVICS';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Strategic insights on business systems, operational excellence, and digital transformation for growing mid-sized businesses.'
      );
    }
  }, []);

  const handleArticleClick = (slug: string) => {
    window.history.pushState({}, '', `/insights/${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  return (
    <>
      <PageHero title="Insights" />

      <div className="container mx-auto px-4 py-16">
        {/* Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xl text-muted-foreground leading-relaxed">
            Strategic perspectives on operational excellence, business systems, and institutional growth for mid-sized enterprises.
          </p>
        </div>

        {/* Featured Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {ORDERED_INSIGHT_SLUGS.map((slug) => {
            const article = INSIGHT_ARTICLES[slug];
            return (
              <article
                key={slug}
                onClick={() => handleArticleClick(slug)}
                className="group cursor-pointer bg-card border border-border rounded-lg p-6 hover:border-accent-yellow/50 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-yellow transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-4 text-accent-yellow font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Read Article →
                </div>
              </article>
            );
          })}
        </div>

        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 text-center">
              Subscribe to Strategic Insights
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Receive monthly insights on operational excellence, business systems, and institutional growth.
            </p>
            <InsightsNewsletterForm />
          </div>
        </div>
      </div>
    </>
  );
}
