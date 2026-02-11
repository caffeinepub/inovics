import { INSIGHT_ARTICLES } from '@/pages/insights/insightArticles';
import { ORDERED_INSIGHT_SLUGS } from '@/pages/insights/insightSlugs';

export function InsightsSection() {
  const handleCardClick = (slug: string) => {
    window.history.pushState({}, '', `/insights/${slug}`);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleViewAllClick = () => {
    window.history.pushState({}, '', '/insights');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  // Show first 3 articles on homepage
  const featuredSlugs = ORDERED_INSIGHT_SLUGS.slice(0, 3);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Strategic Insights</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Perspectives on operational excellence, business systems, and institutional growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredSlugs.map((slug) => {
            const article = INSIGHT_ARTICLES[slug];
            return (
              <article
                key={slug}
                onClick={() => handleCardClick(slug)}
                className="group cursor-pointer bg-card border border-border rounded-lg p-6 hover:border-accent-yellow/50 transition-all duration-300 hover:shadow-lg"
              >
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-yellow transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed line-clamp-3">
                  {article.description}
                </p>
                <div className="mt-4 text-accent-yellow font-medium group-hover:translate-x-1 transition-transform inline-block">
                  Read More →
                </div>
              </article>
            );
          })}
        </div>

        <div className="text-center">
          <button
            onClick={handleViewAllClick}
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent-yellow text-navy font-semibold rounded-full hover:bg-accent-yellow/90 transition-colors"
          >
            View All Insights
          </button>
        </div>
      </div>
    </section>
  );
}
