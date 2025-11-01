import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import { FaUser } from 'react-icons/fa';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'xlarge'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'default'],
    },
    variant: {
      control: 'select',
      options: ['circular', 'rounded', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    initials: 'JD',
  },
};

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'John Doe',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <FaUser />,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar initials="S" size="small" />
      <Avatar initials="M" size="medium" />
      <Avatar initials="L" size="large" />
      <Avatar initials="XL" size="xlarge" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar initials="C" variant="circular" />
      <Avatar initials="R" variant="rounded" />
      <Avatar initials="S" variant="square" />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
      <Avatar initials="P" color="primary" />
      <Avatar initials="S" color="secondary" />
      <Avatar initials="S" color="success" />
      <Avatar initials="E" color="error" />
      <Avatar initials="W" color="warning" />
      <Avatar initials="I" color="info" />
      <Avatar initials="D" color="default" />
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    initials: 'JD',
    onClick: () => alert('Avatar clicked!'),
  },
};

export const AvatarGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '-8px', alignItems: 'center' }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" />
      <Avatar src="https://i.pravatar.cc/150?img=2" />
      <Avatar src="https://i.pravatar.cc/150?img=3" />
      <Avatar src="https://i.pravatar.cc/150?img=4" />
      <Avatar initials="+5" color="default" />
    </div>
  ),
};

