import React from 'react';
import './Skeleton.scss';

export interface SkeletonProps {
  /** Variant */
  variant?: 'text' | 'circular' | 'rectangular' | 'rounded';
  /** Width */
  width?: number | string;
  /** Height */
  height?: number | string;
  /** Animation */
  animation?: 'pulse' | 'wave' | 'none';
  /** Border radius */
  borderRadius?: number | string;
  /** Custom className */
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rectangular',
  width,
  height,
  animation = 'pulse',
  borderRadius,
  className = '',
}) => {
  const style: React.CSSProperties = {
    width: width || (variant === 'circular' ? '40px' : '100%'),
    height: height || (variant === 'circular' ? '40px' : variant === 'text' ? '16px' : '100%'),
    borderRadius: borderRadius || (variant === 'circular' ? '50%' : variant === 'rounded' ? '8px' : undefined),
  };

  return (
    <span
      className={`ui-skeleton ui-skeleton--${variant} ui-skeleton--${animation} ${className}`}
      style={style}
      aria-busy="true"
      aria-live="polite"
    />
  );
};

export default Skeleton;

