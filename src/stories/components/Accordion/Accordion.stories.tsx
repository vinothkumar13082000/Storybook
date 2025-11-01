import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';

const items = [
  {
    id: '1',
    title: 'What is React?',
    content: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components.',
  },
  {
    id: '2',
    title: 'How do I install React?',
    content: 'You can install React using npm: npm install react react-dom. For a new project, you can use Create React App: npx create-react-app my-app',
  },
  {
    id: '3',
    title: 'What is JSX?',
    content: 'JSX is a syntax extension to JavaScript. It looks similar to a template language, but it has the full power of JavaScript. JSX produces React "elements".',
  },
  {
    id: '4',
    title: 'Disabled Item',
    content: 'This item is disabled',
    disabled: true,
  },
];

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {
    items,
  },
};

export const AllowMultiple: Story = {
  args: {
    items,
    allowMultiple: true,
  },
};

export const DefaultExpanded: Story = {
  args: {
    items,
    defaultExpanded: ['1'],
  },
};

export const Animated: Story = {
  args: {
    items,
    animated: true,
  },
};

