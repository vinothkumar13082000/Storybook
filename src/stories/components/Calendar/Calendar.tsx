import React, { useState } from 'react';
import './Calendar.scss';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export interface CalendarProps {
  /** Selected date */
  value?: Date | null;
  /** Default date */
  defaultValue?: Date | null;
  /** Date change handler */
  onChange?: (date: Date | null) => void;
  /** Multiple date selection */
  multiple?: boolean;
  /** Selected dates (for multiple mode) */
  selectedDates?: Date[];
  /** Multiple selection change handler */
  onDatesChange?: (dates: Date[]) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Show today highlight */
  showToday?: boolean;
  /** Show navigation */
  showNavigation?: boolean;
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

const getDaysInMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

const getFirstDayOfMonth = (date: Date): number => {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
};

export const Calendar: React.FC<CalendarProps> = ({
  value,
  defaultValue,
  onChange,
  multiple = false,
  selectedDates = [],
  onDatesChange,
  minDate,
  maxDate,
  showToday = true,
  showNavigation = true,
  animated = false,
  className = '',
  style,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || defaultValue || null);
  const [internalSelectedDates, setInternalSelectedDates] = useState<Date[]>(
    multiple ? (selectedDates.length > 0 ? selectedDates : []) : []
  );
  const [currentMonth, setCurrentMonth] = useState<Date>(value || defaultValue || new Date());

  const actualSelectedDates = multiple
    ? (selectedDates.length > 0 ? selectedDates : internalSelectedDates)
    : selectedDate
    ? [selectedDate]
    : [];

  const handleDateSelect = (day: number) => {
    const newDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);

    if (minDate && newDate < minDate) return;
    if (maxDate && newDate > maxDate) return;

    if (multiple) {
      const dateString = newDate.toDateString();
      const isSelected = internalSelectedDates.some((d) => d.toDateString() === dateString);

      let newDates: Date[];
      if (isSelected) {
        newDates = internalSelectedDates.filter((d) => d.toDateString() !== dateString);
      } else {
        newDates = [...internalSelectedDates, newDate];
      }

      setInternalSelectedDates(newDates);
      onDatesChange?.(newDates);
    } else {
      setSelectedDate(newDate);
      onChange?.(newDate);
    }
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
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return actualSelectedDates.some(
      (d) =>
        d.getDate() === date.getDate() &&
        d.getMonth() === date.getMonth() &&
        d.getFullYear() === date.getFullYear()
    );
  };

  const isToday = (day: number): boolean => {
    if (!showToday) return false;
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

  return (
    <div
      className={`ui-calendar ${animated ? 'ui-calendar--animated' : ''} ${className}`}
      style={style}
    >
      {showNavigation && (
        <div className="ui-calendar__header">
          <button
            type="button"
            className="ui-calendar__nav-button"
            onClick={() => navigateMonth('prev')}
          >
            <FaChevronLeft />
          </button>
          <div className="ui-calendar__month">
            {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </div>
          <button
            type="button"
            className="ui-calendar__nav-button"
            onClick={() => navigateMonth('next')}
          >
            <FaChevronRight />
          </button>
        </div>
      )}

      <div className="ui-calendar__weekdays">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <div key={day} className="ui-calendar__weekday">
            {day}
          </div>
        ))}
      </div>

      <div className="ui-calendar__days">
        {days.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="ui-calendar__day-empty" />;
          }

          const disabled = isDateDisabled(day);
          const selected = isDateSelected(day);
          const today = isToday(day);

          return (
            <button
              key={day}
              type="button"
              className={`ui-calendar__day ${selected ? 'ui-calendar__day--selected' : ''} ${
                today ? 'ui-calendar__day--today' : ''
              } ${disabled ? 'ui-calendar__day--disabled' : ''}`}
              onClick={() => !disabled && handleDateSelect(day)}
              disabled={disabled}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;

