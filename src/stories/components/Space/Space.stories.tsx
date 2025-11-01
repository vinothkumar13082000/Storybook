import type { Meta, StoryObj } from '@storybook/react';
import { Space } from './Space';
import { Button } from '../Button/Button';

const meta: Meta<typeof Space> = {
  title: 'Components/Space',
  component: Space,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Space>;

export const Horizontal: Story = {
  render: () => (
    <Space>
      <Button label="Button 1" />
      <Button label="Button 2" />
      <Button label="Button 3" />
    </Space>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Space direction="vertical">
      <Button label="Button 1" />
      <Button label="Button 2" />
      <Button label="Button 3" />
    </Space>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p>Small</p>
        <Space size="small">
          <Button label="Button 1" />
          <Button label="Button 2" />
        </Space>
      </div>
      <div>
        <p>Medium</p>
        <Space size="medium">
          <Button label="Button 1" />
          <Button label="Button 2" />
        </Space>
      </div>
      <div>
        <p>Large</p>
        <Space size="large">
          <Button label="Button 1" />
          <Button label="Button 2" />
        </Space>
      </div>
      <div>
        <p>Custom (32px)</p>
        <Space size={32}>
          <Button label="Button 1" />
          <Button label="Button 2" />
        </Space>
      </div>
    </div>
  ),
};

export const Wrap: Story = {
  render: () => (
    <Space wrap>
      {Array.from({ length: 10 }).map((_, i) => (
        <Button key={i} label={`Button ${i + 1}`} />
      ))}
    </Space>
  ),
};

export const Justify: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p>Space Between</p>
        <Space justify="space-between">
          <Button label="Left" />
          <Button label="Right" />
        </Space>
      </div>
      <div>
        <p>Center</p>
        <Space justify="center">
          <Button label="Center" />
        </Space>
      </div>
    </div>
  ),
};

