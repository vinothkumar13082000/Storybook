import type { Meta, StoryObj } from '@storybook/react';
import { TimePicker } from './TimePicker';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof TimePicker> = {
  title: 'Components/TimePicker',
  component: TimePicker,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '20px', maxWidth: '400px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    format: {
      control: 'select',
      options: ['12h', '24h'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TimePicker>;

export const Default: Story = {
  args: {
    label: 'Select Time',
    placeholder: 'Choose a time',
  },
};

export const TwelveHour: Story = {
  args: {
    label: '12 Hour Format',
    format: '12h',
    placeholder: 'Select time',
  },
};

export const TwentyFourHour: Story = {
  args: {
    label: '24 Hour Format',
    format: '24h',
    placeholder: 'Select time',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TimePicker label="Outlined" variant="outlined" placeholder="Outlined time picker" />
      <TimePicker label="Filled" variant="filled" placeholder="Filled time picker" />
      <TimePicker label="Standard" variant="standard" placeholder="Standard time picker" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TimePicker label="Small" size="small" placeholder="Small size" />
      <TimePicker label="Medium" size="medium" placeholder="Medium size" />
      <TimePicker label="Large" size="large" placeholder="Large size" />
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <TimePicker label="Animated TimePicker" animated placeholder="Animated time picker" />
    </div>
  ),
};

