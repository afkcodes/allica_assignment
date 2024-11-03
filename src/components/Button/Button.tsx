import { cva } from 'class-variance-authority';
import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { ButtonProps } from './button.types';

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 ring-offset-2 focus-visible:ring-secondary disabled:pointer-events-none ',
  {
    variants: {
      variant: {
        primary: `bg-primary text-white 
          hover:bg-primary-hover
          active:bg-primary-active
          disabled:bg-accent-disabled-bg disabled:text-accent-disabled-fg`,
        secondary: `bg-white text-primary border border-primary 
          hover:bg-secondary-hover hover:text-primary-hover hover:border-primary-hover
          active:bg-secondary-active active:text-primary-active active:border-primary-active
          disabled:border-accent-disabled-bg disabled:text-accent-disabled-fg`,
        ghost: `text-primary 
          hover:bg-secondary-hover hover:text-primary-hover
          active:bg-secondary-active active:text-primary-active
          disabled:text-accent-disabled-fg`,
      },
      size: {
        base: 'px-5 py-4 text-base',
      },
      fullWidth: {
        true: 'w-full min-w-[120px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'base',
      fullWidth: false,
    },
  }
);

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    return (
      <button
        className={twMerge(buttonVariants({ variant, size, fullWidth }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
