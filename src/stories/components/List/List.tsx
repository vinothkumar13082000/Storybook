import React from 'react';
import './List.scss';
import { IconType } from 'react-icons';

export interface ListItemProps {
  /** Item content */
  children: React.ReactNode;
  /** Start icon */
  startIcon?: IconType | React.ReactNode;
  /** End icon */
  endIcon?: IconType | React.ReactNode;
  /** Action area */
  action?: React.ReactNode;
  /** Secondary text */
  secondary?: React.ReactNode;
  /** Is disabled */
  disabled?: boolean;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  /** Border color */
  borderColor?: string;
  /** Click handler */
  onClick?: () => void;
  /** Custom className */
  className?: string;
}

export interface ListProps {
  /** List items */
  children: React.ReactNode;
  /** List variant */
  variant?: 'default' | 'outlined' | 'contained';
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted' | 'none';
  /** Border color */
  borderColor?: string;
  /** Padding */
  padding?: 'none' | 'small' | 'medium' | 'large';
  /** Custom className */
  className?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  startIcon,
  endIcon,
  action,
  secondary,
  disabled = false,
  hoverEffect = true,
  borderStyle = 'solid',
  borderColor,
  onClick,
  className = '',
}) => {
  const StartIcon = startIcon as IconType;
  const EndIcon = endIcon as IconType;

  const itemStyle: React.CSSProperties = {
    ...(borderColor && { '--list-item-border-color': borderColor } as any),
    '--list-item-border-style': borderStyle,
  };

  return (
    <li
      className={`ui-list-item ${disabled ? 'ui-list-item--disabled' : ''} ${!hoverEffect ? 'ui-list-item--no-hover' : ''} ${onClick ? 'ui-list-item--clickable' : ''} ${className}`}
      style={itemStyle}
      onClick={onClick}
    >
      {startIcon && (
        <div className="ui-list-item__start-icon">
          {typeof startIcon === 'function' ? <StartIcon /> : startIcon}
        </div>
      )}
      <div className="ui-list-item__content">
        <div className="ui-list-item__primary">{children}</div>
        {secondary && <div className="ui-list-item__secondary">{secondary}</div>}
      </div>
      {endIcon && (
        <div className="ui-list-item__end-icon">
          {typeof endIcon === 'function' ? <EndIcon /> : endIcon}
        </div>
      )}
      {action && <div className="ui-list-item__action">{action}</div>}
    </li>
  );
};

export const List: React.FC<ListProps> & { Item: React.FC<ListItemProps> } = ({
  children,
  variant = 'default',
  borderStyle = 'solid',
  borderColor,
  padding = 'medium',
  className = '',
}) => {
  const listStyle: React.CSSProperties = {
    ...(borderColor && { '--list-border-color': borderColor } as any),
    '--list-border-style': borderStyle,
  };

  return (
    <ul
      className={`ui-list ui-list--${variant} ui-list--padding-${padding} ${className}`}
      style={listStyle}
    >
      {children}
    </ul>
  );
};

List.Item = ListItem;

export default List;

