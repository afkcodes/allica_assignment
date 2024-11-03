import { X } from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';
import { CloseButtonProps } from './modal.types';
import { useModal } from './ModalContext';

/**
 * Modal Close button component - Dismisses the Modal on Close
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *   <Modal.Close/>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const CloseButton = ({ className, ...props }: CloseButtonProps) => {
  const { setOpen } = useModal();

  return (
    <Button
      type='button'
      aria-label='Close modal'
      className={twMerge(
        'absolute right-2 top-3 p-1  bg-transparent text-black hover:bg-transparent active:bg-transparent',
        className
      )}
      onClick={() => setOpen(false)}
      {...props}>
      <X className='w-6 h-6' />
    </Button>
  );
};

export default CloseButton;
