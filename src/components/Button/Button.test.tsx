import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  // Testing the rendering behaviour
  describe('Rendering', () => {
    it('renders button with default props', () => {
      render(<Button variant='primary'>Click Me</Button>);

      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('bg-primary');
    });

    it('renders with different variants', () => {
      render(<Button variant='primary'>Primary Button</Button>);
      let button = screen.getByRole('button', { name: /primary button/i });
      expect(button).toHaveClass('bg-primary');

      render(<Button variant='secondary'>Secondary Button</Button>);
      button = screen.getByRole('button', { name: /secondary button/i });
      expect(button).toHaveClass('bg-white', 'text-primary', 'border-primary');

      render(<Button variant='ghost'>Ghost Button</Button>);
      button = screen.getByRole('button', { name: /ghost button/i });
      expect(button).toHaveClass('text-primary');
    });

    it('renders full width when specified', () => {
      render(<Button fullWidth>Full Width</Button>);
      const button = screen.getByRole('button', { name: /full width/i });
      expect(button).toHaveClass('w-full');
    });

    it('applies custom className', () => {
      render(
        <Button className='bg-red-500' data-testid='custom-button'>
          Custom
        </Button>
      );
      const button = screen.getByTestId('custom-button');
      expect(button).toHaveClass('bg-red-500');
    });

    it('applies disabled styles when disabled', () => {
      render(<Button disabled>Disabled Button</Button>);
      const button = screen.getByRole('button', { name: /disabled button/i });
      expect(button).toHaveClass(
        'disabled:bg-accent-disabled-bg',
        'disabled:text-accent-disabled-fg'
      );
      expect(button).toBeDisabled();
    });
  });

  // Testing the interactions
  describe('interactions', () => {
    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });

      await user.click(button);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should not call onclick when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(
        <Button onClick={handleClick} disabled>
          Disabled Button
        </Button>
      );
      const button = screen.getByRole('button', { name: /disabled button/i });

      await user.click(button);
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('is keyboard accessible', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<Button onClick={handleClick}>Click Me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });

      button.focus();
      expect(button).toHaveFocus();

      await user.keyboard('[Space]');
      expect(handleClick).toHaveBeenCalledTimes(1);

      await user.keyboard('[Enter]');
      expect(handleClick).toHaveBeenCalledTimes(2);
    });
  });
});
