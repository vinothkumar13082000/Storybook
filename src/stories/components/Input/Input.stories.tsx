import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { FaUser, FaEnvelope, FaSearch } from 'react-icons/fa';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Label',
    placeholder: 'Enter text...',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input label="Outlined" variant="outlined" placeholder="Outlined input" />
      <Input label="Filled" variant="filled" placeholder="Filled input" />
      <Input label="Standard" variant="standard" placeholder="Standard input" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Input label="Small" size="small" placeholder="Small input" />
      <Input label="Medium" size="medium" placeholder="Medium input" />
      <Input label="Large" size="large" placeholder="Large input" />
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '400px' }}>
      <Input label="Username" startIcon={FaUser} placeholder="Enter username" />
      <Input label="Email" startIcon={FaEnvelope} placeholder="Enter email" type="email" />
      <Input label="Search" endIcon={FaSearch} placeholder="Search..." type="search" />
    </div>
  ),
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'Enter email',
    error: 'Please enter a valid email address',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    placeholder: 'Enter username',
    helperText: 'Must be at least 3 characters',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot edit',
    disabled: true,
    defaultValue: 'Disabled value',
  },
};

export const InputGroups: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '600px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Registration Form</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Full Name" placeholder="Enter your full name" required />
          <Input label="Email Address" type="email" placeholder="name@example.com" required startIcon={FaEnvelope} />
          <Input label="Password" type="password" placeholder="Enter password" required />
          <Input label="Phone Number" type="tel" placeholder="+1 (555) 000-0000" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Search & Filters</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Search" type="search" placeholder="Search products..." endIcon={FaSearch} />
          <Input label="Filter by Name" placeholder="Enter filter criteria" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Form with Errors</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input 
            label="Email" 
            type="email" 
            placeholder="Enter email" 
            error="Please enter a valid email address"
            defaultValue="invalid-email"
          />
          <Input 
            label="Password" 
            type="password" 
            placeholder="Enter password"
            helperText="Must be at least 8 characters"
          />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>All Variants Comparison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Outlined Input" variant="outlined" placeholder="Outlined style" />
          <Input label="Filled Input" variant="filled" placeholder="Filled style" />
          <Input label="Standard Input" variant="standard" placeholder="Standard style" />
        </div>
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '16px', fontWeight: 600 }}>Size Comparison</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Input label="Small Input" size="small" placeholder="Small size" />
          <Input label="Medium Input" size="medium" placeholder="Medium size" />
          <Input label="Large Input" size="large" placeholder="Large size" />
        </div>
      </div>
    </div>
  ),
};

export const Animated: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
      <Input label="Animated Input" placeholder="Watch the animation" animated />
      <Input label="Animated with Icon" startIcon={FaUser} placeholder="Animated with icon" animated />
      <Input label="Animated Filled" variant="filled" placeholder="Filled variant animated" animated />
      <Input label="Animated Outlined" variant="outlined" placeholder="Outlined variant animated" animated />
    </div>
  ),
};

