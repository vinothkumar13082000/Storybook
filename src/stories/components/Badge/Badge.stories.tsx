import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';
import { FaBell, FaShoppingCart } from 'react-icons/fa';
import { Button } from '../Button/Button';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info'],
    },
    variant: {
      control: 'select',
      options: ['standard', 'dot'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Standard: Story = {
  args: {
    content: 5,
    children: <Button label="Notifications" />,
  },
};

export const Dot: Story = {
  args: {
    variant: 'dot',
    children: <Button label="Messages" />,
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Badge content={5} color="primary"><Button label="Primary" /></Badge>
      <Badge content={5} color="secondary"><Button label="Secondary" /></Badge>
      <Badge content={5} color="success"><Button label="Success" /></Badge>
      <Badge content={5} color="error"><Button label="Error" /></Badge>
      <Badge content={5} color="warning"><Button label="Warning" /></Badge>
      <Badge content={5} color="info"><Button label="Info" /></Badge>
    </div>
  ),
};

export const WithMax: Story = {
  args: {
    content: 150,
    max: 99,
    children: <Button label="Notifications" />,
  },
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
      <Badge content={3}>
        <FaBell size={24} />
      </Badge>
      <Badge content={12}>
        <FaShoppingCart size={24} />
      </Badge>
      <Badge variant="dot">
        <FaBell size={24} />
      </Badge>
    </div>
  ),
};

export const AllPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
      <Badge content={5} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <div style={{ width: 40, height: 40, background: '#e0e0e0', borderRadius: '8px' }} />
      </Badge>
      <Badge content={5} anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
        <div style={{ width: 40, height: 40, background: '#e0e0e0', borderRadius: '8px' }} />
      </Badge>
      <Badge content={5} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <div style={{ width: 40, height: 40, background: '#e0e0e0', borderRadius: '8px' }} />
      </Badge>
      <Badge content={5} anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
        <div style={{ width: 40, height: 40, background: '#e0e0e0', borderRadius: '8px' }} />
      </Badge>
    </div>
  ),
};

export const ShowZero: Story = {
  args: {
    content: 0,
    showZero: true,
    children: <Button label="Notifications" />,
  },
};

export const HideZero: Story = {
  args: {
    content: 0,
    showZero: false,
    children: <Button label="Notifications" />,
  },
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <Badge content={5} animated><Button label="Primary" /></Badge>
      <Badge content={12} color="error" animated><Button label="Error" /></Badge>
      <Badge content={99} color="success" animated><Button label="Success" /></Badge>
      <Badge variant="dot" color="warning" animated><Button label="Warning" /></Badge>
    </div>
  ),
};

