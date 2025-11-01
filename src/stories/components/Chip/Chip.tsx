import React from 'react';
import './Chip.scss';
import { IconType } from 'react-icons';
import { FaTimes } from 'react-icons/fa';

export interface ChipProps {
  /** Label text */
  label: string;
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'default';
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Variant */
  variant?: 'filled' | 'outlined';
  /** Is deletable */
  deletable?: boolean;
  /** Delete handler */
  onDelete?: () => void;
  /** Icon before label */
  icon?: IconType | React.ReactNode;
  /** Avatar/image */
  avatar?: string | React.ReactNode;
  /** Custom className */
  className?: string;
  /** Animated variant */
  animated?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export const Chip: React.FC<ChipProps> = ({
  label,
  color = 'default',
  size = 'medium',
  variant = 'filled',
  deletable = false,
  onDelete,
  icon,
  avatar,
  className = '',
  animated = false,
  onClick,
}) => {
  const Icon = icon as IconType;

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete?.();
  };

  return (
    <span
      className={`ui-chip ui-chip--${color} ui-chip--${size} ui-chip--${variant} ${deletable ? 'ui-chip--deletable' : ''} ${onClick ? 'ui-chip--clickable' : ''} ${animated ? 'ui-chip--animated' : ''} ${className}`}
      onClick={onClick}
    >
      {avatar && (
        <span className="ui-chip__avatar">
          {typeof avatar === 'string' ? <img src={avatar} alt="" /> : avatar}
        </span>
      )}
      {icon && !avatar && (
        <span className="ui-chip__icon">
          {typeof icon === 'function' ? <Icon /> : icon}
        </span>
      )}
      <span className="ui-chip__label">{label}</span>
      {deletable && (
        <button
          type="button"
          className="ui-chip__delete"
          onClick={handleDelete}
          aria-label="Delete chip"
        >
          <FaTimes />
        </button>
      )}
    </span>
  );
};

export default Chip;

