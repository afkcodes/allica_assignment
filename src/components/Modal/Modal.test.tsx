import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Modal } from '.';

const TestModal = ({
  open,
  onOpenChange,
  triggerText = 'Open Modal',
  showFooter = true,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  triggerText?: string;
  showFooter?: boolean;
}) => (
  <Modal.Root open={open} onOpenChange={onOpenChange}>
    <Modal.Trigger>{triggerText}</Modal.Trigger>
    <Modal.Portal>
      <Modal.Backdrop />
      <Modal.Content>
        <Modal.Header>
          <Modal.Eyebrow>Test Eyebrow</Modal.Eyebrow>
          <Modal.Title>Test Title</Modal.Title>
          <Modal.Close />
        </Modal.Header>
        <Modal.Body>
          <div className='p-6'>
            <p>Modal Content</p>
            <input
              type='text'
              placeholder='Test input'
              className='p-2 mt-4 border rounded'
            />
          </div>
        </Modal.Body>
        {showFooter && (
          <Modal.Footer>
            <Modal.Cancel>Cancel</Modal.Cancel>
            <Modal.Confirm>Confirm</Modal.Confirm>
          </Modal.Footer>
        )}
      </Modal.Content>
    </Modal.Portal>
  </Modal.Root>
);

describe('Modal', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    document.body.innerHTML = '';
  });

  describe('Rendering', () => {
    it('renders the trigger button', () => {
      render(<TestModal />);
      expect(screen.getByText('Open Modal')).toBeInTheDocument();
    });

    it('does not render modal content initially', () => {
      render(<TestModal />);
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('opens when trigger is clicked', async () => {
      render(<TestModal />);
      await user.click(screen.getByText('Open Modal'));
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('closes on click of close backdrop', async () => {
      render(<TestModal />);
      await user.click(screen.getByText('Open Modal'));
      await user.click(screen.getByTestId('modal-backdrop'));
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('closes on click of close button', async () => {
      render(<TestModal />);
      await user.click(screen.getByText('Open Modal'));
      await user.click(screen.getByLabelText('Close modal'));
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });

    it('closes when cancel button is clicked', async () => {
      render(<TestModal />);
      await user.click(screen.getByText('Open Modal'));
      await user.click(screen.getByText('Cancel'));
      expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
    });
  });

  describe('Controlled Mode', () => {
    it('respects controlled open state', () => {
      render(<TestModal open={true} />);
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
    });

    it('calls onOpenChange when opening/closing', async () => {
      const onOpenChange = vi.fn();
      render(<TestModal onOpenChange={onOpenChange} />);

      await user.click(screen.getByText('Open Modal'));
      expect(onOpenChange).toHaveBeenCalledWith(true);

      await user.click(screen.getByTestId('modal-backdrop'));
      expect(onOpenChange).toHaveBeenCalledWith(false);
    });
  });

  describe('Modal Structure Validation', () => {
    it('renders all modal parts correctly', async () => {
      render(<TestModal />);
      await user.click(screen.getByText('Open Modal'));

      expect(screen.getByText('Test Eyebrow')).toBeInTheDocument();
      expect(screen.getByText('Test Title')).toBeInTheDocument();
      expect(screen.getByText('Modal Content')).toBeInTheDocument();
      expect(screen.getByText('Cancel')).toBeInTheDocument();
      expect(screen.getByText('Confirm')).toBeInTheDocument();
    });

    it('can render without footer', async () => {
      render(<TestModal showFooter={false} />);
      await user.click(screen.getByText('Open Modal'));

      expect(screen.queryByText('Cancel')).not.toBeInTheDocument();
      expect(screen.queryByText('Confirm')).not.toBeInTheDocument();
    });
  });

  describe('Custom Trigger Button', () => {
    it('works with asChild prop', async () => {
      render(
        <Modal.Root>
          <Modal.Trigger asChild>
            <button className='custom-class'>Custom Button</button>
          </Modal.Trigger>
          <Modal.Portal>
            <Modal.Content>
              <Modal.Body>
                <p>Content</p>
              </Modal.Body>
            </Modal.Content>
          </Modal.Portal>
        </Modal.Root>
      );

      const trigger = screen.getByText('Custom Button');
      expect(trigger).toHaveClass('custom-class');
      await user.click(trigger);
      expect(screen.getByText('Content')).toBeInTheDocument();
    });
  });
});
