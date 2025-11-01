import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { FaComment } from 'react-icons/fa';

const meta: Meta<typeof Textarea> = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px', padding: '20px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter your message...',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Textarea label="Outlined" variant="outlined" placeholder="Outlined textarea" />
      <Textarea label="Filled" variant="filled" placeholder="Filled textarea" />
      <Textarea label="Standard" variant="standard" placeholder="Standard textarea" />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    label: 'Description',
    placeholder: 'Enter description',
    helperText: 'Please provide a detailed description',
    helperTextVariant: 'info',
  },
};

export const WithCharacterCount: Story = {
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself',
    maxLength: 200,
    showCount: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    placeholder: 'Enter message',
    error: 'This field is required',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Textarea label="Small" size="small" placeholder="Small textarea" />
      <Textarea label="Medium" size="medium" placeholder="Medium textarea" />
      <Textarea label="Large" size="large" placeholder="Large textarea" />
    </div>
  ),
};

export const HelperTextVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Textarea label="Default" helperText="Default helper text" helperTextVariant="default" />
      <Textarea label="Info" helperText="Info helper text" helperTextVariant="info" />
      <Textarea label="Success" helperText="Success helper text" helperTextVariant="success" />
      <Textarea label="Warning" helperText="Warning helper text" helperTextVariant="warning" />
      <Textarea label="Error" helperText="Error helper text" helperTextVariant="error" />
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Textarea label="Animated Textarea" placeholder="Watch the smooth animation" animated />
      <Textarea label="Animated Filled" variant="filled" placeholder="Filled variant animated" animated />
      <Textarea label="Animated Outlined" variant="outlined" placeholder="Outlined variant animated" animated />
      <Textarea label="Animated with Icon" startIcon={FaComment} placeholder="With icon and animation" animated />
    </div>
  ),
};

