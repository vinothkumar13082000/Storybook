import React from 'react';
import './Alert.scss';
import { FaTimes, FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface AlertProps {
  /** Alert message */
  message: string;
  /** Alert title */
  title?: string;
  /** Alert type */
  type?: 'success' | 'error' | 'warning' | 'info';
  /** Show close button */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Show icon */
  showIcon?: boolean;
  /** Custom icon */
  icon?: IconType | React.ReactNode;
  /** Variant */
  variant?: 'filled' | 'outlined' | 'text';
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
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

const defaultIcons = {
  success: FaCheckCircle,
  error: FaExclamationCircle,
  warning: FaExclamationTriangle,
  info: FaInfoCircle,
};

export const Alert: React.FC<AlertProps> = ({
  message,
  title,
  type = 'info',
  closable = false,
  onClose,
  showIcon = true,
  icon,
  variant = 'filled',
  borderStyle = 'solid',
  borderWidth = 1,
  borderColor,
  hoverEffect = false,
  animated = false,
  className = '',
  style,
}) => {
  const Icon = icon || (showIcon ? defaultIcons[type] : null);
  const IconComponent = Icon as IconType;

  const alertStyle: React.CSSProperties = {
    ...style,
    ...(borderColor && { '--alert-border-color': borderColor } as any),
    '--alert-border-width': `${borderWidth}px`,
    '--alert-border-style': borderStyle,
  };

  return (
    <div
      className={`ui-alert ui-alert--${type} ui-alert--${variant} ${hoverEffect ? 'ui-alert--hover' : ''} ${animated ? 'ui-alert--animated' : ''} ${className}`}
      style={alertStyle}
      role="alert"
    >
      {Icon && (
        <span className="ui-alert__icon">
          {typeof Icon === 'function' ? <IconComponent /> : Icon}
        </span>
      )}
      <div className="ui-alert__content">
        {title && <div className="ui-alert__title">{title}</div>}
        <div className="ui-alert__message">{message}</div>
      </div>
      {closable && (
        <button
          className="ui-alert__close"
          onClick={onClose}
          aria-label="Close alert"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Alert;

