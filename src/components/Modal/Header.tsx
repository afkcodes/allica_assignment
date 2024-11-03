import { twMerge } from 'tailwind-merge';
import { BaseModalProps } from './modal.types';

/**
 * Modal Header component - Container for Eyebrow text, title and close button
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *  <Modal.Header>
 *      <Modal.Eyebrow>Modal Title</Modal.Eyebrow>
 *      <Modal.Title>Modal Title</Modal.Title>
 *      <Modal.Close/>
 *   </Modal.Header>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const Header = ({
  children,
  className,
  label = 'header',
  description = 'modal_header_content',
}: BaseModalProps) => {
  return (
    <div
      aria-labelledby={label}
      aria-describedby={description}
      className={twMerge('pt-10', className)}>
      {children}
    </div>
  );
};

Header.displayName = 'Header';

export default Header;
