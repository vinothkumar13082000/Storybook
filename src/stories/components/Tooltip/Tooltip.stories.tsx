import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    title: 'This is a tooltip',
    children: <Button label="Hover me" />,
  },
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', alignItems: 'center', padding: '100px' }}>
      <Tooltip title="Top tooltip" placement="top">
        <Button label="Top" />
      </Tooltip>
      <div style={{ display: 'flex', gap: '100px' }}>
        <Tooltip title="Left tooltip" placement="left">
          <Button label="Left" />
        </Tooltip>
        <Tooltip title="Right tooltip" placement="right">
          <Button label="Right" />
        </Tooltip>
      </div>
      <Tooltip title="Bottom tooltip" placement="bottom">
        <Button label="Bottom" />
      </Tooltip>
    </div>
  ),
};

export const LongText: Story = {
  args: {
    title: 'This is a very long tooltip text that should wrap to multiple lines when it gets too long',
    children: <Button label="Long Tooltip" />,
  },
};

export const WithDelay: Story = {
  args: {
    title: 'Tooltip with delay',
    delay: 500,
    children: <Button label="Hover (500ms delay)" />,
  },
};

