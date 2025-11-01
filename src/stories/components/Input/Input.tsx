import React, { useState } from 'react';
import './Input.scss';
import { IconType } from 'react-icons';

export interface InputProps {
  /** Input label */
  label?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Input type */
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  /** Input size */
  size?: 'small' | 'medium' | 'large';
  /** Is input disabled */
  disabled?: boolean;
  /** Is input required */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Helper text variant */
  helperTextVariant?: 'default' | 'info' | 'success' | 'warning' | 'error';
  /** Input variant */
  variant?: 'outlined' | 'filled' | 'standard';
  /** Full width */
  fullWidth?: boolean;
  /** Icon before input */
  startIcon?: IconType | React.ReactNode;
  /** Icon after input */
  endIcon?: IconType | React.ReactNode;
  /** Change handler */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  /** Custom className */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Auto focus */
  autoFocus?: boolean;
  /** Animated variant */
  animated?: boolean;
  /** Max length */
  maxLength?: number;
}

export const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  defaultValue,
  type = 'text',
  size = 'medium',
  disabled = false,
  required = false,
  error,
  helperText,
  helperTextVariant = 'default',
  variant = 'outlined',
  fullWidth = false,
  startIcon,
  endIcon,
  onChange,
  onBlur,
  onFocus,
  className = '',
  name,
  id,
  autoFocus = false,
  animated = false,
  maxLength,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const StartIcon = startIcon as IconType;
  const EndIcon = endIcon as IconType;

  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const inputType = type === 'password' && showPassword ? 'text' : type;

  return (
    <div className={`ui-input ${fullWidth ? 'ui-input--full-width' : ''} ${animated ? 'ui-input--animated' : ''} ${className}`}>
      {label && (
        <label htmlFor={inputId} className="ui-input__label">
          {label}
          {required && <span className="ui-input__required">*</span>}
        </label>
      )}
      <div
        className={`ui-input__wrapper ui-input__wrapper--${variant} ui-input__wrapper--${size} ${disabled ? 'ui-input__wrapper--disabled' : ''} ${error ? 'ui-input__wrapper--error' : ''} ${isFocused ? 'ui-input__wrapper--focused' : ''} ${animated ? 'ui-input__wrapper--animated' : ''}`}
      >
        {startIcon && (
          <span className="ui-input__start-icon">
            {typeof startIcon === 'function' ? <StartIcon /> : startIcon}
          </span>
        )}
        <input
          id={inputId}
          name={name}
          type={inputType}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          autoFocus={autoFocus}
          maxLength={maxLength}
          className="ui-input__field"
        />
        {type === 'password' && (
          <button
            type="button"
            className="ui-input__toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? '👁️' : '👁️‍🗨️'}
          </button>
        )}
        {endIcon && type !== 'password' && (
          <span className="ui-input__end-icon">
            {typeof endIcon === 'function' ? <EndIcon /> : endIcon}
          </span>
        )}
      </div>
      {(error || helperText) && (
        <div className={`ui-input__helper ${error ? 'ui-input__helper--error' : `ui-input__helper--${helperTextVariant}`}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

export default Input;

