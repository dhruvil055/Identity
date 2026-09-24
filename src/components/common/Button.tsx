import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'secondary' | 'ghost-light' | 'link';
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  isExternal = false,
  withArrow = false,
  loading = false,
  children,
  className = '',
  disabled,
  ...rest
}) => {
  const variantClass = variant === 'link' ? 'btn-link' : `btn btn-${variant}`;
  const stateClasses = [
    variantClass,
    loading ? 'btn-loading' : '',
    disabled ? 'btn-disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {loading && (
        <Loader2
          size={15}
          className="btn-spinner"
          aria-hidden="true"
        />
      )}
      <span style={loading ? { opacity: 0.7 } : undefined}>{children}</span>
      {withArrow && !loading && <ArrowRight size={15} className="btn-icon-arrow" />}
    </>
  );

  if (href && !disabled && !loading) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={stateClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={stateClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={stateClasses}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {content}
    </button>
  );
};
