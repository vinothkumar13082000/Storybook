// Sidebar.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Sidebar, { SidebarProps } from "./Sidebar";
import { FaHome, FaShoppingCart, FaUser, FaCogs } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";

const meta: Meta<typeof Sidebar> = {
  title: "Sidebar",
  component: Sidebar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menuItems: [
      { label: "Home", icon: <FaHome /> },
      { label: "Shop", icon: <FaShoppingCart /> },
      { label: "Profile", icon: <FaUser /> },
      { label: "Settings", icon: <FaCogs /> },
    ],
    logo: <div style={{ fontSize: "20px" }}>E-Shop</div>,
    footerContent: <div>© 2024 E-Shop</div>,
    logoIcon: <MdOutlineShoppingCart />,
    variant: "dark",
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
    logo: <div style={{ fontSize: "20px" }}>E-Shop</div>,
    footerContent: <div>© 2024 E-Shop</div>,
    onItemClick: (label: string) => console.log(`${label} clicked`),
    logoIcon: <MdOutlineShoppingCart />,
    variant: "light",
  },
};
