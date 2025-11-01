import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
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
    labelPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Toggle switch',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked switch',
    checked: true,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch label="Primary" checked color="primary" />
      <Switch label="Secondary" checked color="secondary" />
      <Switch label="Success" checked color="success" />
      <Switch label="Error" checked color="error" />
      <Switch label="Warning" checked color="warning" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch label="Small switch" size="small" />
      <Switch label="Medium switch" size="medium" />
      <Switch label="Large switch" size="large" />
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch label="Label on right" labelPosition="right" />
      <Switch label="Label on left" labelPosition="left" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled switch',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    checked: true,
    disabled: true,
  },
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Switch label="Animated Primary" animated color="primary" checked />
      <Switch label="Animated Success" animated color="success" />
      <Switch label="Animated Error" animated color="error" checked />
      <Switch label="Animated Warning" animated color="warning" />
    </div>
  ),
};

