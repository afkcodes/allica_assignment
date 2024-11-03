import { MouseEvent } from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';
import { ActionButtonProps } from './modal.types';
import { useModal } from './ModalContext';

/**
 * Modal Confirm button component - Action Button for confirm action
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *  <Modal.Footer>
 *      <Modal.Confirm>Confirm</Modal.Confirm>
 *   </Modal.Footer>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const ConfirmButton = ({
  children,
  className,
  variant = 'primary',
  shouldCloseOnClick = false,
  ...props
}: ActionButtonProps & {
  shouldCloseOnClick?: boolean;
}) => {
  const { setOpen } = useModal();

  const handleClick = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.onClick) {
      props.onClick(e);
    }
    if (shouldCloseOnClick) {
      setOpen(false);
    }
  };

  return (
    <Button
      variant={variant}
      aria-label='Confirm'
      onClick={handleClick}
      className={twMerge(className)}
      {...props}>
      {children ? children : <p>Cancel</p>}
    </Button>
  );
};

export default ConfirmButton;
