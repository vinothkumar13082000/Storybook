import React from 'react';
import './Empty.scss';
import { FaInbox, FaSearch } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface EmptyProps {
  /** Empty state description */
  description?: string;
  /** Image */
  image?: string;
  /** Image style */
  imageStyle?: React.CSSProperties;
  /** Custom icon */
  icon?: IconType | React.ReactNode;
  /** Icon size */
  iconSize?: number;
  /** Footer content */
  footer?: React.ReactNode;
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  /** Border color */
  borderColor?: string;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

const defaultIcon = FaInbox;

export const Empty: React.FC<EmptyProps> = ({
  description = 'No data',
  image,
  imageStyle,
  icon,
  iconSize = 64,
  footer,
  size = 'medium',
  borderStyle = 'none',
  borderColor,
  hoverEffect = false,
  className = '',
  style,
}) => {
  const Icon = icon || defaultIcon;
  const IconComponent = Icon as IconType;

  const emptyStyle: React.CSSProperties = {
    ...style,
    ...(borderColor && { '--empty-border-color': borderColor } as any),
    '--empty-border-style': borderStyle,
  };

  return (
    <div
      className={`ui-empty ui-empty--${size} ${hoverEffect ? 'ui-empty--hover' : ''} ${className}`}
      style={emptyStyle}
    >
      {image ? (
        <img src={image} alt="Empty" className="ui-empty__image" style={imageStyle} />
      ) : (
        <div className="ui-empty__icon" style={{ fontSize: `${iconSize}px` }}>
          {typeof Icon === 'function' ? <IconComponent /> : Icon}
        </div>
      )}
      {description && (
        <div className="ui-empty__description">{description}</div>
      )}
      {footer && (
        <div className="ui-empty__footer">{footer}</div>
      )}
    </div>
  );
};

export default Empty;

