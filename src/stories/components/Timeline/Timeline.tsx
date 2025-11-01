import React from 'react';
import './Timeline.scss';

export interface TimelineItem {
  title: string;
  description?: string;
  time?: string;
  icon?: React.ReactNode;
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';
  dot?: React.ReactNode;
}

export interface TimelineProps {
  /** Timeline items */
  items: TimelineItem[];
  /** Mode */
  mode?: 'left' | 'right' | 'alternate';
  /** Pending status */
  pending?: boolean | React.ReactNode;
  /** Reverse order */
  reverse?: boolean;
  /** Border style */
  borderStyle?: 'solid' | 'dashed' | 'dotted';
  /** Border color */
  borderColor?: string;
  /** Hover effect */
  hoverEffect?: boolean;
  /** Custom className */
  className?: string;
}

export const Timeline: React.FC<TimelineProps> = ({
  items,
  mode = 'left',
  pending,
  reverse = false,
  borderStyle = 'solid',
  borderColor,
  hoverEffect = false,
  className = '',
}) => {
  const displayItems = reverse ? [...items].reverse() : items;

  const timelineStyle: React.CSSProperties = {
    ...(borderColor && { '--timeline-color': borderColor } as any),
    '--timeline-style': borderStyle,
  };

  return (
    <ul
      className={`ui-timeline ui-timeline--${mode} ${hoverEffect ? 'ui-timeline--hover' : ''} ${className}`}
      style={timelineStyle}
    >
      {displayItems.map((item, index) => (
        <li
          key={index}
          className={`ui-timeline__item ${hoverEffect ? 'ui-timeline__item--hover' : ''}`}
        >
          <div className={`ui-timeline__tail ${index === displayItems.length - 1 && !pending ? 'ui-timeline__tail--hidden' : ''}`} />
          <div className={`ui-timeline__head ui-timeline__head--${item.color || 'primary'}`}>
            {item.dot || item.icon || <span className="ui-timeline__dot" />}
          </div>
          <div className="ui-timeline__content">
            {item.time && (
              <div className="ui-timeline__time">{item.time}</div>
            )}
            <div className="ui-timeline__title">{item.title}</div>
            {item.description && (
              <div className="ui-timeline__description">{item.description}</div>
            )}
          </div>
        </li>
      ))}
      {pending && (
        <li className="ui-timeline__item ui-timeline__item--pending">
          <div className="ui-timeline__tail" />
          <div className="ui-timeline__head ui-timeline__head--pending">
            {typeof pending === 'boolean' ? <span className="ui-timeline__dot" /> : pending}
          </div>
          <div className="ui-timeline__content">
            <div className="ui-timeline__title">Loading...</div>
          </div>
        </li>
      )}
    </ul>
  );
};

export default Timeline;

