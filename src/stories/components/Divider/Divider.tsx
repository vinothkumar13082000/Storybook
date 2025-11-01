import React from 'react';
import './Divider.scss';

export interface DividerProps {
  /** Divider orientation */
  orientation?: 'horizontal' | 'vertical';
  /** Variant */
  variant?: 'solid' | 'dashed' | 'dotted';
  /** Text label */
  text?: string;
  /** Text position (for horizontal only) */
  textAlign?: 'left' | 'center' | 'right';
  /** Border width */
  borderWidth?: number;
  /** Border color */
  borderColor?: string;
  /** Spacing */
  spacing?: number;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  variant = 'solid',
  text,
  textAlign = 'center',
  borderWidth = 1,
  borderColor,
  spacing = 0,
  className = '',
  style,
}) => {
  const dividerStyle: React.CSSProperties = {
    ...style,
    ...(borderColor && { '--divider-color': borderColor } as any),
    '--divider-width': `${borderWidth}px`,
    marginTop: orientation === 'horizontal' ? `${spacing}px` : undefined,
    marginBottom: orientation === 'horizontal' ? `${spacing}px` : undefined,
    marginLeft: orientation === 'vertical' ? `${spacing}px` : undefined,
    marginRight: orientation === 'vertical' ? `${spacing}px` : undefined,
  };

  if (orientation === 'vertical') {
    return (
      <span
        className={`ui-divider ui-divider--vertical ui-divider--${variant} ${className}`}
        style={dividerStyle}
        aria-orientation="vertical"
      />
    );
  }

  return (
    <div
      className={`ui-divider ui-divider--horizontal ui-divider--${variant} ${text ? 'ui-divider--with-text' : ''} ${className}`}
      style={dividerStyle}
      role="separator"
    >
      {text && (
        <span className={`ui-divider__text ui-divider__text--${textAlign}`}>
          {text}
        </span>
      )}
    </div>
  );
};

export default Divider;

