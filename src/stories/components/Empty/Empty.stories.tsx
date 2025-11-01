import type { Meta, StoryObj } from '@storybook/react';
import { Empty } from './Empty';
import { Button } from '../Button/Button';
import { FaSearch } from 'react-icons/fa';

const meta: Meta<typeof Empty> = {
  title: 'Components/Empty',
  component: Empty,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Empty>;

export const Default: Story = {
  args: {},
};

export const WithDescription: Story = {
  args: {
    description: 'No items found. Try adjusting your search.',
  },
};

export const WithFooter: Story = {
  args: {
    description: 'No data available',
    footer: <Button label="Create New" variant="primary" size="small" />,
  },
};

export const WithCustomIcon: Story = {
  args: {
    description: 'No search results',
    icon: <FaSearch />,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <Empty size="small" description="Small empty state" />
      <Empty size="medium" description="Medium empty state" />
      <Empty size="large" description="Large empty state" />
    </div>
  ),
};

