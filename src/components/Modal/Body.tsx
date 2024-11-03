import { twMerge } from 'tailwind-merge';
import { BaseModalProps } from './modal.types';

/**
 * Modal Content component - Slot Component where Content Body is shown
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *  <Modal.Body>
 *      Body Content
 *   </Modal.Body>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const Body = ({ children, className, label, description }: BaseModalProps) => {
  return (
    <div
      aria-labelledby={label}
      aria-describedby={description}
      tabIndex={-1}
      className={twMerge(className)}>
      {children}
    </div>
  );
};

export default Body;
