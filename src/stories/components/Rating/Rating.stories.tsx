import type { Meta, StoryObj } from '@storybook/react';
import { Rating } from './Rating';

const meta: Meta<typeof Rating> = {
  title: 'Components/Rating',
  component: Rating,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Rating>;

export const Default: Story = {
  args: {
    defaultValue: 3,
  },
};

export const Readonly: Story = {
  args: {
    value: 4,
    readonly: true,
  },
};

export const WithHalfStars: Story = {
  args: {
    defaultValue: 3.5,
    allowHalf: true,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Rating value={4} color="primary" />
      <Rating value={4} color="secondary" />
      <Rating value={4} color="success" />
      <Rating value={4} color="warning" />
      <Rating value={4} color="error" />
      <Rating value={4} color="info" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Rating value={4} size="small" />
      <Rating value={4} size="medium" />
      <Rating value={4} size="large" />
      <Rating value={4} size={40} />
    </div>
  ),
};

export const WithLabels: Story = {
  args: {
    defaultValue: 3,
    showLabels: true,
    labels: ['Terrible', 'Poor', 'Fair', 'Good', 'Excellent'],
  },
};

export const CustomMax: Story = {
  args: {
    defaultValue: 7,
    max: 10,
  },
};

