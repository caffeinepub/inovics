import { useEffect } from 'react';

interface UseInsightSeoProps {
  title: string;
  description: string;
}

export function useInsightSeo({ title, description }: UseInsightSeoProps) {
  useEffect(() => {
    const originalTitle = document.title;
    const metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription?.getAttribute('content') || '';

    // Set new title and description
    document.title = `${title} | Inovics`;
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      if (metaDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
    };
  }, [title, description]);
}
