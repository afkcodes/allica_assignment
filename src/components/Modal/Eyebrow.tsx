import { twMerge } from 'tailwind-merge';
import { BaseModalProps } from './modal.types';

/**
 * Modal Eyebrow Text component - Displays Modal Eyebrow text
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *  <Modal.Header>
 *      <Modal.Eyebrow>Modal Eyebrow</Modal.Eyebrow>
 *   </Modal.Header>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const Eyebrow = ({ children, className, label, description }: BaseModalProps) => {
  return (
    <p
      aria-labelledby={label}
      aria-describedby={description}
      className={twMerge('text-[#424E61]', className)}>
      {children}
    </p>
  );
};

Eyebrow.displayName = 'Eyebrow';

export default Eyebrow;
