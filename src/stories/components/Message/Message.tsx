import React from 'react';
import './Message.scss';
import { FaTimes, FaCheckCircle, FaExclamationCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';
import { IconType } from 'react-icons';

export interface MessageProps {
  /** Message content */
  content: string;
  /** Message title */
  title?: string;
  /** Message type */
  type?: 'success' | 'error' | 'warning' | 'info' | 'loading';
  /** Show close button */
  closable?: boolean;
  /** Close handler */
  onClose?: () => void;
  /** Show icon */
  showIcon?: boolean;
  /** Custom icon */
  icon?: IconType | React.ReactNode;
  /** Duration in ms (0 = no auto close) */
  duration?: number;
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  /** Border width */
  borderWidth?: number;
  /** Border color */
  borderColor?: string;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Custom className */
  className?: string;
}

const defaultIcons = {
  success: FaCheckCircle,
  error: FaExclamationCircle,
  warning: FaExclamationTriangle,
  info: FaInfoCircle,
  loading: FaInfoCircle,
};

export const Message: React.FC<MessageProps> = ({
  content,
  title,
  type = 'info',
  closable = true,
  onClose,
  showIcon = true,
  icon,
  duration = 3000,
  borderStyle = 'solid',
  borderWidth = 1,
  borderColor,
  hoverEffect = true,
  className = '',
}) => {
  const Icon = icon || (showIcon ? defaultIcons[type] : null);
  const IconComponent = Icon as IconType;

  React.useEffect(() => {
    if (duration > 0 && onClose) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const messageStyle: React.CSSProperties = {
    ...(borderColor && { '--message-border-color': borderColor } as any),
    '--message-border-width': `${borderWidth}px`,
    '--message-border-style': borderStyle,
  };

  return (
    <div
      className={`ui-message ui-message--${type} ${hoverEffect ? 'ui-message--hover' : ''} ${className}`}
      style={messageStyle}
      role="alert"
    >
      {Icon && (
        <span className="ui-message__icon">
          {typeof Icon === 'function' ? <IconComponent /> : Icon}
        </span>
      )}
      <div className="ui-message__content">
        {title && <div className="ui-message__title">{title}</div>}
        <div className="ui-message__text">{content}</div>
      </div>
      {closable && (
        <button
          className="ui-message__close"
          onClick={onClose}
          aria-label="Close message"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default Message;

