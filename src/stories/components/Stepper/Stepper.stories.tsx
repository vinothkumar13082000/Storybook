import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from './Stepper';
import { FaUser, FaCreditCard, FaCheck } from 'react-icons/fa';

const steps = [
  { title: 'Personal Info', description: 'Enter your personal details' },
  { title: 'Payment', description: 'Enter payment information' },
  { title: 'Review', description: 'Review your order' },
  { title: 'Complete', description: 'Order confirmed' },
];

const meta: Meta<typeof Stepper> = {
  title: 'Components/Stepper',
  component: Stepper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Horizontal: Story = {
  args: {
    steps,
    current: 1,
  },
};

export const Vertical: Story = {
  args: {
    steps,
    current: 1,
    orientation: 'vertical',
  },
};

export const WithIcons: Story = {
  args: {
    steps: [
      { title: 'Account', description: 'Create account', icon: <FaUser /> },
      { title: 'Payment', description: 'Add payment', icon: <FaCreditCard /> },
      { title: 'Confirm', description: 'Confirm order', icon: <FaCheck /> },
    ],
    current: 2,
  },
};

export const WithError: Story = {
  args: {
    steps: [
      { title: 'Step 1', description: 'Completed' },
      { title: 'Step 2', description: 'Error occurred', error: true },
      { title: 'Step 3', description: 'Pending' },
    ],
    current: 1,
  },
};

