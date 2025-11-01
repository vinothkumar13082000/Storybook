import React from 'react';
import './Card.scss';

export interface CardProps {
  /** Card title */
  title?: string;
  /** Card subtitle */
  subtitle?: string;
  /** Card content */
  children: React.ReactNode;
  /** Card image */
  image?: string;
  /** Image alt text */
  imageAlt?: string;
  /** Card actions */
  actions?: React.ReactNode;
  /** Card variant */
  variant?: 'elevated' | 'outlined' | 'filled';
  /** Hover effect */
  hoverable?: boolean;
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: () => void;
  /** Custom styles */
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  children,
  image,
  imageAlt,
  actions,
  variant = 'elevated',
  hoverable = false,
  animated = false,
  className = '',
  onClick,
  style,
}) => {
  return (
    <div
      className={`ui-card ui-card--${variant} ${hoverable ? 'ui-card--hoverable' : ''} ${onClick ? 'ui-card--clickable' : ''} ${animated ? 'ui-card--animated' : ''} ${className}`}
      onClick={onClick}
      style={style}
    >
      {image && (
        <div className="ui-card__image">
          <img src={image} alt={imageAlt || title || 'Card image'} />
        </div>
      )}
      <div className="ui-card__content">
        {title && (
          <div className="ui-card__header">
            <h3 className="ui-card__title">{title}</h3>
            {subtitle && <p className="ui-card__subtitle">{subtitle}</p>}
          </div>
        )}
        <div className="ui-card__body">{children}</div>
      </div>
      {actions && <div className="ui-card__actions">{actions}</div>}
    </div>
  );
};

export default Card;

