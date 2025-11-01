import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './Typography';

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="body1">Body 1 - This is a body text</Typography>
      <Typography variant="body2">Body 2 - This is a smaller body text</Typography>
      <Typography variant="caption">Caption text</Typography>
      <Typography variant="overline">Overline text</Typography>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography color="default">Default</Typography>
      <Typography color="primary">Primary</Typography>
      <Typography color="secondary">Secondary</Typography>
      <Typography color="success">Success</Typography>
      <Typography color="error">Error</Typography>
      <Typography color="warning">Warning</Typography>
      <Typography color="info">Info</Typography>
    </div>
  ),
};

export const TextAlignments: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
      <Typography align="left">Left aligned text</Typography>
      <Typography align="center">Center aligned text</Typography>
      <Typography align="right">Right aligned text</Typography>
      <Typography align="justify">
        Justified text that spreads across the entire width of the container
      </Typography>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Typography fontWeight="light">Light weight</Typography>
      <Typography fontWeight="normal">Normal weight</Typography>
      <Typography fontWeight="medium">Medium weight</Typography>
      <Typography fontWeight="semibold">Semibold weight</Typography>
      <Typography fontWeight="bold">Bold weight</Typography>
    </div>
  ),
};

export const CustomComponent: Story = {
  args: {
    variant: 'h1',
    component: 'div',
    children: 'H1 styled as div',
  },
};

