import React, { useState, useRef, useEffect } from 'react';
import './Popover.scss';

export interface PopoverProps {
  /** Popover content */
  content: React.ReactNode;
  /** Trigger element */
  children: React.ReactNode;
  /** Placement */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Is controlled open */
  open?: boolean;
  /** Default open state */
  defaultOpen?: boolean;
  /** Custom className */
  className?: string;
  /** Close on click outside */
  closeOnClickOutside?: boolean;
}

export const Popover: React.FC<PopoverProps> = ({
  content,
  children,
  placement = 'bottom',
  open: controlledOpen,
  defaultOpen = false,
  className = '',
  closeOnClickOutside = true,
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const popoverRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : internalOpen;

  useEffect(() => {
    if (isOpen && triggerRef.current && popoverRef.current) {
      const triggerRect = triggerRef.current.getBoundingClientRect();
      const popoverRect = popoverRef.current.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (placement) {
        case 'top':
          top = triggerRect.top - popoverRect.height - 8;
          left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
          break;
        case 'bottom':
          top = triggerRect.bottom + 8;
          left = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
          break;
        case 'left':
          top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
          left = triggerRect.left - popoverRect.width - 8;
          break;
        case 'right':
          top = triggerRect.top + triggerRect.height / 2 - popoverRect.height / 2;
          left = triggerRect.right + 8;
          break;
      }

      setPosition({ top, left });
    }
  }, [isOpen, placement]);

  useEffect(() => {
    if (!closeOnClickOutside || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        triggerRef.current &&
        !popoverRef.current.contains(event.target as Node) &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        if (!isControlled) {
          setInternalOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeOnClickOutside, isControlled]);

  const toggleOpen = () => {
    if (!isControlled) {
      setInternalOpen(!internalOpen);
    }
  };

  return (
    <>
      <div
        ref={triggerRef}
        onClick={toggleOpen}
        className={`ui-popover-trigger ${className}`}
      >
        {children}
      </div>
      {isOpen && (
        <>
          <div className="ui-popover-backdrop" onClick={() => !isControlled && setInternalOpen(false)} />
          <div
            ref={popoverRef}
            className={`ui-popover ui-popover--${placement}`}
            style={{
              position: 'fixed',
              top: `${position.top}px`,
              left: `${position.left}px`,
              zIndex: 1060,
            }}
          >
            {content}
          </div>
        </>
      )}
    </>
  );
};

export default Popover;

