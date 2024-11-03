import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost'],
    },
    disabled: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },

    onClick: {
      action: 'clicked',
    },
  },
  args: {
    onClick: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
    disabled: false,
    asChild: false,
    fullWidth: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    disabled: false,
    asChild: false,
    fullWidth: false,
  },
};

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
    disabled: false,
    asChild: false,
    fullWidth: false,
  },
};

export const Disabled: Story = {
  args: {
    variant: 'primary',
    children: 'Disabled Button',
    disabled: true,
    fullWidth: false,
    asChild: false,
  },
};

export const FullWidth: Story = {
  args: {
    variant: 'primary',
    children: 'Full Width Button',
    fullWidth: true,
    asChild: false,
    disabled: false,
  },
  render: ({ ...args }) => {
    return (
      <div className='flex flex-col items-center justify-center h-40 gap-4 text-white bg-black w-96'>
        <Button {...args} />
      </div>
    );
  },
};

export const AutoWidth: Story = {
  args: {
    children: 'Long text here to show width growing automatically',
    variant: 'primary',
  },
};

export const CustomClass: Story = {
  args: {
    children: 'Custom Class',
    variant: 'primary',
    className: 'rounded-full active:scale-95 transition-transform',
  },
};
