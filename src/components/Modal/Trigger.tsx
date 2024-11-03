import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Button } from '../Button/Button';
import { TriggerProps } from './modal.types';
import { useModal } from './ModalContext';

/**
 * Modal Trigger component - Allows Opening of the Modal
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const Trigger = ({
  children,
  className,
  label = 'modal trigger',
  description = 'opens the modal when clicked',
  asChild,
  ...props
}: TriggerProps) => {
  const { setOpen } = useModal();

  if (asChild) {
    return React.cloneElement(children as React.ReactElement, {
      onClick: () => setOpen(true),
      type: 'button',
      'aria-labelledby': label,
      'aria-describedby': description,
      ...props,
    });
  }

  return (
    <Button
      variant='primary'
      aria-labelledby={label}
      aria-describedby={description}
      onClick={() => setOpen(true)}
      className={twMerge(className)}
      {...props}>
      {children}
    </Button>
  );
};

Trigger.displayName = 'Trigger';

export default Trigger;
