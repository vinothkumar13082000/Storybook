import React, { useState, useRef, useEffect } from 'react';
import './TimePicker.scss';
import { FaClock } from 'react-icons/fa';

export interface TimePickerProps {
  /** Selected time */
  value?: Date | null;
  /** Default time */
  defaultValue?: Date | null;
  /** Time change handler */
  onChange?: (time: Date | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Is disabled */
  disabled?: boolean;
  /** Is required */
  required?: boolean;
  /** Label */
  label?: string;
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Variant */
  variant?: 'outlined' | 'filled' | 'standard';
  /** Show clear button */
  clearable?: boolean;
  /** Format (12h or 24h) */
  format?: '12h' | '24h';
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

const formatTime = (date: Date, format: '12h' | '24h'): string => {
  if (format === '12h') {
    return date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  }
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const TimePicker: React.FC<TimePickerProps> = ({
  value,
  defaultValue,
  onChange,
  placeholder = 'Select time',
  disabled = false,
  required = false,
  label,
  size = 'medium',
  variant = 'outlined',
  clearable = true,
  format = '12h',
  animated = false,
  className = '',
  style,
}) => {
  const [selectedTime, setSelectedTime] = useState<Date | null>(value || defaultValue || null);
  const [isOpen, setIsOpen] = useState(false);
  const [hours, setHours] = useState<number>(selectedTime?.getHours() || 12);
  const [minutes, setMinutes] = useState<number>(selectedTime?.getMinutes() || 0);
  const [ampm, setAmpm] = useState<'AM' | 'PM'>(selectedTime ? (selectedTime.getHours() >= 12 ? 'PM' : 'AM') : 'AM');
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedTime(value);
      if (value) {
        setHours(value.getHours() % 12 || 12);
        setMinutes(value.getMinutes());
        setAmpm(value.getHours() >= 12 ? 'PM' : 'AM');
      }
    }
  }, [value]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
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

  const handleTimeChange = (newHours: number, newMinutes: number, newAmpm?: 'AM' | 'PM') => {
    let finalHours = newHours;
    if (format === '12h') {
      const finalAmpm = newAmpm !== undefined ? newAmpm : ampm;
      if (finalAmpm === 'PM' && finalHours !== 12) {
        finalHours += 12;
      } else if (finalAmpm === 'AM' && finalHours === 12) {
        finalHours = 0;
      }
    }

    const baseDate = selectedTime || new Date();
    const newTime = new Date(baseDate);
    newTime.setHours(finalHours);
    newTime.setMinutes(newMinutes);
    newTime.setSeconds(0);
    newTime.setMilliseconds(0);

    setSelectedTime(newTime);
    onChange?.(newTime);
  };

  const handleHoursChange = (newHours: number) => {
    if (format === '12h') {
      if (newHours < 1) newHours = 12;
      if (newHours > 12) newHours = 1;
    } else {
      if (newHours < 0) newHours = 23;
      if (newHours > 23) newHours = 0;
    }
    setHours(newHours);
    handleTimeChange(newHours, minutes, format === '12h' ? ampm : undefined);
  };

  const handleMinutesChange = (newMinutes: number) => {
    if (newMinutes < 0) newMinutes = 59;
    if (newMinutes > 59) newMinutes = 0;
    setMinutes(newMinutes);
    handleTimeChange(format === '12h' ? (hours % 12 || 12) : hours, newMinutes, format === '12h' ? ampm : undefined);
  };

  const handleAmpmToggle = () => {
    const newAmpm = ampm === 'AM' ? 'PM' : 'AM';
    setAmpm(newAmpm);
    handleTimeChange(hours, minutes, newAmpm);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedTime(null);
    setHours(12);
    setMinutes(0);
    setAmpm('AM');
    onChange?.(null);
  };

  const handleConfirm = () => {
    setIsOpen(false);
  };

  const displayValue = selectedTime ? formatTime(selectedTime, format) : '';

  return (
    <div
      ref={wrapperRef}
      className={`ui-time-picker ${animated ? 'ui-time-picker--animated' : ''} ${className}`}
      style={style}
    >
      {label && (
        <label className="ui-time-picker__label">
          {label}
          {required && <span className="ui-time-picker__required">*</span>}
        </label>
      )}
      <div className={`ui-time-picker__wrapper ui-time-picker__wrapper--${variant} ui-time-picker__wrapper--${size}`}>
        <div
          className={`ui-time-picker__input ${disabled ? 'ui-time-picker__input--disabled' : ''}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <input
            type="text"
            value={displayValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly
          />
          <div className="ui-time-picker__icons">
            {clearable && selectedTime && !disabled && (
              <button
                className="ui-time-picker__clear"
                onClick={handleClear}
                type="button"
              >
                ×
              </button>
            )}
            <FaClock className="ui-time-picker__icon" />
          </div>
        </div>

        {isOpen && !disabled && (
          <div className="ui-time-picker__popup">
            <div className="ui-time-picker__time-selector">
              <div className="ui-time-picker__time-column">
                <button
                  type="button"
                  className="ui-time-picker__time-button ui-time-picker__time-button--up"
                  onClick={() => handleHoursChange(hours + 1)}
                >
                  ▲
                </button>
                <div className="ui-time-picker__time-value">
                  {format === '12h' ? (hours % 12 || 12) : String(hours).padStart(2, '0')}
                </div>
                <button
                  type="button"
                  className="ui-time-picker__time-button ui-time-picker__time-button--down"
                  onClick={() => handleHoursChange(hours - 1)}
                >
                  ▼
                </button>
              </div>

              <div className="ui-time-picker__time-separator">:</div>

              <div className="ui-time-picker__time-column">
                <button
                  type="button"
                  className="ui-time-picker__time-button ui-time-picker__time-button--up"
                  onClick={() => handleMinutesChange(minutes + 1)}
                >
                  ▲
                </button>
                <div className="ui-time-picker__time-value">
                  {String(minutes).padStart(2, '0')}
                </div>
                <button
                  type="button"
                  className="ui-time-picker__time-button ui-time-picker__time-button--down"
                  onClick={() => handleMinutesChange(minutes - 1)}
                >
                  ▼
                </button>
              </div>

              {format === '12h' && (
                <div className="ui-time-picker__time-column">
                  <button
                    type="button"
                    className="ui-time-picker__time-button ui-time-picker__time-button--up"
                    onClick={handleAmpmToggle}
                  >
                    ▲
                  </button>
                  <div className="ui-time-picker__time-value">
                    {ampm}
                  </div>
                  <button
                    type="button"
                    className="ui-time-picker__time-button ui-time-picker__time-button--down"
                    onClick={handleAmpmToggle}
                  >
                    ▼
                  </button>
                </div>
              )}
            </div>

            <div className="ui-time-picker__actions">
              <button
                type="button"
                className="ui-time-picker__confirm-button"
                onClick={handleConfirm}
              >
                OK
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimePicker;

