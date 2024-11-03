import { useEffect, useState } from 'react';
import { ModalRootProps } from './modal.types';
import { ModalContext } from './ModalContext';

/**
 * Modal Root component - Manages modal state and context
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>Content</Modal.Content>
 * </Modal.Root>
 * ```
 */

const Root = ({
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
}: ModalRootProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen);
  const isControlled = controlledOpen !== undefined;

  const open = isControlled ? controlledOpen : uncontrolledOpen;
  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setUncontrolledOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isControlled, controlledOpen, open]);

  return (
    <ModalContext.Provider value={{ open, setOpen }}>{children}</ModalContext.Provider>
  );
};

export default Root;
