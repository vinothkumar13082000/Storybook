import React, { useState } from 'react';
import './Image.scss';

export interface ImageProps {
  /** Image source */
  src: string;
  /** Alt text */
  alt?: string;
  /** Width */
  width?: number | string;
  /** Height */
  height?: number | string;
  /** Object fit */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Border radius */
  borderRadius?: number | string;
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  /** Border width */
  borderWidth?: number;
  /** Border color */
  borderColor?: string;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Lazy load */
  lazy?: boolean;
  /** Placeholder while loading */
  placeholder?: string;
  /** Fallback image */
  fallback?: string;
  /** Show preview */
  preview?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

export const Image: React.FC<ImageProps> = ({
  src,
  alt = '',
  width,
  height,
  objectFit = 'cover',
  borderRadius = 0,
  borderStyle = 'solid',
  borderWidth = 0,
  borderColor,
  hoverEffect = false,
  lazy = false,
  placeholder,
  fallback,
  preview = false,
  className = '',
  style,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const imageStyle: React.CSSProperties = {
    ...style,
    width: width || 'auto',
    height: height || 'auto',
    objectFit,
    borderRadius,
    ...(borderColor && { '--image-border-color': borderColor } as any),
    '--image-border-width': `${borderWidth}px`,
    '--image-border-style': borderStyle,
  };

  const handleError = () => {
    setError(true);
  };

  const handleLoad = () => {
    setLoaded(true);
  };

  const displaySrc = error && fallback ? fallback : src;

  return (
    <div
      className={`ui-image-wrapper ${hoverEffect ? 'ui-image-wrapper--hover' : ''} ${className}`}
      style={imageStyle}
    >
      {!loaded && placeholder && (
        <div className="ui-image__placeholder">
          <img src={placeholder} alt="Loading" />
        </div>
      )}
      <img
        src={displaySrc}
        alt={alt}
        className={`ui-image ${loaded ? 'ui-image--loaded' : ''}`}
        onLoad={handleLoad}
        onError={handleError}
        loading={lazy ? 'lazy' : undefined}
      />
    </div>
  );
};

export default Image;

