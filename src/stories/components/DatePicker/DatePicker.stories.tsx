import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof DatePicker> = {
  title: 'Components/DatePicker',
  component: DatePicker,
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
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  args: {
    label: 'Select Date',
    placeholder: 'Choose a date',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <DatePicker label="Outlined" variant="outlined" placeholder="Outlined date picker" />
      <DatePicker label="Filled" variant="filled" placeholder="Filled date picker" />
      <DatePicker label="Standard" variant="standard" placeholder="Standard date picker" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <DatePicker label="Small" size="small" placeholder="Small size" />
      <DatePicker label="Medium" size="medium" placeholder="Medium size" />
      <DatePicker label="Large" size="large" placeholder="Large size" />
    </div>
  ),
};

export const WithMinMax: Story = {
  args: {
    label: 'Date with Range',
    placeholder: 'Select date',
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
  },
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <DatePicker label="Animated DatePicker" animated placeholder="Animated date picker" />
    </div>
  ),
};

