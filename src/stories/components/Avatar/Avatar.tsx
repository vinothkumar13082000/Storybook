import React from 'react';
import './Avatar.scss';

export interface AvatarProps {
  /** Image source */
  src?: string;
  /** Alt text */
  alt?: string;
  /** Avatar size */
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  /** Initials to display */
  initials?: string;
  /** Icon to display */
  icon?: React.ReactNode;
  /** Color variant */
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'default';
  /** Variant */
  variant?: 'circular' | 'rounded' | 'square';
  /** Custom className */
  className?: string;
  /** Click handler */
  onClick?: () => void;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'medium',
  initials,
  icon,
  color = 'default',
  variant = 'circular',
  className = '',
  onClick,
}) => {
  const getInitials = () => {
    if (initials) return initials;
    if (alt) {
      return alt
        .split(' ')
        .map((word) => word[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
    return '?';
  };

  return (
    <div
      className={`ui-avatar ui-avatar--${size} ui-avatar--${variant} ui-avatar--${color} ${onClick ? 'ui-avatar--clickable' : ''} ${className}`}
      onClick={onClick}
    >
      {src ? (
        <img src={src} alt={alt || 'Avatar'} className="ui-avatar__img" />
      ) : icon ? (
        <span className="ui-avatar__icon">{icon}</span>
      ) : (
        <span className="ui-avatar__initials">{getInitials()}</span>
      )}
    </div>
  );
};

export default Avatar;

