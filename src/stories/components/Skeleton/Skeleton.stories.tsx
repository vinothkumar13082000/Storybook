import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Rectangular: Story = {
  args: {
    variant: 'rectangular',
    width: 200,
    height: 100,
  },
};

export const Circular: Story = {
  args: {
    variant: 'circular',
    width: 60,
    height: 60,
  },
};

export const Text: Story = {
  args: {
    variant: 'text',
    width: '100%',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Skeleton variant="text" width="100%" />
      <Skeleton variant="text" width="80%" />
      <Skeleton variant="rectangular" width="100%" height={200} />
      <Skeleton variant="circular" width={60} height={60} />
      <Skeleton variant="rounded" width="100%" height={100} />
    </div>
  ),
};

export const AllAnimations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <div>
        <p>Pulse</p>
        <Skeleton variant="rectangular" width="100%" height={60} animation="pulse" />
      </div>
      <div>
        <p>Wave</p>
        <Skeleton variant="rectangular" width="100%" height={60} animation="wave" />
      </div>
      <div>
        <p>None</p>
        <Skeleton variant="rectangular" width="100%" height={60} animation="none" />
      </div>
    </div>
  ),
};

export const CardSkeleton: Story = {
  render: () => (
    <div style={{ maxWidth: '300px', padding: '16px', border: '1px solid var(--border-default)', borderRadius: '8px' }}>
      <Skeleton variant="rectangular" width="100%" height={200} style={{ marginBottom: '16px' }} />
      <Skeleton variant="text" width="100%" style={{ marginBottom: '8px' }} />
      <Skeleton variant="text" width="80%" style={{ marginBottom: '16px' }} />
      <div style={{ display: 'flex', gap: '8px' }}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="text" width="60%" />
      </div>
    </div>
  ),
};

