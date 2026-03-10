import { PageHero } from "@/components/sections/PageHero";
import { ArrowLeft } from "lucide-react";
import { useInsightSeo } from "./useInsightSeo";

interface InsightArticleLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function InsightArticleLayout({
  title,
  description,
  children,
}: InsightArticleLayoutProps) {
  useInsightSeo({ title, description });

  const handleBackClick = () => {
    window.history.pushState({}, "", "/insights");
    window.dispatchEvent(new PopStateEvent("popstate"));
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  return (
    <>
      <PageHero title={title} />
      <div className="bg-background min-h-screen">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <button
            type="button"
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent-yellow transition-colors mb-8 group"
            data-ocid="insights.back-link"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Insights
          </button>

          <div className="prose prose-lg prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-accent-yellow">
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              {description}
            </p>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
