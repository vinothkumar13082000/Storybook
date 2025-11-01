import React from 'react';
import './Progress.scss';

export interface ProgressProps {
  /** Progress value (0-100) */
  value: number;
  /** Maximum value */
  max?: number;
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  /** Variant */
  variant?: 'linear' | 'circular';
  /** Show label */
  showLabel?: boolean;
  /** Label text */
  label?: string;
  /** Is indeterminate */
  indeterminate?: boolean;
  /** Custom className */
  className?: string;
}

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  size = 'medium',
  color = 'primary',
  variant = 'linear',
  showLabel = false,
  label,
  indeterminate = false,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  if (variant === 'circular') {
    const radius = size === 'small' ? 20 : size === 'medium' ? 30 : 40;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
      <div className={`ui-progress ui-progress--circular ui-progress--${size} ${className}`}>
        <svg className="ui-progress__circle-svg" viewBox="0 0 100 100">
          <circle
            className="ui-progress__circle-background"
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="8"
          />
          <circle
            className={`ui-progress__circle-fill ui-progress__circle-fill--${color}`}
            cx="50"
            cy="50"
            r={radius}
            fill="none"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={indeterminate ? undefined : offset}
            strokeLinecap="round"
          />
        </svg>
        {showLabel && (
          <div className="ui-progress__circle-label">
            {indeterminate ? '' : `${Math.round(percentage)}%`}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`ui-progress ui-progress--linear ui-progress--${size} ${className}`}>
      {showLabel && (
        <div className="ui-progress__label">
          {label || `${Math.round(percentage)}%`}
        </div>
      )}
      <div className="ui-progress__track">
        <div
          className={`ui-progress__fill ui-progress__fill--${color} ${indeterminate ? 'ui-progress__fill--indeterminate' : ''}`}
          style={!indeterminate ? { width: `${percentage}%` } : {}}
        />
      </div>
    </div>
  );
};

export default Progress;

