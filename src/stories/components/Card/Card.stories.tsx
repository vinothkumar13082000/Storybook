import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button/Button';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['elevated', 'outlined', 'filled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: 'This is the card content. It can contain any React elements or text.',
  },
};

export const WithSubtitle: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card subtitle or description',
    children: 'This is the card content with a subtitle.',
  },
};

export const WithImage: Story = {
  args: {
    title: 'Beautiful Landscape',
    subtitle: 'Nature Photography',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
    imageAlt: 'Mountain landscape',
    children: 'This card includes an image at the top.',
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    children: 'This card has action buttons at the bottom.',
    actions: (
      <>
        <Button label="Cancel" variant="outline" size="small" />
        <Button label="Save" variant="primary" size="small" />
      </>
    ),
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <Card title="Elevated Card" variant="elevated">
        This is an elevated card with shadow.
      </Card>
      <Card title="Outlined Card" variant="outlined">
        This is an outlined card with border.
      </Card>
      <Card title="Filled Card" variant="filled">
        This is a filled card with background color.
      </Card>
    </div>
  ),
};

export const Hoverable: Story = {
  args: {
    title: 'Hoverable Card',
    children: 'Hover over this card to see the effect.',
    hoverable: true,
    variant: 'elevated',
  },
};

export const Clickable: Story = {
  args: {
    title: 'Clickable Card',
    children: 'This card can be clicked.',
    onClick: () => alert('Card clicked!'),
    hoverable: true,
  },
};

export const FullExample: Story = {
  args: {
    title: 'Complete Card Example',
    subtitle: 'With all features',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800',
    imageAlt: 'Example image',
    children: (
      <p>
        This is a complete card example with title, subtitle, image, content, and action buttons.
        You can customize every aspect of it.
      </p>
    ),
    actions: (
      <>
        <Button label="Share" variant="outline" size="small" />
        <Button label="Learn More" variant="primary" size="small" />
      </>
    ),
    hoverable: true,
  },
};

export const CardGrid: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <Card
        title="Product Card"
        subtitle="$99.99"
        image="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
        variant="elevated"
        hoverable
        actions={
          <>
            <Button label="Add to Cart" variant="primary" size="small" />
            <Button label="View Details" variant="outline" size="small" />
          </>
        }
      >
        Beautiful product description goes here with all the details you need.
      </Card>
      <Card
        title="Article Card"
        subtitle="Published 2 days ago"
        variant="outlined"
        actions={<Button label="Read More" variant="text" size="small" />}
      >
        This is an article card with outlined variant. Perfect for content listings.
      </Card>
      <Card
        title="Info Card"
        subtitle="Important notice"
        variant="filled"
        hoverable
      >
        This card uses the filled variant with a subtle background color.
      </Card>
    </div>
  ),
};

export const CardShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Product Cards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          <Card
            title="Premium Headphones"
            subtitle="$299.99"
            image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
            variant="elevated"
            hoverable
            actions={
              <>
                <Button label="Buy Now" variant="primary" size="small" />
                <Button label="Add to Wishlist" variant="outline" size="small" />
              </>
            }
          >
            High-quality wireless headphones with noise cancellation.
          </Card>
          <Card
            title="Smart Watch"
            subtitle="$199.99"
            image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
            variant="elevated"
            hoverable
            actions={
              <>
                <Button label="Buy Now" variant="primary" size="small" />
                <Button label="Add to Wishlist" variant="outline" size="small" />
              </>
            }
          >
            Feature-rich smartwatch with health tracking capabilities.
          </Card>
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '18px', fontWeight: 600 }}>Content Cards</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
          <Card
            title="Blog Post Title"
            subtitle="By John Doe • 5 min read"
            variant="outlined"
            actions={<Button label="Read Article" variant="text" size="small" />}
          >
            This is a sample blog post card with outlined style. Perfect for content management systems.
          </Card>
          <Card
            title="News Article"
            subtitle="Breaking News • Just now"
            variant="filled"
            actions={<Button label="Read More" variant="primary" size="small" />}
          >
            Latest breaking news article with filled card style for emphasis.
          </Card>
        </div>
      </div>
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
      <Card title="Animated Elevated" variant="elevated" animated>
        This card has animated effects on mount and hover.
      </Card>
      <Card title="Animated Outlined" variant="outlined" animated>
        Watch the smooth fade-in animation when this card appears.
      </Card>
      <Card title="Animated Filled" variant="filled" animated hoverable>
        This filled card includes both mount and hover animations.
      </Card>
    </div>
  ),
};

