import React from 'react';
import { Check } from 'lucide-react';

interface StandardBulletListProps {
  items: string[];
  className?: string;
}

export function StandardBulletList({ items, className = '' }: StandardBulletListProps) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="standard-bullet flex-shrink-0">
            <Check className="w-3 h-3" strokeWidth={3} />
          </span>
          <span className="text-base leading-relaxed text-muted-foreground flex-1">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

interface StandardBulletItemProps {
  children: React.ReactNode;
  className?: string;
}

export function StandardBulletItem({ children, className = '' }: StandardBulletItemProps) {
  return (
    <li className={`flex items-start gap-3 ${className}`}>
      <span className="standard-bullet flex-shrink-0">
        <Check className="w-3 h-3" strokeWidth={3} />
      </span>
      <span className="text-base leading-relaxed text-muted-foreground flex-1">
        {children}
      </span>
    </li>
  );
}
