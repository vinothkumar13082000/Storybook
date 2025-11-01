import React, { useEffect } from "react";
import "./Dialog.scss";
import { FaTimes } from "react-icons/fa";
import { Button } from "../Button/Button";

export interface DialogProps {
  /** Is dialog open */
  open?: boolean;
  /** Dialog title */
  title?: string;
  /** Dialog content */
  children?: React.ReactNode;
  /** Dialog content text */
  content?: string;
  /** Show close icon */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Variant */
  variant?: "default" | "centered" | "fullscreen";
  /** Size */
  size?: "small" | "medium" | "large" | "full";
  /** Show backdrop */
  backdrop?: boolean;
  /** Backdrop clickable to close */
  backdropClosable?: boolean;
  /** Show footer */
  showFooter?: boolean;
  /** Footer content */
  footer?: React.ReactNode;
  /** Primary button label */
  primaryButtonLabel?: string;
  /** Secondary button label */
  secondaryButtonLabel?: string;
  /** Primary button click handler */
  onPrimaryClick?: () => void;
  /** Secondary button click handler */
  onSecondaryClick?: () => void;
  /** Border style */
  borderStyle?: "solid" | "dashed" | "dotted" | "none";
  /** Border width */
  borderWidth?: number;
  /** Border color */
  borderColor?: string;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

const Dialog: React.FC<DialogProps> = ({
  open = true,
  title,
  children,
  content,
  closable = true,
  onClose,
  variant = "centered",
  size = "medium",
  backdrop = true,
  backdropClosable = true,
  showFooter = true,
  footer,
  primaryButtonLabel,
  secondaryButtonLabel,
  onPrimaryClick,
  onSecondaryClick,
  borderStyle = "solid",
  borderWidth = 1,
  borderColor,
  hoverEffect = false,
  animated = false,
  className = "",
  style,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (backdropClosable && e.target === e.currentTarget) {
      onClose?.();
    }
  };

  const dialogStyle: React.CSSProperties & {
    "--dialog-border-color"?: string;
    "--dialog-border-width"?: string;
    "--dialog-border-style"?: string;
  } = {
    ...style,
    ...(borderColor && { "--dialog-border-color": borderColor }),
    "--dialog-border-width": `${borderWidth}px`,
    "--dialog-border-style": borderStyle,
  };

  return (
    <>
      {backdrop && (
        <div
          className="ui-dialog__backdrop"
          onClick={handleBackdropClick}
          aria-hidden="true"
        />
      )}
      <div
        className={`ui-dialog__wrapper ui-dialog__wrapper--${variant} ${className}`}
        onClick={backdropClosable ? handleBackdropClick : undefined}
      >
        <div
          className={`ui-dialog ui-dialog--${size} ${hoverEffect ? "ui-dialog--hover" : ""} ${animated ? "ui-dialog--animated" : ""}`}
          style={dialogStyle}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "dialog-title" : undefined}
        >
          {(title || closable) && (
            <div className="ui-dialog__header">
              {title && (
                <h2 id="dialog-title" className="ui-dialog__title">
                  {title}
                </h2>
              )}
              {closable && (
                <button
                  className="ui-dialog__close"
                  onClick={onClose}
                  aria-label="Close dialog"
                >
                  <FaTimes />
                </button>
              )}
            </div>
          )}
          <div className="ui-dialog__content">
            {content || children}
          </div>
          {showFooter && (footer || primaryButtonLabel || secondaryButtonLabel) && (
            <div className="ui-dialog__footer">
              {footer || (
                <div className="ui-dialog__footer-actions">
                  {secondaryButtonLabel && (
                    <Button
                      label={secondaryButtonLabel}
                      variant="outline"
                      onClick={() => {
                        onSecondaryClick?.();
                        onClose?.();
                      }}
                    />
                  )}
                  {primaryButtonLabel && (
                    <Button
                      label={primaryButtonLabel}
                      variant="primary"
                      onClick={() => {
                        onPrimaryClick?.();
                      }}
                    />
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dialog;
