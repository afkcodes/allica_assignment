import { twMerge } from 'tailwind-merge';
import { BaseModalProps } from './modal.types';

/**
 * Modal Footer component - Container for Action buttons Confirm and cancel
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *  <Modal.Footer>
 *      <Modal.Cancel>Cancel</Modal.Cancel>
 *      <Modal.Confirm>Confirm</Modal.Confirm>
 *      <Modal.Close/>
 *   </Modal.Footer>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const Footer = ({
  children,
  className,
  label = 'footer',
  description = 'modal_footer_content',
}: BaseModalProps) => {
  return (
    <div
      aria-labelledby={label}
      aria-describedby={description}
      className={twMerge('flex sm:flex-col md:flex-row justify-end gap-4', className)}>
      {children}
    </div>
  );
};

export default Footer;
