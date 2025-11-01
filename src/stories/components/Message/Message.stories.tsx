import type { Meta, StoryObj } from '@storybook/react';
import { Message } from './Message';
import { useState } from 'react';

const meta: Meta<typeof Message> = {
  title: 'Components/Message',
  component: Message,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Success: Story = {
  args: {
    type: 'success',
    content: 'Operation completed successfully!',
    closable: true,
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    content: 'An error occurred. Please try again.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    content: 'Warning: This action cannot be undone.',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    content: 'New update available. Check it out!',
  },
};

export const WithTitle: Story = {
  args: {
    type: 'success',
    title: 'Success',
    content: 'Your changes have been saved successfully.',
  },
};

export const Closable: Story = {
  args: {
    type: 'info',
    content: 'This message can be closed',
    closable: true,
    onClose: () => alert('Message closed!'),
  },
};

export const AutoClose: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Message
        type="info"
        content="This message will auto-close in 3 seconds"
        duration={3000}
        onClose={() => setVisible(false)}
      />
    ) : (
      <div>Message closed</div>
    );
  },
};

