import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  args: {
    current: 1,
    total: 100,
    pageSize: 10,
  },
};

export const WithTotal: Story = {
  args: {
    current: 5,
    total: 100,
    pageSize: 10,
    showTotal: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <Pagination current={3} total={50} pageSize={10} size="small" />
      <Pagination current={3} total={50} pageSize={10} size="medium" />
      <Pagination current={3} total={50} pageSize={10} size="large" />
    </div>
  ),
};

export const ManyPages: Story = {
  args: {
    current: 10,
    total: 200,
    pageSize: 10,
    showTotal: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [current, setCurrent] = useState(1);
    return (
      <div>
        <Pagination
          current={current}
          total={100}
          pageSize={10}
          showTotal
          onChange={(page) => setCurrent(page)}
        />
        <p style={{ marginTop: '16px' }}>Current page: {current}</p>
      </div>
    );
  },
};

