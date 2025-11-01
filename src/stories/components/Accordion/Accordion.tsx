import React, { useState } from 'react';
import './Accordion.scss';
import { FaChevronDown } from 'react-icons/fa';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface AccordionProps {
  /** Accordion items */
  items: AccordionItem[];
  /** Allow multiple items open */
  allowMultiple?: boolean;
  /** Default expanded items */
  defaultExpanded?: string[];
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultExpanded = [],
  animated = false,
  className = '',
}) => {
  const [expandedItems, setExpandedItems] = useState<string[]>(defaultExpanded);

  const toggleItem = (id: string) => {
    setExpandedItems((prev) => {
      if (allowMultiple) {
        return prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      } else {
        return prev.includes(id) ? [] : [id];
      }
    });
  };

  return (
    <div className={`ui-accordion ${animated ? 'ui-accordion--animated' : ''} ${className}`}>
      {items.map((item) => {
        const isExpanded = expandedItems.includes(item.id);
        return (
          <div key={item.id} className={`ui-accordion-item ${isExpanded ? 'ui-accordion-item--expanded' : ''} ${item.disabled ? 'ui-accordion-item--disabled' : ''}`}>
            <button
              className="ui-accordion-item__header"
              onClick={() => !item.disabled && toggleItem(item.id)}
              disabled={item.disabled}
            >
              <span className="ui-accordion-item__title">{item.title}</span>
              <FaChevronDown className={`ui-accordion-item__icon ${isExpanded ? 'ui-accordion-item__icon--expanded' : ''}`} />
            </button>
            {isExpanded && (
              <div className="ui-accordion-item__content">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

