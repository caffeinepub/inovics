import { InsightArticleLayout } from './components/InsightArticleLayout';
import { INSIGHT_ARTICLES } from './insightArticles';
import { INSIGHT_SLUGS } from './insightSlugs';

export function ExcelIsNotABusinessSystemPage() {
  const article = INSIGHT_ARTICLES[INSIGHT_SLUGS.EXCEL_IS_NOT_A_BUSINESS_SYSTEM];

  return (
    <InsightArticleLayout title={article.title} description={article.description}>
      <div className="space-y-6 text-muted-foreground">
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
