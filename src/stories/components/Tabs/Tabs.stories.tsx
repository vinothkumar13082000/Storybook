import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const items = [
  {
    id: '1',
    label: 'Home',
    icon: <FaHome />,
    content: <div>Home content goes here</div>,
  },
  {
    id: '2',
    label: 'Profile',
    icon: <FaUser />,
    content: <div>Profile content goes here</div>,
  },
  {
    id: '3',
    label: 'Settings',
    icon: <FaCog />,
    content: <div>Settings content goes here</div>,
  },
];

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['standard', 'outlined', 'enclosed'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    items,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3>Standard</h3>
        <Tabs items={items} variant="standard" />
      </div>
      <div>
        <h3>Outlined</h3>
        <Tabs items={items} variant="outlined" />
      </div>
      <div>
        <h3>Enclosed</h3>
        <Tabs items={items} variant="enclosed" />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3>Small</h3>
        <Tabs items={items} size="small" />
      </div>
      <div>
        <h3>Medium</h3>
        <Tabs items={items} size="medium" />
      </div>
      <div>
        <h3>Large</h3>
        <Tabs items={items} size="large" />
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  args: {
    items,
    fullWidth: true,
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      ...items,
      {
        id: '4',
        label: 'Disabled',
        content: <div>This tab is disabled</div>,
        disabled: true,
      },
    ],
  },
};

export const Animated: Story = {
  args: {
    items,
    animated: true,
  },
};

