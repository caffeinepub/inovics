import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { X } from 'lucide-react';
import { StandardBulletList } from '@/components/shared/StandardBulletList';
import type { CaseStudy } from './industriesContent';

interface CaseStudyDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  details: CaseStudy['details'];
}

// Helper to detect if content should be rendered as a list
function shouldRenderAsList(content: string[]): boolean {
  if (content.length <= 1) return false;
  
  // Check if most items are short and don't end with periods (list-like)
  const listLikeCount = content.filter(
    (item) => item.length < 100 && !item.endsWith('.') && item.trim() !== ''
  ).length;
  
  return listLikeCount > content.length / 2;
}

export function CaseStudyDetailsModal({
  open,
  onOpenChange,
  title,
  details,
}: CaseStudyDetailsModalProps) {
  if (!details) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="flex-1 pr-8">
              <DialogTitle className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                {title}
              </DialogTitle>
              <p className="text-lg text-accent-yellow font-semibold">
                {details.firmDescriptor}
              </p>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="flex-shrink-0 rounded-full p-2 hover:bg-accent/50 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </DialogHeader>

        <div className="space-y-8 mt-6">
          {details.sections.map((section, index) => (
            <div
              key={index}
              className={section.isOutcome ? 'bg-accent-yellow/10 border-2 border-accent-yellow/30 rounded-xl p-6 lg:p-8' : ''}
            >
              <h3 className="text-2xl font-bold text-foreground mb-4">
                {section.title}
              </h3>
              {shouldRenderAsList(section.content) ? (
                <StandardBulletList items={section.content.filter(item => item.trim() !== '')} />
              ) : (
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => {
                    if (paragraph.trim() === '') return null;
                    return (
                      <p
                        key={pIndex}
                        className="text-lg text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
