import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Sidebar from "./Sidebar";
import { FaHome, FaShoppingCart, FaUser, FaCogs, FaChartBar, FaBell, FaEnvelope } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ThemeProvider } from "../../theme/ThemeProvider";

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ display: 'flex', height: '100vh' }}>
          <Story />
          <div style={{ flex: 1, padding: '20px', background: 'var(--bg-primary)' }}>
            <h2>Main Content Area</h2>
            <p>This is the main content that would appear next to the sidebar.</p>
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Sidebar>;

export const Default: Story = {
  args: {
    menuItems: [
      { label: "Home", icon: <FaHome /> },
      { label: "Shop", icon: <FaShoppingCart /> },
      { label: "Profile", icon: <FaUser /> },
      { label: "Settings", icon: <FaCogs /> },
    ],
    logo: <div style={{ fontSize: "20px", fontWeight: 600 }}>E-Shop</div>,
    footerContent: <div style={{ fontSize: "12px" }}>© 2024 E-Shop</div>,
    logoIcon: <MdOutlineShoppingCart />,
  },
};

export const Collapsed: Story = {
  args: {
    menuItems: [
      { label: "Home", icon: <FaHome /> },
      { label: "Shop", icon: <FaShoppingCart /> },
      { label: "Profile", icon: <FaUser /> },
      { label: "Settings", icon: <FaCogs /> },
    ],
    logo: <div style={{ fontSize: "20px", fontWeight: 600 }}>E-Shop</div>,
    footerContent: <div style={{ fontSize: "12px" }}>© 2024 E-Shop</div>,
    logoIcon: <MdOutlineShoppingCart />,
    defaultCollapsed: true,
  },
};

export const WithBadges: Story = {
  args: {
    menuItems: [
      { label: "Dashboard", icon: <FaHome />, active: true },
      { label: "Messages", icon: <FaEnvelope />, badge: 5 },
      { label: "Notifications", icon: <FaBell />, badge: 12 },
      { label: "Analytics", icon: <FaChartBar /> },
      { label: "Settings", icon: <FaCogs /> },
    ],
    logo: <div style={{ fontSize: "20px", fontWeight: 600 }}>My App</div>,
    logoIcon: <FaHome />,
  },
};

export const WithDisabledItems: Story = {
  args: {
    menuItems: [
      { label: "Home", icon: <FaHome />, active: true },
      { label: "Shop", icon: <FaShoppingCart /> },
      { label: "Profile", icon: <FaUser />, disabled: true },
      { label: "Settings", icon: <FaCogs /> },
    ],
    logo: <div style={{ fontSize: "20px", fontWeight: 600 }}>E-Shop</div>,
    logoIcon: <MdOutlineShoppingCart />,
  },
};

export const LongMenu: Story = {
  args: {
    menuItems: [
      { label: "Dashboard", icon: <FaHome />, active: true },
      { label: "Products", icon: <FaShoppingCart /> },
      { label: "Orders", icon: <FaShoppingCart />, badge: 3 },
      { label: "Customers", icon: <FaUser /> },
      { label: "Analytics", icon: <FaChartBar /> },
      { label: "Reports", icon: <FaChartBar /> },
      { label: "Settings", icon: <FaCogs /> },
      { label: "Help", icon: <FaBell /> },
    ],
    logo: <div style={{ fontSize: "20px", fontWeight: 600 }}>Admin Panel</div>,
    footerContent: <div style={{ fontSize: "12px" }}>Version 2.0.1</div>,
    logoIcon: <FaChartBar />,
  },
};

export const WithSubMenus: Story = {
  args: {
    menuItems: [
      { 
        label: "Dashboard", 
        icon: <FaHome />, 
        active: true 
      },
      { 
        label: "Products", 
        icon: <FaShoppingCart />,
        subMenu: [
          { label: "All Products", icon: <FaShoppingCart /> },
          { label: "Add New", icon: <FaShoppingCart /> },
          { label: "Categories", icon: <FaShoppingCart /> },
          { label: "Tags", icon: <FaShoppingCart /> },
        ]
      },
      { 
        label: "Orders", 
        icon: <FaShoppingCart />, 
        badge: 3,
        subMenu: [
          { label: "All Orders", icon: <FaShoppingCart /> },
          { label: "Pending", icon: <FaShoppingCart />, badge: 3 },
          { label: "Completed", icon: <FaShoppingCart /> },
          { label: "Cancelled", icon: <FaShoppingCart /> },
        ]
      },
      { 
        label: "Customers", 
        icon: <FaUser />,
        subMenu: [
          { label: "All Customers", icon: <FaUser /> },
          { label: "Add Customer", icon: <FaUser /> },
          { label: "Groups", icon: <FaUser /> },
        ]
      },
      { 
        label: "Analytics", 
        icon: <FaChartBar />,
        subMenu: [
          { label: "Overview", icon: <FaChartBar /> },
          { label: "Reports", icon: <FaChartBar /> },
          { label: "Exports", icon: <FaChartBar /> },
        ]
      },
      { 
        label: "Settings", 
        icon: <FaCogs />,
        subMenu: [
          { label: "General", icon: <FaCogs /> },
          { label: "Notifications", icon: <FaBell /> },
          { label: "Privacy", icon: <FaCogs /> },
          { label: "Security", icon: <FaCogs /> },
        ]
      },
      { 
        label: "Help", 
        icon: <FaBell /> 
      },
    ],
    logo: <div style={{ fontSize: "20px", fontWeight: 600 }}>Admin Panel</div>,
    footerContent: <div style={{ fontSize: "12px" }}>Version 2.0.1</div>,
    logoIcon: <FaChartBar />,
  },
};
