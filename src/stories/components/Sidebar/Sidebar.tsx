// Sidebar.tsx
import React, { useState } from "react";
import "./Sidebar.scss";
import { FaLessThan } from "react-icons/fa";
import { FaGreaterThan } from "react-icons/fa";

export interface SidebarMenuItem {
  label: string;
  icon?: React.ReactNode;
  link?: string;
}

type varient = "dark" | "light";

export interface SidebarProps {
  menuItems: SidebarMenuItem[];
  logoIcon?: React.ReactNode;
  logo?: React.ReactNode;
  footerContent?: React.ReactNode;
  onItemClick?: (label: string) => void;
  varient?: string;
}

const Sidebar: React.FC<SidebarProps & { variant?: "dark" | "light" }> = ({
  menuItems,
  logo,
  footerContent,
  onItemClick,
  logoIcon,
  variant = "dark", // default to dark mode
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`sidebar ${isCollapsed ? "collapsed" : ""} ${variant}`}>
      <div className="sidebar__logo">
        <span>{logoIcon}</span>
        <span className="logo-text">{logo}</span>
      </div>
      <button onClick={handleCollapse} className="sidebar__toggle">
        {isCollapsed ? <FaGreaterThan /> : <FaLessThan />}
      </button>

      <div className="sidebar__menu">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="sidebar__menu-item"
            onClick={() => onItemClick && onItemClick(item.label)}
          >
            {item.icon && (
              <span className="sidebar__menu-icon">{item.icon}</span>
            )}
            <span className="sidebar__menu-label">{item.label}</span>
          </div>
        ))}
      </div>
      <div className="sidebar__footer">{footerContent}</div>
    </div>
  );
};

export default Sidebar;
