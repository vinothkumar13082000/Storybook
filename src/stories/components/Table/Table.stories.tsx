import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Badge } from '../Badge/Badge';
import { Button } from '../Button/Button';

const columns = [
  { key: 'id', header: 'ID', align: 'left' as const, width: '80px' },
  { key: 'name', header: 'Name', align: 'left' as const },
  { key: 'email', header: 'Email', align: 'left' as const },
  {
    key: 'status',
    header: 'Status',
    align: 'center' as const,
    width: '120px',
    render: (value: string) => (
      value ? <Badge content={value} color={value === 'Active' ? 'success' : value === 'Inactive' ? 'error' : 'default'} /> : '-'
    ),
  },
  {
    key: 'actions',
    header: 'Actions',
    align: 'right' as const,
    width: '180px',
    render: (value: any, row: any) => (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Button label="Edit" size="small" variant="primary" />
        <Button label="Delete" size="small" variant="error" />
      </div>
    ),
  },
];

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'Active' },
];

const simpleColumns = [
  { key: 'id', header: 'ID', align: 'left' as const },
  { key: 'name', header: 'Name', align: 'left' as const },
  { key: 'email', header: 'Email', align: 'left' as const },
  { 
    key: 'status', 
    header: 'Status', 
    align: 'left' as const,
    render: (value: string) => value || '-'
  },
  {
    key: 'actions',
    header: 'Actions',
    align: 'right' as const,
    render: () => (
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
        <Button label="Edit" size="small" variant="primary" />
        <Button label="Delete" size="small" variant="error" />
      </div>
    ),
  },
];

const simpleData = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'Active' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'Pending' },
];

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns,
    data,
  },
};

export const Bordered: Story = {
  args: {
    columns,
    data,
    bordered: true,
  },
};

export const Striped: Story = {
  args: {
    columns,
    data,
    striped: true,
  },
};

export const Hoverable: Story = {
  args: {
    columns,
    data,
    hoverable: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Small</h3>
        <Table columns={simpleColumns} data={simpleData} size="small" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Medium</h3>
        <Table columns={simpleColumns} data={simpleData} size="medium" />
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '16px', fontWeight: 600 }}>Large</h3>
        <Table columns={simpleColumns} data={simpleData} size="large" />
      </div>
    </div>
  ),
};

export const Empty: Story = {
  args: {
    columns,
    data: [],
  },
};

export const Complex: Story = {
  args: {
    columns,
    data,
    bordered: true,
    striped: true,
    hoverable: true,
  },
};

export const SimpleTable: Story = {
  args: {
    columns: simpleColumns,
    data: simpleData,
  },
};

export const WithSorting: Story = {
  args: {
    columns: columns.map(col => ({ ...col, sortable: true })),
    data,
  },
};

export const Selectable: Story = {
  args: {
    columns,
    data,
    selectable: true,
  },
};

export const SelectableSimple: Story = {
  args: {
    columns: simpleColumns,
    data: simpleData,
    selectable: true,
  },
};

export const Animated: Story = {
  args: {
    columns: simpleColumns,
    data: simpleData,
    animated: true,
  },
};

