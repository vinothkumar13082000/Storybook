import { StoryObj, Meta } from "@storybook/react";
import Navbar from "./Navbar";
import { MemoryRouter } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "../../theme/ThemeProvider";
import { FaHome, FaUser, FaCog, FaEnvelope } from "react-icons/fa";

const meta: Meta<typeof Navbar> = {
  component: Navbar,
  title: "Components/Navbar",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {},
};

export const WithIcons: Story = {
  args: {
    options: [
      { name: "Home", route: "/home", icon: <FaHome /> },
      { name: "Profile", route: "/profile", icon: <FaUser /> },
      { name: "Settings", route: "/settings", icon: <FaCog /> },
      { name: "Contact", route: "/contact", icon: <FaEnvelope /> },
    ],
  },
};

export const CustomBrand: Story = {
  args: {
    headerTitle: "My App",
    image: "https://via.placeholder.com/40",
  },
};

export const WithoutImage: Story = {
  args: {
    image: undefined,
    headerTitle: "Brand Name",
  },
};

export const ManyItems: Story = {
  args: {
    options: [
      { name: "Home", route: "/home" },
      { name: "About", route: "/about" },
      { name: "Services", route: "/services" },
      { name: "Products", route: "/products" },
      { name: "Blog", route: "/blog" },
      { name: "Contact", route: "/contact" },
    ],
  },
};
