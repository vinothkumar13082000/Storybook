import type { Meta, StoryObj } from '@storybook/react';
import { Chip } from './Chip';
import { FaUser, FaTag } from 'react-icons/fa';

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'default'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    variant: {
      control: 'select',
      options: ['filled', 'outlined'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: {
    label: 'Chip',
  },
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Default" color="default" />
      <Chip label="Primary" color="primary" />
      <Chip label="Secondary" color="secondary" />
      <Chip label="Success" color="success" />
      <Chip label="Error" color="error" />
      <Chip label="Warning" color="warning" />
      <Chip label="Info" color="info" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
      <Chip label="Filled" variant="filled" color="primary" />
      <Chip label="Outlined" variant="outlined" color="primary" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
      <Chip label="Small" size="small" />
      <Chip label="Medium" size="medium" />
      <Chip label="Large" size="large" />
    </div>
  ),
};

export const WithIcon: Story = {
  args: {
    label: 'With Icon',
    icon: FaTag,
  },
};

export const WithAvatar: Story = {
  args: {
    label: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
};

export const Deletable: Story = {
  args: {
    label: 'Deletable Chip',
    deletable: true,
    onDelete: () => alert('Deleted!'),
  },
};

export const Clickable: Story = {
  args: {
    label: 'Clickable Chip',
    onClick: () => alert('Clicked!'),
  },
};

export const ComplexExample: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="React" color="primary" icon={FaTag} deletable />
      <Chip label="JavaScript" color="success" icon={FaTag} deletable />
      <Chip label="TypeScript" color="info" icon={FaTag} deletable />
      <Chip label="Vue" color="warning" icon={FaTag} deletable />
      <Chip label="Angular" color="error" icon={FaTag} deletable />
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Chip label="Animated Primary" color="primary" animated />
      <Chip label="Animated Success" color="success" animated />
      <Chip label="Animated Error" color="error" animated />
      <Chip label="Animated Outlined" variant="outlined" color="primary" animated />
      <Chip label="Animated with Icon" icon={FaTag} color="info" animated />
    </div>
  ),
};

