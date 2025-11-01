import React from 'react';
import './Switch.scss';

export interface SwitchProps {
  /** Label text */
  label?: string;
  /** Label position */
  labelPosition?: 'left' | 'right';
  /** Is checked */
  checked?: boolean;
  /** Default checked */
  defaultChecked?: boolean;
  /** Is disabled */
  disabled?: boolean;
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

export const Switch: React.FC<SwitchProps> = ({
  label,
  labelPosition = 'right',
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  className = '',
  name,
  id,
  size = 'medium',
  color = 'primary',
  animated = false,
}) => {
  const switchId = id || `switch-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked, e);
  };

  return (
    <label
      className={`ui-switch ${disabled ? 'ui-switch--disabled' : ''} ui-switch--${size} ui-switch--${labelPosition} ${animated ? 'ui-switch--animated' : ''} ${className}`}
      htmlFor={switchId}
    >
      <input
        type="checkbox"
        id={switchId}
        name={name}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
        className="ui-switch__input"
      />
      <span className={`ui-switch__slider ui-switch__slider--${color}`} />
      {label && <span className="ui-switch__label">{label}</span>}
    </label>
  );
};

export default Switch;

