import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';
import { FaHome } from 'react-icons/fa';

const items = [
  { label: 'Home', href: '#', icon: <FaHome /> },
  { label: 'Components', href: '#' },
  { label: 'Breadcrumb', href: '#' },
  { label: 'Current Page' },
];

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items,
  },
};

export const Simple: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'About', href: '#' },
      { label: 'Contact' },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '#', icon: <FaHome /> },
      { label: 'Products', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Laptops' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items,
    separator: <span>/</span>,
  },
};

