import React from 'react';
import './Radio.scss';

export interface RadioProps {
  /** Label text */
  label?: string;
  /** Is checked */
  checked?: boolean;
  /** Default checked */
  defaultChecked?: boolean;
  /** Value */
  value?: string | number;
  /** Is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: string | number | undefined, e: React.ChangeEvent<HTMLInputElement>) => void;
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

export const Radio: React.FC<RadioProps> = ({
  label,
  checked,
  defaultChecked,
  value,
  disabled = false,
  onChange,
  className = '',
  name,
  id,
  size = 'medium',
  color = 'primary',
  animated = false,
}) => {
  const radioId = id || `radio-${Math.random().toString(36).substr(2, 9)}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(value, e);
  };

  return (
    <label
      className={`ui-radio ${disabled ? 'ui-radio--disabled' : ''} ui-radio--${size} ${animated ? 'ui-radio--animated' : ''} ${className}`}
      htmlFor={radioId}
    >
      <input
        type="radio"
        id={radioId}
        name={name}
        value={value}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={handleChange}
        className="ui-radio__input"
      />
      <span className={`ui-radio__circle ui-radio__circle--${color}`} />
      {label && <span className="ui-radio__label">{label}</span>}
    </label>
  );
};

export default Radio;

