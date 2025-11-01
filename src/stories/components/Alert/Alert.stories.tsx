import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully!',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'An error occurred. Please try again.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Warning: This action cannot be undone.',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'New update available. Check it out!',
  },
};

export const WithTitle: Story = {
  args: {
    type: 'success',
    title: 'Success',
    message: 'Your changes have been saved successfully.',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Alert type="success" message="Filled variant" variant="filled" />
      <Alert type="success" message="Outlined variant" variant="outlined" />
      <Alert type="success" message="Text variant" variant="text" />
    </div>
  ),
};

export const Closable: Story = {
  args: {
    type: 'info',
    message: 'This alert can be closed',
    closable: true,
    onClose: () => alert('Alert closed!'),
  },
};

export const WithCustomBorder: Story = {
  args: {
    type: 'warning',
    message: 'Custom border style',
    variant: 'outlined',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: '#ffc107',
  },
};

export const WithoutIcon: Story = {
  args: {
    type: 'info',
    message: 'Alert without icon',
    showIcon: false,
  },
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '600px' }}>
      <Alert type="success" message="Animated success alert" animated />
      <Alert type="error" message="Animated error alert" animated />
      <Alert type="warning" message="Animated warning alert" animated />
      <Alert type="info" message="Animated info alert" animated />
    </div>
  ),
};

