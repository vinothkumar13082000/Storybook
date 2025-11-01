import React, { useState } from 'react';
import './Rating.scss';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface RatingProps {
  /** Rating value */
  value?: number;
  /** Default value */
  defaultValue?: number;
  /** Maximum rating */
  max?: number;
  /** Is read only */
  readonly?: boolean;
  /** Is disabled */
  disabled?: boolean;
  /** Show half stars */
  allowHalf?: boolean;
  /** Custom icon */
  icon?: IconType | React.ReactNode;
  /** Size */
  size?: 'small' | 'medium' | 'large' | number;
  /** Color */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | string;
  /** Change handler */
  onChange?: (value: number) => void;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Show labels */
  showLabels?: boolean;
  /** Labels array */
  labels?: string[];
  /** Custom className */
  className?: string;
}

export const Rating: React.FC<RatingProps> = ({
  value: controlledValue,
  defaultValue = 0,
  max = 5,
  readonly = false,
  disabled = false,
  allowHalf = false,
  icon,
  size = 'medium',
  color = 'warning',
  onChange,
  hoverEffect = true,
  showLabels = false,
  labels,
  className = '',
}) => {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : internalValue;
  const displayValue = hoverValue !== null ? hoverValue : value;

  const Icon = icon || FaStar;
  const IconComponent = Icon as IconType;
  const sizeValue = typeof size === 'number' ? size : size === 'small' ? 16 : size === 'medium' ? 24 : 32;

  const handleClick = (newValue: number) => {
    if (disabled || readonly) return;
    
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleMouseEnter = (newValue: number) => {
    if (disabled || readonly || !hoverEffect) return;
    setHoverValue(newValue);
  };

  const handleMouseLeave = () => {
    if (disabled || readonly || !hoverEffect) return;
    setHoverValue(null);
  };

  const renderStar = (index: number) => {
    const starValue = index + 1;
    const halfValue = starValue - 0.5;
    const isFull = displayValue >= starValue;
    const isHalf = allowHalf && displayValue >= halfValue && displayValue < starValue;

    return (
      <span
        key={index}
        className={`ui-rating__star ${isFull ? 'ui-rating__star--full' : isHalf ? 'ui-rating__star--half' : ''} ${disabled ? 'ui-rating__star--disabled' : ''}`}
        onClick={() => handleClick(starValue)}
        onMouseEnter={() => handleMouseEnter(starValue)}
        onMouseLeave={handleMouseLeave}
        style={{ fontSize: `${sizeValue}px`, cursor: disabled || readonly ? 'default' : 'pointer' }}
      >
        {isHalf ? <FaStarHalfAlt /> : typeof Icon === 'function' ? <IconComponent /> : Icon || <FaStar />}
      </span>
    );
  };

  return (
    <div className={`ui-rating ui-rating--${size} ui-rating--${color} ${disabled ? 'ui-rating--disabled' : ''} ${!hoverEffect ? 'ui-rating--no-hover' : ''} ${className}`}>
      <div className="ui-rating__stars">
        {Array.from({ length: max }).map((_, index) => renderStar(index))}
      </div>
      {showLabels && labels && labels[Math.ceil(displayValue) - 1] && (
        <span className="ui-rating__label">{labels[Math.ceil(displayValue) - 1]}</span>
      )}
    </div>
  );
};

export default Rating;

