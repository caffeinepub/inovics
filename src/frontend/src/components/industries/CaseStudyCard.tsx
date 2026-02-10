import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Download } from 'lucide-react';

interface CaseStudyCardProps {
  title: string;
  pdfUrl?: string;
}

export function CaseStudyCard({ title, pdfUrl }: CaseStudyCardProps) {
  const handlePdfAction = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="h-full border-border hover:border-accent-yellow transition-colors">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-foreground flex items-start gap-3">
          <FileText className="h-6 w-6 text-accent-yellow flex-shrink-0 mt-0.5" />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {pdfUrl ? (
          <Button
            onClick={handlePdfAction}
            variant="outline"
            className="w-full border-accent-yellow text-accent-yellow hover:bg-accent-yellow hover:text-navy"
          >
            <Download className="h-4 w-4 mr-2" />
            View PDF
          </Button>
        ) : (
          <div className="text-center py-4 px-3 bg-muted rounded-lg border border-dashed border-border">
            <p className="text-sm text-muted-foreground">
              Case study PDF coming soon
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
