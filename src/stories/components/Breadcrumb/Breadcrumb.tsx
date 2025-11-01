import React from 'react';
import './Breadcrumb.scss';
import { FaChevronRight, FaHome } from 'react-icons/fa';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

export interface BreadcrumbProps {
  /** Breadcrumb items */
  items: BreadcrumbItem[];
  /** Separator */
  separator?: React.ReactNode;
  /** Custom className */
  className?: string;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items,
  separator,
  className = '',
}) => {
  const defaultSeparator = <FaChevronRight />;

  return (
    <nav className={`ui-breadcrumb ${className}`} aria-label="Breadcrumb">
      <ol className="ui-breadcrumb__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="ui-breadcrumb__item">
              {isLast ? (
                <span className="ui-breadcrumb__current">
                  {item.icon && <span className="ui-breadcrumb__icon">{item.icon}</span>}
                  {item.label}
                </span>
              ) : (
                <a href={item.href || '#'} className="ui-breadcrumb__link">
                  {item.icon && <span className="ui-breadcrumb__icon">{item.icon}</span>}
                  {item.label}
                </a>
              )}
              {!isLast && (
                <span className="ui-breadcrumb__separator" aria-hidden="true">
                  {separator || defaultSeparator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;

