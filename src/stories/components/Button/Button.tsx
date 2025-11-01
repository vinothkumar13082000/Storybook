import React from 'react';
import './Button.scss';
import { IconType } from 'react-icons';

export interface ButtonProps {
  /** Button label */
  label?: string;
  /** Button variant */
  variant?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'outline' | 'ghost' | 'text';
  /** Button size */
  size?: 'small' | 'medium' | 'large';
  /** Is button disabled */
  disabled?: boolean;
  /** Is button in loading state */
  loading?: boolean;
  /** Full width button */
  fullWidth?: boolean;
  /** Icon before label */
  startIcon?: IconType | React.ReactNode;
  /** Icon after label */
  endIcon?: IconType | React.ReactNode;
  /** Click handler */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
  /** Children */
  children?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  startIcon,
  endIcon,
  onClick,
  type = 'button',
  animated = false,
  className = '',
  children,
}) => {
  const StartIcon = startIcon as IconType;
  const EndIcon = endIcon as IconType;

  return (
    <button
      type={type}
      className={`ui-button ui-button--${variant} ui-button--${size} ${fullWidth ? 'ui-button--full-width' : ''} ${disabled || loading ? 'ui-button--disabled' : ''} ${loading ? 'ui-button--loading' : ''} ${animated ? 'ui-button--animated' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <span className="ui-button__spinner">
          <svg viewBox="0 0 24 24" className="spinner">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" strokeDasharray="32" strokeDashoffset="32">
              <animate attributeName="stroke-dasharray" dur="2s" values="0 32;16 16;0 32;0 32" repeatCount="indefinite" />
              <animate attributeName="stroke-dashoffset" dur="2s" values="0;-16;-32;-32" repeatCount="indefinite" />
            </circle>
          </svg>
        </span>
      )}
      {!loading && startIcon && (
        <span className="ui-button__start-icon">
          {typeof startIcon === 'function' ? <StartIcon /> : startIcon}
        </span>
      )}
      {(label || children) && (
        <span className="ui-button__label">{label || children}</span>
      )}
      {!loading && endIcon && (
        <span className="ui-button__end-icon">
          {typeof endIcon === 'function' ? <EndIcon /> : endIcon}
        </span>
      )}
    </button>
  );
};

export default Button;

