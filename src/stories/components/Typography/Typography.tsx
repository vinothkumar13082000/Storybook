import React from 'react';
import './Typography.scss';

export interface TypographyProps {
  /** Text content */
  children: React.ReactNode;
  /** Variant */
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body1' | 'body2' | 'caption' | 'overline';
  /** Component to render as */
  component?: keyof JSX.IntrinsicElements;
  /** Color */
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info' | 'textPrimary' | 'textSecondary' | 'textDisabled';
  /** Align */
  align?: 'left' | 'center' | 'right' | 'justify';
  /** Font weight */
  fontWeight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold';
  /** No wrap */
  noWrap?: boolean;
  /** Gutter bottom */
  gutterBottom?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

const variantMapping: Record<string, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  caption: 'span',
  overline: 'span',
};

export const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body1',
  component,
  color = 'default',
  align = 'left',
  fontWeight = 'normal',
  noWrap = false,
  gutterBottom = false,
  className = '',
  style,
}) => {
  const Component = component || variantMapping[variant] || 'p';

  return (
    <Component
      className={`ui-typography ui-typography--${variant} ui-typography--${color} ui-typography--${align} ui-typography--${fontWeight} ${noWrap ? 'ui-typography--no-wrap' : ''} ${gutterBottom ? 'ui-typography--gutter-bottom' : ''} ${className}`}
      style={style}
    >
      {children}
    </Component>
  );
};

export default Typography;

