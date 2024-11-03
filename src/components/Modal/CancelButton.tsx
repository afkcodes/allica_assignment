import { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';
import { ActionButtonProps } from './modal.types';
import { useModal } from './ModalContext';

/**
 * Modal Cancel button component - Action Button for Cancel action, dismisses the modal
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *  <Modal.Footer>
 *      <Modal.Cancel>Confirm</Modal.Cancel>
 *   </Modal.Footer>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const CancelButton = ({
  children,
  className,
  variant = 'secondary',
  ...props
}: ActionButtonProps) => {
  const { setOpen } = useModal();

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.onClick) {
      props.onClick(e);
    }
    setOpen(false);
  };

  return (
    <Button
      variant={variant}
      aria-label='Cancel'
      onClick={handleClick}
      className={twMerge(className)}
      {...props}>
      {children ? children : <p>Cancel</p>}
    </Button>
  );
};

CancelButton.displayName = 'CancelButton';

export default CancelButton;
