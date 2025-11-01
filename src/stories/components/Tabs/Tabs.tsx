import React, { useState } from 'react';
import './Tabs.scss';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
}

export interface TabsProps {
  /** Tab items */
  items: TabItem[];
  /** Default active tab */
  defaultActiveTab?: string;
  /** Active tab (controlled) */
  activeTab?: string;
  /** Change handler */
  onChange?: (tabId: string) => void;
  /** Variant */
  variant?: 'standard' | 'outlined' | 'enclosed';
  /** Size */
  size?: 'small' | 'medium' | 'large';
  /** Full width tabs */
  fullWidth?: boolean;
  /** Animated variant */
  animated?: boolean;
  /** Custom className */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultActiveTab,
  activeTab: controlledActiveTab,
  onChange,
  variant = 'standard',
  size = 'medium',
  fullWidth = false,
  animated = false,
  className = '',
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(defaultActiveTab || items[0]?.id);
  const isControlled = controlledActiveTab !== undefined;
  const activeTab = isControlled ? controlledActiveTab : internalActiveTab;

  const handleTabChange = (tabId: string) => {
    if (!isControlled) {
      setInternalActiveTab(tabId);
    }
    onChange?.(tabId);
  };

  const activeContent = items.find((item) => item.id === activeTab)?.content;

  return (
    <div className={`ui-tabs ui-tabs--${variant} ${animated ? 'ui-tabs--animated' : ''} ${className}`}>
      <div className={`ui-tabs__header ui-tabs__header--${size} ${fullWidth ? 'ui-tabs__header--full-width' : ''}`}>
        {items.map((item) => (
          <button
            key={item.id}
            className={`ui-tabs__tab ${activeTab === item.id ? 'ui-tabs__tab--active' : ''} ${item.disabled ? 'ui-tabs__tab--disabled' : ''}`}
            onClick={() => !item.disabled && handleTabChange(item.id)}
            disabled={item.disabled}
          >
            {item.icon && <span className="ui-tabs__tab-icon">{item.icon}</span>}
            <span className="ui-tabs__tab-label">{item.label}</span>
          </button>
        ))}
      </div>
      <div className="ui-tabs__content">{activeContent}</div>
    </div>
  );
};

export default Tabs;

