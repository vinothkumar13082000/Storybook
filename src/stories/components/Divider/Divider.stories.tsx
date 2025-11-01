import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Horizontal: Story = {
  args: {},
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', height: '100px' }}>
      <span>Left</span>
      <Divider {...args} />
      <span>Right</span>
    </div>
  ),
};

export const WithText: Story = {
  args: {
    text: 'OR',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Divider variant="solid" text="Solid" />
      <Divider variant="dashed" text="Dashed" />
      <Divider variant="dotted" text="Dotted" />
    </div>
  ),
};

export const TextAlignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Divider text="Left" textAlign="left" />
      <Divider text="Center" textAlign="center" />
      <Divider text="Right" textAlign="right" />
    </div>
  ),
};

export const CustomStyles: Story = {
  args: {
    borderWidth: 3,
    borderColor: '#2196f3',
    variant: 'dashed',
    spacing: 20,
  },
};

