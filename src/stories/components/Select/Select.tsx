import React, { useState, useRef, useEffect } from 'react';
import './Select.scss';
import { FaChevronDown } from 'react-icons/fa';

export interface SelectOption {
  value: string | number;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  /** Select label */
  label?: string;
  /** Options */
  options: SelectOption[];
  /** Selected value */
  value?: string | number;
  /** Default value */
  defaultValue?: string | number;
  /** Placeholder */
  placeholder?: string;
  /** Is disabled */
  disabled?: boolean;
  /** Is required */
  required?: boolean;
  /** Error message */
  error?: string;
  /** Helper text */
  helperText?: string;
  /** Select size */
  size?: 'small' | 'medium' | 'large';
  /** Full width */
  fullWidth?: boolean;
  /** Change handler */
  onChange?: (value: string | number) => void;
  /** Custom className */
  className?: string;
  /** Input name */
  name?: string;
  /** Input id */
  id?: string;
  /** Animated variant */
  animated?: boolean;
}

export const Select: React.FC<SelectProps> = ({
  label,
  options,
  value,
  defaultValue,
  placeholder = 'Select an option',
  disabled = false,
  required = false,
  error,
  helperText,
  size = 'medium',
  fullWidth = false,
  onChange,
  className = '',
  name,
  id,
  animated = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | number | undefined>(value || defaultValue);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSelectedValue(value);
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const selectedOption = options.find((opt) => opt.value === selectedValue);

  const handleSelect = (option: SelectOption) => {
    if (option.disabled) return;
    setSelectedValue(option.value);
    onChange?.(option.value);
    setIsOpen(false);
  };

  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div
      ref={selectRef}
      className={`ui-select ${fullWidth ? 'ui-select--full-width' : ''} ${animated ? 'ui-select--animated' : ''} ${className}`}
    >
      {label && (
        <label htmlFor={selectId} className="ui-select__label">
          {label}
          {required && <span className="ui-select__required">*</span>}
        </label>
      )}
      <div
        className={`ui-select__wrapper ui-select__wrapper--${size} ${disabled ? 'ui-select__wrapper--disabled' : ''} ${error ? 'ui-select__wrapper--error' : ''} ${isOpen ? 'ui-select__wrapper--open' : ''} ${animated ? 'ui-select__wrapper--animated' : ''}`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <div className="ui-select__display">
          {selectedOption ? (
            <span className="ui-select__value">{selectedOption.label}</span>
          ) : (
            <span className="ui-select__placeholder">{placeholder}</span>
          )}
        </div>
        <FaChevronDown className={`ui-select__icon ${isOpen ? 'ui-select__icon--open' : ''}`} />
      </div>
      {isOpen && (
        <div className="ui-select__dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className={`ui-select__option ${option.value === selectedValue ? 'ui-select__option--selected' : ''} ${option.disabled ? 'ui-select__option--disabled' : ''}`}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      {(error || helperText) && (
        <div className={`ui-select__helper ${error ? 'ui-select__helper--error' : ''}`}>
          {error || helperText}
        </div>
      )}
    </div>
  );
};

export default Select;

