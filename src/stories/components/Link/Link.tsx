import React from 'react';
import './Link.scss';
import { IconType } from 'react-icons';

export interface LinkProps {
  /** Link text or children */
  children: React.ReactNode;
  /** Link href */
  href?: string;
  /** Is external link */
  external?: boolean;
  /** Link variant */
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  /** Underline style */
  underline?: 'none' | 'hover' | 'always';
  /** Icon before text */
  startIcon?: IconType | React.ReactNode;
  /** Icon after text */
  endIcon?: IconType | React.ReactNode;
  /** Is disabled */
  disabled?: boolean;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Link: React.FC<LinkProps> = ({
  children,
  href = '#',
  external = false,
  variant = 'default',
  underline = 'hover',
  startIcon,
  endIcon,
  disabled = false,
  hoverEffect = true,
  className = '',
  onClick,
}) => {
  const StartIcon = startIcon as IconType;
  const EndIcon = endIcon as IconType;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <a
      href={disabled ? undefined : href}
      className={`ui-link ui-link--${variant} ui-link--underline-${underline} ${disabled ? 'ui-link--disabled' : ''} ${!hoverEffect ? 'ui-link--no-hover' : ''} ${className}`}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={handleClick}
      aria-disabled={disabled}
    >
      {startIcon && (
        <span className="ui-link__start-icon">
          {typeof startIcon === 'function' ? <StartIcon /> : startIcon}
        </span>
      )}
      <span className="ui-link__text">{children}</span>
      {endIcon && (
        <span className="ui-link__end-icon">
          {typeof endIcon === 'function' ? <EndIcon /> : endIcon}
        </span>
      )}
    </a>
  );
};

export default Link;

