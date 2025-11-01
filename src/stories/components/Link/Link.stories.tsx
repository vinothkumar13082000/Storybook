import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './Link';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Click me',
    href: '#',
  },
};

export const External: Story = {
  args: {
    children: 'External Link',
    href: 'https://example.com',
    external: true,
    endIcon: <FaExternalLinkAlt />,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link variant="default">Default Link</Link>
      <Link variant="primary">Primary Link</Link>
      <Link variant="secondary">Secondary Link</Link>
      <Link variant="success">Success Link</Link>
      <Link variant="error">Error Link</Link>
      <Link variant="warning">Warning Link</Link>
    </div>
  ),
};

export const UnderlineStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Link underline="none">No Underline</Link>
      <Link underline="hover">Hover Underline</Link>
      <Link underline="always">Always Underline</Link>
    </div>
  ),
};

export const WithIcons: Story = {
  args: {
    children: 'Link with icons',
    startIcon: <FaArrowRight />,
    endIcon: <FaExternalLinkAlt />,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Link',
    disabled: true,
  },
};

