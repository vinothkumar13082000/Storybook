import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const options = [
  { value: '1', label: 'Option 1' },
  { value: '2', label: 'Option 2' },
  { value: '3', label: 'Option 3' },
  { value: '4', label: 'Option 4' },
  { value: '5', label: 'Option 5 (Disabled)', disabled: true },
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Select Option',
    options,
    placeholder: 'Choose an option',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Select Option',
    options,
    value: '2',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <Select label="Small" size="small" options={options} />
      <Select label="Medium" size="medium" options={options} />
      <Select label="Large" size="large" options={options} />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    label: 'Select Option',
    options,
    error: 'Please select an option',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Select Option',
    options,
    helperText: 'Choose one of the available options',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Select',
    options,
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Select',
    options,
    disabled: true,
    value: '1',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Select',
    options,
    fullWidth: true,
  },
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '300px' }}>
      <Select label="Animated Select" options={options} animated />
      <Select label="Animated with Value" options={options} value="2" animated />
      <Select label="Animated Small" size="small" options={options} animated />
    </div>
  ),
};

