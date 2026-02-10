import { useState } from 'react';
import type { MajorService } from './industriesContent';

interface MajorServiceTileProps {
  service: MajorService;
}

export function MajorServiceTile({ service }: MajorServiceTileProps) {
  const [imageError, setImageError] = useState(false);
  const hasValidImage = service.imagePath && !imageError;

  return (
    <div className="bg-card border border-border rounded-lg p-4 hover:border-accent-yellow transition-colors">
      <div className="aspect-square mb-3 rounded-md overflow-hidden bg-muted">
        {hasValidImage ? (
          <img
            src={service.imagePath}
            alt={service.altText}
            className="w-full h-full object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <div className="text-muted-foreground text-xs text-center px-2">
              Image placeholder
            </div>
          </div>
        )}
      </div>
      <p className="text-sm font-medium text-foreground text-center">
        {service.label}
      </p>
    </div>
  );
}
