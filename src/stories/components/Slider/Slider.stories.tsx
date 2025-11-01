import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { useState } from 'react';

const meta: Meta<typeof Slider> = {
  title: 'Components/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
  },
};

export const WithValue: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    showValue: true,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <Slider label="Primary" value={50} color="primary" showValue />
      <Slider label="Secondary" value={50} color="secondary" showValue />
      <Slider label="Success" value={50} color="success" showValue />
      <Slider label="Error" value={50} color="error" showValue />
      <Slider label="Warning" value={50} color="warning" showValue />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', padding: '20px' }}>
      <Slider label="Small" size="small" value={50} />
      <Slider label="Medium" size="medium" value={50} />
      <Slider label="Large" size="large" value={50} />
    </div>
  ),
};

export const WithMarks: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    marks: true,
  },
};

export const CustomRange: Story = {
  args: {
    min: 10,
    max: 90,
    step: 5,
    value: 50,
    showValue: true,
  },
};

export const Disabled: Story = {
  args: {
    min: 0,
    max: 100,
    value: 50,
    disabled: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <div style={{ padding: '20px' }}>
        <Slider value={value} onChange={setValue} showValue />
        <p style={{ marginTop: '20px' }}>Value: {value}</p>
      </div>
    );
  },
};

