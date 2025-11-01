import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Dialog from './Dialog';
import { Button } from "../Button/Button";
import { ThemeProvider } from "../../theme/ThemeProvider";

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button label="Open Dialog" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          title="Dialog Title"
          content="This is the dialog content. You can put any content here."
          onClose={() => setOpen(false)}
          primaryButtonLabel="Confirm"
          secondaryButtonLabel="Cancel"
          onPrimaryClick={() => alert('Confirmed!')}
          onSecondaryClick={() => setOpen(false)}
        />
      </>
    );
  },
};

export const WithCloseIcon: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button label="Open Dialog" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          title="Dialog with Close Icon"
          content="This dialog has a close icon in the header."
          closable={true}
          onClose={() => setOpen(false)}
          primaryButtonLabel="Save"
          secondaryButtonLabel="Cancel"
        />
      </>
    );
  },
};

export const AllSizes: Story = {
  render: () => {
    const [open, setOpen] = useState({ small: false, medium: false, large: false });
    return (
      <>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '20px' }}>
          <Button label="Small" onClick={() => setOpen({ ...open, small: true })} />
          <Button label="Medium" onClick={() => setOpen({ ...open, medium: true })} />
          <Button label="Large" onClick={() => setOpen({ ...open, large: true })} />
        </div>
        <Dialog
          open={open.small}
          title="Small Dialog"
          content="This is a small dialog."
          size="small"
          onClose={() => setOpen({ ...open, small: false })}
          primaryButtonLabel="OK"
        />
        <Dialog
          open={open.medium}
          title="Medium Dialog"
          content="This is a medium-sized dialog with more content."
          size="medium"
          onClose={() => setOpen({ ...open, medium: false })}
          primaryButtonLabel="OK"
        />
        <Dialog
          open={open.large}
          title="Large Dialog"
          content="This is a large dialog that can accommodate more content."
          size="large"
          onClose={() => setOpen({ ...open, large: false })}
          primaryButtonLabel="OK"
        />
      </>
    );
  },
};

export const WithoutBackdrop: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button label="Open Dialog" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          title="No Backdrop"
          content="This dialog has no backdrop."
          backdrop={false}
          onClose={() => setOpen(false)}
          primaryButtonLabel="OK"
        />
      </>
    );
  },
};

export const CustomFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button label="Open Dialog" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          title="Custom Footer"
          content="This dialog has a custom footer."
          footer={
            <div style={{ display: 'flex', gap: '8px', width: '100%', justifyContent: 'space-between' }}>
              <Button label="Help" variant="text" size="small" />
              <div style={{ display: 'flex', gap: '8px' }}>
                <Button label="Cancel" variant="outline" size="small" onClick={() => setOpen(false)} />
                <Button label="Save" variant="primary" size="small" />
              </div>
            </div>
          }
          onClose={() => setOpen(false)}
        />
      </>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button label="Open Dialog" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          title="Long Content Dialog"
          size="large"
          onClose={() => setOpen(false)}
          primaryButtonLabel="Confirm"
          secondaryButtonLabel="Cancel"
        >
          <div>
            <p>This is a dialog with long content that will scroll.</p>
            {Array.from({ length: 20 }).map((_, i) => (
              <p key={i}>Paragraph {i + 1} - This is some content that makes the dialog taller.</p>
            ))}
          </div>
        </Dialog>
      </>
    );
  },
};

export const Animated: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <>
        <Button label="Open Animated Dialog" onClick={() => setOpen(true)} />
        <Dialog
          open={open}
          title="Animated Dialog"
          content="This dialog has smooth animations when opening and closing."
          onClose={() => setOpen(false)}
          primaryButtonLabel="Confirm"
          secondaryButtonLabel="Cancel"
          animated
        />
      </>
    );
  },
};