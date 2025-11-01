import React, { useState, useRef, useEffect } from 'react';
import './DatePicker.scss';
import { FaCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface DatePickerProps {
  /** Selected date */
  value?: Date | null;
  /** Default date */
  defaultValue?: Date | null;
  /** Date change handler */
  onChange?: (date: Date | null) => void;
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
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Custom format function */
  format?: (date: Date) => string;
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  defaultValue,
  onChange,
  placeholder = 'Select date',
  disabled = false,
  required = false,
  label,
  size = 'medium',
  variant = 'outlined',
  clearable = true,
  minDate,
  maxDate,
  format = formatDate,
  animated = false,
  className = '',
  style,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || defaultValue || null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState<Date>(value || defaultValue || new Date());
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedDate(value);
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

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;

    setSelectedDate(newDate);
    onChange?.(newDate);
    setIsOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDate(null);
    onChange?.(null);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth((prev) => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const isDateDisabled = (day: number): boolean => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  const isDateSelected = (day: number): boolean => {
    if (!selectedDate) return false;
    return (
      selectedDate.getDate() === day &&
      selectedDate.getMonth() === currentMonth.getMonth() &&
      selectedDate.getFullYear() === currentMonth.getFullYear()
    );
  };

  const isToday = (day: number): boolean => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth.getMonth() &&
      today.getFullYear() === currentMonth.getFullYear()
    );
  };

  const daysInMonth = getDaysInMonth(currentMonth);
  const firstDay = getFirstDayOfMonth(currentMonth);
  const days: (number | null)[] = Array(firstDay).fill(null).concat(
    Array.from({ length: daysInMonth }, (_, i) => i + 1)
  );

  const displayValue = selectedDate ? format(selectedDate) : '';

  return (
    <div
      ref={wrapperRef}
      className={`ui-date-picker ${animated ? 'ui-date-picker--animated' : ''} ${className}`}
      style={style}
    >
      {label && (
        <label className="ui-date-picker__label">
          {label}
          {required && <span className="ui-date-picker__required">*</span>}
        </label>
      )}
      <div className={`ui-date-picker__wrapper ui-date-picker__wrapper--${variant} ui-date-picker__wrapper--${size}`}>
        <div
          className={`ui-date-picker__input ${disabled ? 'ui-date-picker__input--disabled' : ''}`}
          onClick={() => !disabled && setIsOpen(!isOpen)}
        >
          <input
            type="text"
            value={displayValue}
            placeholder={placeholder}
            disabled={disabled}
            readOnly
          />
          <div className="ui-date-picker__icons">
            {clearable && selectedDate && !disabled && (
              <button
                className="ui-date-picker__clear"
                onClick={handleClear}
                type="button"
              >
                ×
              </button>
            )}
            <FaCalendarAlt className="ui-date-picker__icon" />
          </div>
        </div>

        {isOpen && !disabled && (
          <div className="ui-date-picker__calendar">
            <div className="ui-date-picker__calendar-header">
              <button
                type="button"
                className="ui-date-picker__nav-button"
                onClick={() => navigateMonth('prev')}
              >
                <FaChevronLeft />
              </button>
              <div className="ui-date-picker__calendar-month">
                {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
              </div>
              <button
                type="button"
                className="ui-date-picker__nav-button"
                onClick={() => navigateMonth('next')}
              >
                <FaChevronRight />
              </button>
            </div>

            <div className="ui-date-picker__calendar-weekdays">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="ui-date-picker__weekday">
                  {day}
                </div>
              ))}
            </div>

            <div className="ui-date-picker__calendar-days">
              {days.map((day, index) => {
                if (day === null) {
                  return <div key={`empty-${index}`} className="ui-date-picker__day-empty" />;
                }

                const disabled = isDateDisabled(day);
                const selected = isDateSelected(day);
                const today = isToday(day);

                return (
                  <button
                    key={day}
                    type="button"
                    className={`ui-date-picker__day ${
                      selected ? 'ui-date-picker__day--selected' : ''
                    } ${today ? 'ui-date-picker__day--today' : ''} ${
                      disabled ? 'ui-date-picker__day--disabled' : ''
                    }`}
                    onClick={() => !disabled && handleDateSelect(day)}
                    disabled={disabled}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DatePicker;

