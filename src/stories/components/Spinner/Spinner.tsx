import React from 'react';
import './Spinner.scss';

export interface SpinnerProps {
  /** Size */
  size?: 'small' | 'medium' | 'large' | number;
  /** Color */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | string;
  /** Variant */
  variant?: 'spinner' | 'dots' | 'pulse' | 'bars';
  /** Speed */
  speed?: 'slow' | 'normal' | 'fast';
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'medium',
  color = 'primary',
  variant = 'spinner',
  speed = 'normal',
  className = '',
  style,
}) => {
  const sizeValue = typeof size === 'number' ? size : size === 'small' ? 20 : size === 'medium' ? 40 : 60;
  const speedValue = speed === 'slow' ? '2s' : speed === 'fast' ? '0.5s' : '1s';

  const spinnerStyle: React.CSSProperties = {
    ...style,
    width: `${sizeValue}px`,
    height: `${sizeValue}px`,
    '--spinner-speed': speedValue,
    ...(typeof color === 'string' && !['primary', 'secondary', 'success', 'error', 'warning', 'info'].includes(color) && {
      '--spinner-color': color,
    } as any),
  };

  return (
    <div
      className={`ui-spinner ui-spinner--${variant} ui-spinner--${size} ui-spinner--${color} ui-spinner--${speed} ${className}`}
      style={spinnerStyle}
      role="status"
      aria-label="Loading"
    >
      {variant === 'spinner' && (
        <svg viewBox="0 0 50 50" className="ui-spinner__svg">
          <circle cx="25" cy="25" r="20" fill="none" stroke="currentColor" strokeWidth="4" className="ui-spinner__circle" />
        </svg>
      )}
      {variant === 'dots' && (
        <div className="ui-spinner__dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
      {variant === 'pulse' && (
        <div className="ui-spinner__pulse"></div>
      )}
      {variant === 'bars' && (
        <div className="ui-spinner__bars">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Spinner;

