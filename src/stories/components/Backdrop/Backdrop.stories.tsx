import type { Meta, StoryObj } from '@storybook/react';
import { Backdrop } from './Backdrop';
import { useState } from 'react';
import { Button } from '../Button/Button';

const meta: Meta<typeof Backdrop> = {
  title: 'Components/Backdrop',
  component: Backdrop,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Backdrop>;

export const Default: Story = {
  args: {
    visible: true,
  },
};

export const WithBlur: Story = {
  args: {
    visible: true,
    blur: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [visible, setVisible] = useState(false);
    return (
      <div>
        <Button label="Show Backdrop" onClick={() => setVisible(true)} />
        <Backdrop visible={visible} onClick={() => setVisible(false)} />
      </div>
    );
  },
};

export const CustomColor: Story = {
  args: {
    visible: true,
    backgroundColor: '#2196f3',
    opacity: 0.3,
  },
};

