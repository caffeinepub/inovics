import { InsightArticleLayout } from './components/InsightArticleLayout';
import { INSIGHT_ARTICLES } from './insightArticles';
import { INSIGHT_SLUGS } from './insightSlugs';

export function TheHiddenCostOfManualReportingPage() {
  const article = INSIGHT_ARTICLES[INSIGHT_SLUGS.THE_HIDDEN_COST_OF_MANUAL_REPORTING];

  return (
    <InsightArticleLayout title={article.title} description={article.description}>
      <div className="space-y-12 text-muted-foreground">
        {article.sections.map((section, index) => (
          <section key={index} className="space-y-6">
            {section.heading && (
              <h2 className="text-3xl font-bold text-foreground">{section.heading}</h2>
            )}
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </div>
    </InsightArticleLayout>
  );
}
