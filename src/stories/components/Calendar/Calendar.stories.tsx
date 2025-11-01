import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from './Calendar';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Calendar> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div style={{ padding: '20px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {},
};

export const WithValue: Story = {
  args: {
    value: new Date(2024, 5, 15),
  },
};

export const MultipleSelection: Story = {
  args: {
    multiple: true,
  },
};

export const WithMinMax: Story = {
  args: {
    minDate: new Date(2024, 0, 1),
    maxDate: new Date(2024, 11, 31),
  },
};

export const WithoutNavigation: Story = {
  args: {
    showNavigation: false,
  },
};

export const WithoutToday: Story = {
  args: {
    showToday: false,
  },
};

export const Animated: Story = {
  args: {
    animated: true,
  },
};

