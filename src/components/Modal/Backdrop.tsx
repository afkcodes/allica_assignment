import { twMerge } from 'tailwind-merge';
import { BaseModalProps } from './modal.types';
import { useModal } from './ModalContext';

/**
 * Modal Backdrop Component - Shows a backdrop for the modal
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Backdrop/>
 *   <Modal.Content>
 *  <Modal.Footer>
 *      <Modal.Confirm>Confirm</Modal.Confirm>
 *   </Modal.Footer>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const Backdrop = ({
  className,
  label = 'backdrop',
  description = 'modal_backdrop',
}: BaseModalProps) => {
  const { setOpen } = useModal();

  return (
    <div
      aria-labelledby={label}
      data-testid='modal-backdrop'
      aria-describedby={description}
      className={twMerge('fixed inset-0 bg-[#0A1424CC] z-50', className)}
      onClick={() => setOpen(false)}
    />
  );
};

Backdrop.displayName = 'Backdrop';

export default Backdrop;
