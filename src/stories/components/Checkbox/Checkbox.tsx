import React from 'react';
import './Checkbox.scss';

export interface CheckboxProps {
  /** Label text */
  label?: string;
  /** Is checked */
  checked?: boolean;
  /** Default checked */
  defaultChecked?: boolean;
  /** Is disabled */
  disabled?: boolean;
  /** Is indeterminate */
  indeterminate?: boolean;
  /** Change handler */
  onChange?: (checked: boolean, e: React.ChangeEvent<HTMLInputElement>) => void;
  /** Custom className */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning';
  /** Animated variant */
  animated?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked,
  defaultChecked,
  disabled = false,
  indeterminate = false,
  onChange,
  className = '',
  name,
  id,
  size = 'medium',
  color = 'primary',
  animated = false,
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, e);
  };

  return (
    <label
      className={`ui-checkbox ${disabled ? 'ui-checkbox--disabled' : ''} ui-checkbox--${size} ${animated ? 'ui-checkbox--animated' : ''} ${className}`}
      htmlFor={checkboxId}
    >
      <input
        type="checkbox"
        id={checkboxId}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
        ref={(input) => {
          if (input) input.indeterminate = indeterminate;
        }}
        className="ui-checkbox__input"
      />
      <span className={`ui-checkbox__checkmark ui-checkbox__checkmark--${color}`} />
      {label && <span className="ui-checkbox__label">{label}</span>}
    </label>
  );
};

export default Checkbox;

