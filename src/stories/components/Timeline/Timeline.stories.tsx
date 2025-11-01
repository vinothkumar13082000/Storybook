import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from './Timeline';
import { FaCheck, FaTimes, FaClock } from 'react-icons/fa';

const items = [
  {
    title: 'Order Placed',
    description: 'Your order has been placed successfully',
    time: '2024-01-15 10:00',
    color: 'success',
    icon: <FaCheck />,
  },
  {
    title: 'Order Processing',
    description: 'We are preparing your order',
    time: '2024-01-15 11:00',
    color: 'primary',
    icon: <FaClock />,
  },
  {
    title: 'Shipped',
    description: 'Your order has been shipped',
    time: '2024-01-16 14:00',
    color: 'info',
  },
  {
    title: 'Delivered',
    description: 'Order delivered successfully',
    time: '2024-01-17 09:00',
    color: 'success',
    icon: <FaCheck />,
  },
];

const meta: Meta<typeof Timeline> = {
  title: 'Components/Timeline',
  component: Timeline,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Timeline>;

export const Default: Story = {
  args: {
    items,
  },
};

export const RightMode: Story = {
  args: {
    items,
    mode: 'right',
  },
};

export const AlternateMode: Story = {
  args: {
    items,
    mode: 'alternate',
  },
};

export const WithPending: Story = {
  args: {
    items,
    pending: true,
  },
};

export const WithError: Story = {
  args: {
    items: [
      ...items.slice(0, 2),
      {
        title: 'Delivery Failed',
        description: 'Unable to deliver',
        time: '2024-01-16 14:00',
        color: 'error',
        icon: <FaTimes />,
      },
    ],
  },
};

