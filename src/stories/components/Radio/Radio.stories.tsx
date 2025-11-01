import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'error', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Radio option',
    value: 'option1',
  },
};

export const RadioGroup: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio
          label="Option 1"
          value="option1"
          checked={value === 'option1'}
          onChange={(val) => setValue(val as string)}
          name="group1"
        />
        <Radio
          label="Option 2"
          value="option2"
          checked={value === 'option2'}
          onChange={(val) => setValue(val as string)}
          name="group1"
        />
        <Radio
          label="Option 3"
          value="option3"
          checked={value === 'option3'}
          onChange={(val) => setValue(val as string)}
          name="group1"
        />
      </div>
    );
  },
};

export const AllColors: Story = {
  render: () => {
    const [value, setValue] = useState('primary');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio
          label="Primary"
          value="primary"
          checked={value === 'primary'}
          onChange={(val) => setValue(val as string)}
          name="color"
          color="primary"
        />
        <Radio
          label="Secondary"
          value="secondary"
          checked={value === 'secondary'}
          onChange={(val) => setValue(val as string)}
          name="color"
          color="secondary"
        />
        <Radio
          label="Success"
          value="success"
          checked={value === 'success'}
          onChange={(val) => setValue(val as string)}
          name="color"
          color="success"
        />
        <Radio
          label="Error"
          value="error"
          checked={value === 'error'}
          onChange={(val) => setValue(val as string)}
          name="color"
          color="error"
        />
        <Radio
          label="Warning"
          value="warning"
          checked={value === 'warning'}
          onChange={(val) => setValue(val as string)}
          name="color"
          color="warning"
        />
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <Radio label="Small radio" size="small" name="size" />
      <Radio label="Medium radio" size="medium" name="size" />
      <Radio label="Large radio" size="large" name="size" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked',
    checked: true,
    disabled: true,
  },
};

export const Animated: Story = {
  render: () => {
    const [value, setValue] = useState('option1');
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Radio
          label="Animated Primary"
          value="option1"
          checked={value === 'option1'}
          onChange={(val) => setValue(val as string)}
          name="animated"
          color="primary"
          animated
        />
        <Radio
          label="Animated Success"
          value="option2"
          checked={value === 'option2'}
          onChange={(val) => setValue(val as string)}
          name="animated"
          color="success"
          animated
        />
        <Radio
          label="Animated Error"
          value="option3"
          checked={value === 'option3'}
          onChange={(val) => setValue(val as string)}
          name="animated"
          color="error"
          animated
        />
      </div>
    );
  },
};

