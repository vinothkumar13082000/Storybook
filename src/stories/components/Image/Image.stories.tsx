import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    alt: 'Mountain landscape',
    width: 400,
    height: 300,
  },
};

export const Rounded: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    alt: 'Rounded image',
    width: 200,
    height: 200,
    borderRadius: '50%',
  },
};

export const WithBorder: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    alt: 'Bordered image',
    width: 300,
    height: 200,
    borderWidth: 3,
    borderColor: '#2196f3',
    borderStyle: 'solid',
  },
};

export const HoverEffect: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400',
    alt: 'Hoverable image',
    width: 300,
    height: 200,
    hoverEffect: true,
  },
};

export const AllObjectFit: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', maxWidth: '600px' }}>
      <div>
        <p>Cover</p>
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300" width={200} height={150} objectFit="cover" />
      </div>
      <div>
        <p>Contain</p>
        <Image src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300" width={200} height={150} objectFit="contain" />
      </div>
    </div>
  ),
};

