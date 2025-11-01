import type { Meta, StoryObj } from '@storybook/react';
import { List } from './List';
import { FaUser, FaEnvelope, FaCog, FaTrash } from 'react-icons/fa';

const meta: Meta<typeof List> = {
  title: 'Components/List',
  component: List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
  render: () => (
    <List>
      <List.Item startIcon={<FaUser />}>John Doe</List.Item>
      <List.Item startIcon={<FaEnvelope />}>john@example.com</List.Item>
      <List.Item startIcon={<FaCog />}>Settings</List.Item>
    </List>
  ),
};

export const WithSecondary: Story = {
  render: () => (
    <List>
      <List.Item startIcon={<FaUser />} secondary="Software Engineer">
        John Doe
      </List.Item>
      <List.Item startIcon={<FaEnvelope />} secondary="Personal">
        john@example.com
      </List.Item>
    </List>
  ),
};

export const Clickable: Story = {
  render: () => (
    <List>
      <List.Item startIcon={<FaUser />} onClick={() => alert('Clicked!')}>
        Clickable Item
      </List.Item>
      <List.Item startIcon={<FaEnvelope />} onClick={() => alert('Clicked!')}>
        Another Item
      </List.Item>
    </List>
  ),
};

export const WithActions: Story = {
  render: () => (
    <List>
      <List.Item
        startIcon={<FaUser />}
        secondary="john@example.com"
        action={<FaTrash style={{ cursor: 'pointer', color: 'var(--error-500)' }} />}
      >
        John Doe
      </List.Item>
      <List.Item
        startIcon={<FaEnvelope />}
        action={<FaTrash style={{ cursor: 'pointer', color: 'var(--error-500)' }} />}
      >
        Email Settings
      </List.Item>
    </List>
  ),
};

export const Outlined: Story = {
  render: () => (
    <List variant="outlined">
      <List.Item startIcon={<FaUser />}>John Doe</List.Item>
      <List.Item startIcon={<FaEnvelope />}>Email</List.Item>
    </List>
  ),
};

export const Contained: Story = {
  render: () => (
    <List variant="contained">
      <List.Item startIcon={<FaUser />}>John Doe</List.Item>
      <List.Item startIcon={<FaEnvelope />}>Email</List.Item>
    </List>
  ),
};

