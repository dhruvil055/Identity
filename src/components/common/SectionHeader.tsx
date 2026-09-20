import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  align?: 'center' | 'left' | 'right';
  light?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  centered,
  align,
  light = false,
  className = '',
  children,
}) => {
  const isCentered = centered !== undefined ? centered : align === 'center';
  const textAlign = align || (isCentered ? 'center' : 'left');

  return (
    <div
      className={`section-header ${isCentered ? 'text-center' : ''} ${className}`}
      style={{
        marginBottom: 'clamp(2.2rem, 5vw, 3.8rem)',
        textAlign: textAlign,
        maxWidth: isCentered ? '780px' : '900px',
        marginLeft: isCentered ? 'auto' : '0',
        marginRight: isCentered ? 'auto' : '0',
      }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2
        style={{
          color: light ? '#ffffff' : 'var(--color-text-main)',
          marginBottom: subtitle ? '1rem' : '0',
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1.05rem, 1.8vw, 1.22rem)',
            color: light ? 'var(--color-text-light-muted)' : 'var(--color-text-muted)',
            lineHeight: 1.65,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};
