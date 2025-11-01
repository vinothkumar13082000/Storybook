import React from 'react';
import './Badge.scss';

export interface BadgeProps {
  /** Badge content */
  content?: string | number;
  /** Maximum value to show */
  max?: number;
  /** Badge variant */
  variant?: 'standard' | 'dot';
  /** Color */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /** Children to attach badge to */
  children?: React.ReactNode;
  /** Badge position */
  anchorOrigin?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'right';
  };
  /** Show zero */
  showZero?: boolean;
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  content,
  max = 99,
  variant = 'standard',
  color = 'error',
  children,
  anchorOrigin = { vertical: 'top', horizontal: 'right' },
  showZero = false,
  animated = false,
  className = '',
}) => {
  const displayValue = content !== undefined && typeof content === 'number'
    ? content > max ? `${max}+` : content
    : content;

  const shouldShow = variant === 'dot' || content !== undefined
    ? (showZero || (typeof content === 'number' ? content > 0 : !!content))
    : false;

  if (!children) {
    return (
      <span
        className={`ui-badge ui-badge--${variant} ui-badge--${color} ui-badge--${anchorOrigin.vertical}-${anchorOrigin.horizontal} ${animated ? 'ui-badge--animated' : ''} ${className}`}
      >
        {variant === 'standard' && displayValue}
      </span>
    );
  }

  return (
    <span className={`ui-badge-wrapper ${className}`}>
      {children}
      {shouldShow && (
        <span
          className={`ui-badge ui-badge--${variant} ui-badge--${color} ui-badge--${anchorOrigin.vertical}-${anchorOrigin.horizontal} ${animated ? 'ui-badge--animated' : ''}`}
        >
          {variant === 'standard' && displayValue}
        </span>
      )}
    </span>
  );
};

export default Badge;

