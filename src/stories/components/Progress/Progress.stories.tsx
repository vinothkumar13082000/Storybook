import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    variant: {
      control: 'select',
      options: ['linear', 'circular'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Linear: Story = {
  args: {
    value: 50,
    variant: 'linear',
  },
};

export const LinearWithLabel: Story = {
  args: {
    value: 65,
    variant: 'linear',
    showLabel: true,
  },
};

export const Circular: Story = {
  args: {
    value: 75,
    variant: 'circular',
  },
};

export const CircularWithLabel: Story = {
  args: {
    value: 75,
    variant: 'circular',
    showLabel: true,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Progress value={60} color="primary" showLabel label="Primary 60%" />
      <Progress value={60} color="secondary" showLabel label="Secondary 60%" />
      <Progress value={60} color="success" showLabel label="Success 60%" />
      <Progress value={60} color="error" showLabel label="Error 60%" />
      <Progress value={60} color="warning" showLabel label="Warning 60%" />
      <Progress value={60} color="info" showLabel label="Info 60%" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Progress value={50} size="small" showLabel />
      <Progress value={50} size="medium" showLabel />
      <Progress value={50} size="large" showLabel />
    </div>
  ),
};

export const DifferentValues: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Progress value={0} showLabel />
      <Progress value={25} showLabel />
      <Progress value={50} showLabel />
      <Progress value={75} showLabel />
      <Progress value={100} showLabel />
    </div>
  ),
};

export const Indeterminate: Story = {
  args: {
    value: 0,
    indeterminate: true,
  },
};

