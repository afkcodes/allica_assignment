import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '.';
const meta = {
  title: 'Components/Modal',
  component: Modal.Root,
  tags: ['autodocs'],
} satisfies Meta<typeof Modal.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    defaultOpen: false,
    open: false,
    onOpenChange: () => {},
    children: null,
  },
  render: () => (
    <div className='flex items-center justify-center p-4 position-static'>
      <Modal.Root>
        <Modal.Trigger>Basic Modal</Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop />
          <Modal.Content>
            <Modal.Header>
              <Modal.Eyebrow>Basic Modal Eyebrow text</Modal.Eyebrow>
              <Modal.Title>Title goes here</Modal.Title>
              <Modal.Close />
            </Modal.Header>
            <div className='h-20 bg-slate-100'>
              <p>This is a modal content.</p>
            </div>
            <Modal.Footer>
              <Modal.Cancel>Cancel</Modal.Cancel>
              <Modal.Confirm>Confirm</Modal.Confirm>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  ),
};

export const OpenByDefault: Story = {
  args: {
    defaultOpen: true,
    open: false,
    onOpenChange: () => {},
    children: null,
  },
  render: ({ defaultOpen }) => (
    <div className='flex items-center justify-center p-4 position-static'>
      <Modal.Root defaultOpen={defaultOpen}>
        <Modal.Trigger>Basic Modal</Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop />
          <Modal.Content>
            <Modal.Header>
              <Modal.Eyebrow>Basic Modal Eyebrow text</Modal.Eyebrow>
              <Modal.Title>Title goes here</Modal.Title>
              <Modal.Close />
            </Modal.Header>
            <div className='h-20 bg-slate-100'>
              <p>This is a modal content.</p>
            </div>
            <Modal.Footer>
              <Modal.Cancel>Cancel</Modal.Cancel>
              <Modal.Confirm>Confirm</Modal.Confirm>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  ),
};

const ControlledExternalState = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex items-center justify-center p-4 position-static'>
      <div>
        <button
          className='px-3 py-2 text-white bg-teal-600 rounded-sm'
          onClick={() => {
            setOpen(!open);
          }}>
          Open Modal through state
        </button>
      </div>
      <Modal.Root open={open} onOpenChange={setOpen}>
        <Modal.Portal>
          <Modal.Backdrop />
          <Modal.Content>
            <Modal.Header>
              <Modal.Eyebrow>Basic Modal Eyebrow text</Modal.Eyebrow>
              <Modal.Title>Title goes here</Modal.Title>
              <Modal.Close />
            </Modal.Header>
            <div className='h-20 bg-slate-100'>
              <p>This is a modal content. Opens using external state</p>
            </div>
            <Modal.Footer>
              <Modal.Cancel>Cancel</Modal.Cancel>
              <Modal.Confirm>Confirm</Modal.Confirm>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  );
};

export const Controlled: Story = {
  args: {
    defaultOpen: true,
    open: false,
    onOpenChange: () => {},
    children: null,
  },
  render: () => <ControlledExternalState />,
};

export const CustomTriggerOpener: Story = {
  args: {
    defaultOpen: false,
    open: false,
    onOpenChange: () => {},
    children: null,
  },
  render: () => (
    <div className='flex items-center justify-center p-4 position-static'>
      <Modal.Root>
        <Modal.Trigger asChild>
          <button className='flex items-center justify-center h-12 p-4 text-white bg-teal-800 rounded-full'>
            Custom Trigger 🔥
          </button>
        </Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop />
          <Modal.Content>
            <Modal.Header>
              <Modal.Eyebrow>Basic Modal Eyebrow text</Modal.Eyebrow>
              <Modal.Title>Title goes here</Modal.Title>
              <Modal.Close />
            </Modal.Header>
            <div className='h-20 bg-slate-100'>
              <p>This is a modal content.</p>
            </div>
            <Modal.Footer>
              <Modal.Cancel>Cancel</Modal.Cancel>
              <Modal.Confirm>Confirm</Modal.Confirm>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  ),
};

export const CloseOnConfirm: Story = {
  args: {
    defaultOpen: false,
    open: false,
    onOpenChange: () => {},
    children: null,
  },
  render: () => (
    <div className='flex items-center justify-center p-4 position-static'>
      <Modal.Root>
        <Modal.Trigger>Open Modal</Modal.Trigger>
        <Modal.Portal>
          <Modal.Backdrop />
          <Modal.Content>
            <Modal.Header>
              <Modal.Eyebrow>Basic Modal Eyebrow text</Modal.Eyebrow>
              <Modal.Title>Title goes here</Modal.Title>
              <Modal.Close />
            </Modal.Header>
            <div className='h-20 bg-slate-100'>
              <p>This is a modal content.</p>
            </div>
            <Modal.Footer>
              <Modal.Cancel>Cancel</Modal.Cancel>
              <Modal.Confirm shouldCloseOnClick={true}>Confirm</Modal.Confirm>
            </Modal.Footer>
          </Modal.Content>
        </Modal.Portal>
      </Modal.Root>
    </div>
  ),
};
