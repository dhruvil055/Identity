import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'secondary' | 'ghost-light' | 'link';
  href?: string;
  isExternal?: boolean;
  withArrow?: boolean;
  children: React.ReactNode;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  href,
  isExternal = false,
  withArrow = false,
  children,
  className = '',
  ...rest
}) => {
  const variantClass = variant === 'link' ? 'btn-link' : `btn btn-${variant}`;
  const combinedClasses = `${variantClass} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>
      {withArrow && <ArrowRight size={15} className="btn-icon-arrow" />}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...rest}>
      {content}
    </button>
  );
};
