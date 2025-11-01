import React, { useState, useRef, useEffect } from 'react';
import './Slider.scss';

export interface SliderProps {
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step value */
  step?: number;
  /** Current value */
  value?: number;
  /** Default value */
  defaultValue?: number;
  /** Is disabled */
  disabled?: boolean;
  /** Change handler */
  onChange?: (value: number) => void;
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
  /** Show value label */
  showValue?: boolean;
  /** Show marks */
  marks?: boolean;
}

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  step = 1,
  value: controlledValue,
  defaultValue = 0,
  disabled = false,
  onChange,
  className = '',
  name,
  id,
  size = 'medium',
  color = 'primary',
  showValue = false,
  marks = false,
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;

  const percentage = ((value - min) / (max - min)) * 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const sliderId = id || `slider-${Math.random().toString(36).substr(2, 9)}`;

  const markCount = 5;
  const markInterval = (max - min) / (markCount - 1);

  return (
    <div className={`ui-slider ${disabled ? 'ui-slider--disabled' : ''} ui-slider--${size} ${className}`}>
      <div className="ui-slider__container">
        {showValue && (
          <div className="ui-slider__value-label">{value}</div>
        )}
        <div className="ui-slider__track-wrapper" ref={sliderRef}>
          <div className="ui-slider__track">
            <div
              className={`ui-slider__fill ui-slider__fill--${color}`}
              style={{ width: `${percentage}%` }}
            />
            {marks && (
              <div className="ui-slider__marks">
                {Array.from({ length: markCount }).map((_, index) => {
                  const markValue = min + markInterval * index;
                  return (
                    <span
                      key={index}
                      className="ui-slider__mark"
                      style={{ left: `${(markValue - min) / (max - min) * 100}%` }}
                    >
                      <span className="ui-slider__mark-label">{markValue}</span>
                    </span>
                  );
                })}
              </div>
            )}
          </div>
          <input
            type="range"
            id={sliderId}
            name={name}
            min={min}
            max={max}
            step={step}
            value={value}
            disabled={disabled}
            onChange={handleChange}
            className={`ui-slider__input ui-slider__input--${color}`}
            style={{
              background: `linear-gradient(to right, var(--slider-color, $primary-500) 0%, var(--slider-color, $primary-500) ${percentage}%, $gray-300 ${percentage}%, $gray-300 100%)`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;

