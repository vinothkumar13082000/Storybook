import React from 'react';
import './Space.scss';

export interface SpaceProps {
  /** Children */
  children: React.ReactNode;
  /** Direction */
  direction?: 'horizontal' | 'vertical';
  /** Size */
  size?: 'small' | 'medium' | 'large' | number;
  /** Wrap */
  wrap?: boolean;
  /** Align */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /** Justify */
  justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

export const Space: React.FC<SpaceProps> = ({
  children,
  direction = 'horizontal',
  size = 'medium',
  wrap = false,
  align = 'start',
  justify = 'start',
  className = '',
  style,
}) => {
  const sizeValue = typeof size === 'number' ? size : size === 'small' ? 8 : size === 'medium' ? 16 : 24;

  const spaceStyle: React.CSSProperties & { '--space-size'?: string } = {
    ...style,
    gap: `${sizeValue}px`,
    '--space-size': `${sizeValue}px`,
  };

  return (
    <div
      className={`ui-space ui-space--${direction} ${wrap ? 'ui-space--wrap' : ''} ui-space--align-${align} ui-space--justify-${justify} ${className}`}
      style={spaceStyle}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index} className="ui-space__item">
          {child}
        </div>
      ))}
    </div>
  );
};

export default Space;

