import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../Button/Button';

const meta: Meta<typeof Popover> = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    content: <div>This is a popover content</div>,
    children: <Button label="Open Popover" />,
  },
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '100px', alignItems: 'center', padding: '100px' }}>
      <Popover
        content={<div>Top popover</div>}
        placement="top"
      >
        <Button label="Top" />
      </Popover>
      <div style={{ display: 'flex', gap: '100px' }}>
        <Popover
          content={<div>Left popover</div>}
          placement="left"
        >
          <Button label="Left" />
        </Popover>
        <Popover
          content={<div>Right popover</div>}
          placement="right"
        >
          <Button label="Right" />
        </Popover>
      </div>
      <Popover
        content={<div>Bottom popover</div>}
        placement="bottom"
      >
        <Button label="Bottom" />
      </Popover>
    </div>
  ),
};

export const RichContent: Story = {
  args: {
    content: (
      <div>
        <h3 style={{ margin: '0 0 8px 0' }}>Popover Title</h3>
        <p style={{ margin: 0 }}>This popover contains rich content with multiple elements.</p>
        <Button label="Action" size="small" style={{ marginTop: '12px' }} />
      </div>
    ),
    children: <Button label="Rich Content" />,
  },
};

export const Controlled: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div>
        <Popover
          content={<div>Controlled popover</div>}
          open={open}
        >
          <Button label={open ? 'Close' : 'Open'} onClick={() => setOpen(!open)} />
        </Popover>
      </div>
    );
  },
};

