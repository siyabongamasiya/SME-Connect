import React from 'react';

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Separator({ className = '', ...props }: SeparatorProps) {
  return (
    <div 
      className={`border-t border ${className}`}
      {...props}
    />
  );
}