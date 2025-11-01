import React from 'react';
import './Backdrop.scss';

export interface BackdropProps {
  /** Is visible */
  visible?: boolean;
  /** Opacity */
  opacity?: number;
  /** Background color */
  backgroundColor?: string;
  /** Blur effect */
  blur?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

export const Backdrop: React.FC<BackdropProps> = ({
  visible = true,
  opacity = 0.5,
  backgroundColor = '#000',
  blur = false,
  onClick,
  className = '',
  style,
}) => {
  if (!visible) return null;

  const backdropStyle: React.CSSProperties = {
    ...style,
    backgroundColor: backgroundColor,
    opacity,
  };

  return (
    <div
      className={`ui-backdrop ${blur ? 'ui-backdrop--blur' : ''} ${className}`}
      style={backdropStyle}
      onClick={onClick}
      role="presentation"
      aria-hidden="true"
    />
  );
};

export default Backdrop;

