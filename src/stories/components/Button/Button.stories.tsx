import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { FaRocket, FaDownload, FaHeart } from 'react-icons/fa';
import { ThemeProvider } from '../../theme/ThemeProvider';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning', 'info', 'outline', 'ghost', 'text'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button label="Primary" variant="primary" />
      <Button label="Secondary" variant="secondary" />
      <Button label="Success" variant="success" />
      <Button label="Error" variant="error" />
      <Button label="Warning" variant="warning" />
      <Button label="Info" variant="info" />
      <Button label="Outline" variant="outline" />
      <Button label="Ghost" variant="ghost" />
      <Button label="Text" variant="text" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button label="Small" size="small" />
      <Button label="Medium" size="medium" />
      <Button label="Large" size="large" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
      <Button label="Launch" startIcon={FaRocket} />
      <Button label="Download" endIcon={FaDownload} />
      <Button label="Like" startIcon={FaHeart} variant="error" />
    </div>
  ),
};

export const Loading: Story = {
  args: {
    label: 'Loading Button',
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    fullWidth: true,
  },
};

export const ButtonGroups: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Primary Actions</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button label="Save" variant="primary" startIcon={FaDownload} />
          <Button label="Cancel" variant="outline" />
          <Button label="Delete" variant="error" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Icon Only Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button startIcon={FaRocket} variant="primary" size="small" />
          <Button startIcon={FaHeart} variant="error" size="medium" />
          <Button startIcon={FaDownload} variant="secondary" size="large" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Loading States</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button label="Submitting..." variant="primary" loading />
          <Button label="Processing" variant="success" loading />
          <Button label="Deleting" variant="error" loading />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Full Width Group</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '400px' }}>
          <Button label="Primary Action" variant="primary" fullWidth />
          <Button label="Secondary Action" variant="outline" fullWidth />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>All Color Variants</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button label="Primary" variant="primary" />
          <Button label="Secondary" variant="secondary" />
          <Button label="Success" variant="success" />
          <Button label="Error" variant="error" />
          <Button label="Warning" variant="warning" />
          <Button label="Info" variant="info" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Outline Variants</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button label="Primary" variant="outline" />
          <Button label="Secondary" variant="outline" />
          <Button label="Success" variant="outline" />
          <Button label="Error" variant="outline" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Text & Ghost Variants</h3>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          <Button label="Text Button" variant="text" />
          <Button label="Ghost Button" variant="ghost" />
        </div>
      </div>
    </div>
  ),
};

export const InteractiveExamples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Click to See Actions</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button 
            label="Show Alert" 
            variant="primary" 
            onClick={() => alert('Button clicked!')} 
          />
          <Button 
            label="Success Message" 
            variant="success" 
            onClick={() => alert('Success action executed!')} 
          />
          <Button 
            label="Warning" 
            variant="warning" 
            onClick={() => alert('Warning action!')} 
          />
        </div>
      </div>
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>Animated Buttons</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button label="Animated Primary" variant="primary" animated />
          <Button label="Animated Success" variant="success" animated />
          <Button label="Animated Error" variant="error" animated />
          <Button label="Animated Outline" variant="outline" animated />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '12px', fontSize: '14px', fontWeight: 600 }}>All Variants Animated</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Button label="Primary" variant="primary" animated />
          <Button label="Secondary" variant="secondary" animated />
          <Button label="Success" variant="success" animated />
          <Button label="Error" variant="error" animated />
          <Button label="Warning" variant="warning" animated />
          <Button label="Info" variant="info" animated />
          <Button label="Outline" variant="outline" animated />
          <Button label="Ghost" variant="ghost" animated />
        </div>
      </div>
    </div>
  ),
};

