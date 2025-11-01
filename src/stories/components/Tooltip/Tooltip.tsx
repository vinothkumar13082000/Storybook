import React, { useState, useRef, useEffect } from 'react';
import './Tooltip.scss';

export interface TooltipProps {
  /** Tooltip content */
  title: string;
  /** Children */
  children: React.ReactNode;
  /** Placement */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Custom className */
  className?: string;
  /** Delay in ms */
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  children,
  placement = 'top',
  className = '',
  delay = 200,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const tooltipRef = useRef<HTMLDivElement>(null);
  const childRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isVisible && childRef.current && tooltipRef.current) {
      const updatePosition = () => {
        if (childRef.current && tooltipRef.current) {
          const rect = childRef.current.getBoundingClientRect();
          const tooltipRect = tooltipRef.current.getBoundingClientRect();
          const wrapperRect = childRef.current.parentElement?.getBoundingClientRect();
          
          if (!wrapperRect) return;
          
          let top = 0;
          let left = 0;

          switch (placement) {
            case 'top':
              top = rect.top - wrapperRect.top - tooltipRect.height - 8;
              left = rect.left - wrapperRect.left + rect.width / 2 - tooltipRect.width / 2;
              break;
            case 'bottom':
              top = rect.bottom - wrapperRect.top + 8;
              left = rect.left - wrapperRect.left + rect.width / 2 - tooltipRect.width / 2;
              break;
            case 'left':
              top = rect.top - wrapperRect.top + rect.height / 2 - tooltipRect.height / 2;
              left = rect.left - wrapperRect.left - tooltipRect.width - 8;
              break;
            case 'right':
              top = rect.top - wrapperRect.top + rect.height / 2 - tooltipRect.height / 2;
              left = rect.right - wrapperRect.left + 8;
              break;
          }

          setPosition({ top, left });
        }
      };

      // Use requestAnimationFrame to ensure tooltip is rendered first
      requestAnimationFrame(() => {
        updatePosition();
      });

      window.addEventListener('scroll', updatePosition, true);
      window.addEventListener('resize', updatePosition);

      return () => {
        window.removeEventListener('scroll', updatePosition, true);
        window.removeEventListener('resize', updatePosition);
      };
    }
  }, [isVisible, placement]);

  const showTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  return (
    <div className={`ui-tooltip-wrapper ${className}`} style={{ position: 'relative', display: 'inline-block' }}>
      <div
        ref={childRef}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        className="ui-tooltip-trigger"
      >
        {children}
      </div>
      {isVisible && (
        <div
          ref={tooltipRef}
          className={`ui-tooltip ui-tooltip--${placement}`}
          style={{
            position: 'absolute',
            top: `${position.top}px`,
            left: `${position.left}px`,
            zIndex: 1070,
            pointerEvents: 'none',
          }}
        >
          {title}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

