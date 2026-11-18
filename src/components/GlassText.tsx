import React from 'react';

interface GlassTextProps {
  children: React.ReactNode;
  variant?: 'crystal' | 'gold' | 'aegean';
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'div';
}

export function GlassText({
  children,
  variant = 'crystal',
  className = '',
  as: Component = 'span',
}: GlassTextProps) {
  const getGradient = () => {
    switch (variant) {
      case 'gold':
        return 'bg-gradient-to-b from-[#FFFFFF] via-[#F5DEB3] to-[#D4AF37] text-transparent bg-clip-text';
      case 'aegean':
        return 'bg-gradient-to-b from-[#FFFFFF] via-[#90E0EF] to-[#0096C7] text-transparent bg-clip-text';
      case 'crystal':
      default:
        return 'bg-gradient-to-b from-[#FFFFFF] via-white/95 to-white/65 text-transparent bg-clip-text';
    }
  };

  return (
    <Component className={`relative inline-block ${getGradient()} ${className}`}>
      {children}
    </Component>
  );
}
