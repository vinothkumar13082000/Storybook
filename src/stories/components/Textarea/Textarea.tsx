import React, { useState } from 'react';
import './Textarea.scss';
import { IconType } from 'react-icons';

export interface TextareaProps {
  /** Textarea label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Textarea value */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Is textarea disabled */
  disabled?: boolean;
  /** Is textarea required */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Helper text variant */
  helperTextVariant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  /** Textarea variant */
  variant?: 'outlined' | 'filled' | 'standard';
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Full width */
  fullWidth?: boolean;
  /** Rows */
  rows?: number;
  /** Min rows */
  minRows?: number;
  /** Max rows */
  maxRows?: number;
  /** Icon before input */
  startIcon?: IconType | React.ReactNode;
  /** Icon after input */
  endIcon?: IconType | React.ReactNode;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** Resize option */
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  /** Show character count */
  showCount?: boolean;
  /** Max length */
  maxLength?: number;
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  /** Border width */
  borderWidth?: number;
  /** Border color */
  borderColor?: string;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  defaultValue,
  disabled = false,
  required = false,
  error,
  helperText,
  helperTextVariant = 'default',
  variant = 'outlined',
  size = 'medium',
  fullWidth = false,
  rows = 4,
  minRows,
  maxRows,
  startIcon,
  endIcon,
  onChange,
  onBlur,
  onFocus,
  resize = 'vertical',
  showCount = false,
  maxLength,
  borderStyle = 'solid',
  borderWidth = 2,
  borderColor,
  hoverEffect = true,
  animated = false,
  className = '',
  name,
  id,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [currentRows, setCurrentRows] = useState(rows);
  const StartIcon = startIcon as IconType;
  const EndIcon = endIcon as IconType;

  const inputId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
  const currentValue = value || defaultValue || '';
  const characterCount = maxLength ? currentValue.length : undefined;

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (maxLength && e.target.value.length > maxLength) {
      return;
    }
    onChange?.(e);
  };

  const wrapperStyle: React.CSSProperties = {
    ...(borderColor && { '--textarea-border-color': borderColor } as any),
    '--textarea-border-width': `${borderWidth}px`,
    '--textarea-border-style': borderStyle,
  };

  return (
    <div className={`ui-textarea ${fullWidth ? 'ui-textarea--full-width' : ''} ${animated ? 'ui-textarea--animated' : ''} ${className}`} style={wrapperStyle}>
      {label && (
        <label htmlFor={inputId} className="ui-textarea__label">
          {label}
          {required && <span className="ui-textarea__required">*</span>}
        </label>
      )}
      <div
        className={`ui-textarea__wrapper ui-textarea__wrapper--${variant} ui-textarea__wrapper--${size} ${disabled ? 'ui-textarea__wrapper--disabled' : ''} ${error ? 'ui-textarea__wrapper--error' : ''} ${isFocused ? 'ui-textarea__wrapper--focused' : ''} ${!hoverEffect ? 'ui-textarea__wrapper--no-hover' : ''} ${animated ? 'ui-textarea__wrapper--animated' : ''}`}
      >
        {startIcon && (
          <span className="ui-textarea__start-icon">
            {typeof startIcon === 'function' ? <StartIcon /> : startIcon}
          </span>
        )}
        <textarea
          id={inputId}
          name={name}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          rows={currentRows}
          maxLength={maxLength}
          style={{ resize }}
          className="ui-textarea__field"
        />
        {endIcon && (
          <span className="ui-textarea__end-icon">
            {typeof endIcon === 'function' ? <EndIcon /> : endIcon}
          </span>
        )}
      </div>
      <div className="ui-textarea__footer">
        {(error || helperText) && (
          <div className={`ui-textarea__helper ui-textarea__helper--${error ? 'error' : helperTextVariant}`}>
            {error || helperText}
          </div>
        )}
        {showCount && maxLength && (
          <div className="ui-textarea__count">
            {characterCount} / {maxLength}
          </div>
        )}
      </div>
    </div>
  );
};

export default Textarea;

