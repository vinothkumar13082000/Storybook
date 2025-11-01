import React, { useState } from "react";
import "./Sidebar.scss";
import {
  FaChevronLeft,
  FaChevronRight,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export interface SidebarMenuItem {
  label: string;
  icon?: React.ReactNode;
  link?: string;
  badge?: string | number;
  active?: boolean;
  disabled?: boolean;
  /** Sub-menu items */
  subMenu?: SidebarMenuItem[];
}

export interface SidebarProps {
  /** Menu items */
  menuItems: SidebarMenuItem[];
  /** Logo icon */
  logoIcon?: React.ReactNode;
  /** Logo text */
  logo?: React.ReactNode;
  /** Footer content */
  footerContent?: React.ReactNode;
  /** Item click handler */
  onItemClick?: (label: string, item: SidebarMenuItem) => void;
  /** Default collapsed state */
  defaultCollapsed?: boolean;
  /** Show border */
  bordered?: boolean;
  /** Border color */
  borderColor?: string;
  /** Background color */
  backgroundColor?: string;
  /** Width when expanded */
  width?: number | string;
  /** Width when collapsed */
  collapsedWidth?: number | string;
  /** Hover effect on items */
  hoverEffect?: boolean;
  /** Custom className */
  className?: string;
  /** Custom styles */
  style?: React.CSSProperties;
}

const Sidebar: React.FC<SidebarProps> = ({
  menuItems,
  logo,
  footerContent,
  onItemClick,
  logoIcon,
  defaultCollapsed = false,
  bordered = true,
  borderColor,
  backgroundColor,
  width = 240,
  collapsedWidth = 70,
  hoverEffect = true,
  className = "",
  style,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleItemClick = (item: SidebarMenuItem, event?: React.MouseEvent) => {
    if (item.disabled) return;

    // If item has sub-menu, toggle expand/collapse
    if (item.subMenu && item.subMenu.length > 0) {
      event?.stopPropagation();
      setExpandedItems((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(item.label)) {
          newSet.delete(item.label);
        } else {
          newSet.add(item.label);
        }
        return newSet;
      });
    } else {
      setActiveItem(item.label);
      onItemClick?.(item.label, item);
    }
  };

  const handleSubMenuItemClick = (
    parentLabel: string,
    item: SidebarMenuItem
  ) => {
    if (item.disabled) return;
    setActiveItem(item.label);
    // Ensure parent is expanded when sub-item is clicked
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (!newSet.has(parentLabel)) {
        newSet.add(parentLabel);
      }
      return newSet;
    });
    onItemClick?.(item.label, item);
  };

  const isItemExpanded = (item: SidebarMenuItem) => {
    return expandedItems.has(item.label);
  };

  const isItemActive = (item: SidebarMenuItem) => {
    if (item.active !== undefined) {
      return item.active;
    }
    if (activeItem === item.label) {
      return true;
    }
    // Check if any sub-menu item is active
    if (item.subMenu && item.subMenu.length > 0) {
      return item.subMenu.some((subItem) => activeItem === subItem.label);
    }
    return false;
  };

  const sidebarStyle: React.CSSProperties & {
    "--sidebar-bg"?: string;
    "--sidebar-border"?: string;
  } = {
    ...style,
    ...(backgroundColor && { "--sidebar-bg": backgroundColor }),
    ...(borderColor && { "--sidebar-border": borderColor }),
    width: isCollapsed ? collapsedWidth : width,
  };

  return (
    <aside
      className={`ui-sidebar ${isCollapsed ? "ui-sidebar--collapsed" : ""} ${
        !bordered ? "ui-sidebar--no-border" : ""
      } ${!hoverEffect ? "ui-sidebar--no-hover" : ""} ${className}`}
      style={sidebarStyle}
    >
      <div className="ui-sidebar__header">
        {!isCollapsed ? (
          <>
            <div className="ui-sidebar__brand">
              {logoIcon && (
                <span className="ui-sidebar__logo-icon">{logoIcon}</span>
              )}
              {logo && <span className="ui-sidebar__logo-text">{logo}</span>}
            </div>
            <button
              onClick={handleCollapse}
              className="ui-sidebar__toggle"
              aria-label="Collapse sidebar"
              title="Collapse sidebar"
            >
              <FaChevronLeft />
            </button>
          </>
        ) : (
          <>
            <div className="ui-sidebar__brand">
              {logoIcon && (
                <span className="ui-sidebar__logo-icon">{logoIcon}</span>
              )}
            </div>
            <button
              onClick={handleCollapse}
              className="ui-sidebar__toggle ui-sidebar__toggle--collapsed"
              aria-label="Expand sidebar"
              title="Expand sidebar"
            >
              <FaChevronRight />
            </button>
          </>
        )}
      </div>

      <nav className="ui-sidebar__menu">
        {menuItems.map((item, index) => {
          const active = isItemActive(item);
          const hasSubMenu = item.subMenu && item.subMenu.length > 0;
          const isExpanded = hasSubMenu && isItemExpanded(item);

          return (
            <div key={index} className="ui-sidebar__menu-item-wrapper">
              <button
                className={`ui-sidebar__menu-item ${
                  active ? "ui-sidebar__menu-item--active" : ""
                } ${item.disabled ? "ui-sidebar__menu-item--disabled" : ""} ${
                  hasSubMenu ? "ui-sidebar__menu-item--has-submenu" : ""
                } ${isExpanded ? "ui-sidebar__menu-item--expanded" : ""}`}
                onClick={(e) => handleItemClick(item, e)}
                disabled={item.disabled}
                title={isCollapsed ? item.label : undefined}
              >
                {item.icon && (
                  <span className="ui-sidebar__menu-icon">{item.icon}</span>
                )}
                {!isCollapsed && (
                  <>
                    <span className="ui-sidebar__menu-label">{item.label}</span>
                    {item.badge !== undefined && (
                      <span className="ui-sidebar__menu-badge">
                        {item.badge}
                      </span>
                    )}
                    {hasSubMenu && (
                      <span className="ui-sidebar__menu-arrow">
                        {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
                      </span>
                    )}
                  </>
                )}
              </button>
              {hasSubMenu && !isCollapsed && (
                <div
                  className={`ui-sidebar__submenu ${
                    isExpanded ? "ui-sidebar__submenu--expanded" : ""
                  }`}
                >
                  {item.subMenu!.map((subItem, subIndex) => {
                    const subActive = isItemActive(subItem);
                    return (
                      <button
                        key={subIndex}
                        className={`ui-sidebar__submenu-item ${
                          subActive ? "ui-sidebar__submenu-item--active" : ""
                        } ${
                          subItem.disabled
                            ? "ui-sidebar__submenu-item--disabled"
                            : ""
                        }`}
                        onClick={() =>
                          handleSubMenuItemClick(item.label, subItem)
                        }
                        disabled={subItem.disabled}
                      >
                        {subItem.icon && (
                          <span className="ui-sidebar__submenu-icon">
                            {subItem.icon}
                          </span>
                        )}
                        <span className="ui-sidebar__submenu-label">
                          {subItem.label}
                        </span>
                        {subItem.badge !== undefined && (
                          <span className="ui-sidebar__submenu-badge">
                            {subItem.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {footerContent && (
        <div className="ui-sidebar__footer">{footerContent}</div>
      )}
    </aside>
  );
};

export default Sidebar;
