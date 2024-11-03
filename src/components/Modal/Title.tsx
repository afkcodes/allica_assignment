import { twMerge } from 'tailwind-merge';
import { BaseModalProps } from './modal.types';

/**
 * Modal Title component - Shows Modal Title text
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *  <Modal.Header>
 *      <Modal.Title>Modal Title</Modal.Title>
 *   </Modal.Header>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const Title = ({
  children,
  label = 'title',
  description = 'modal title text',
  className,
}: BaseModalProps) => {
  return (
    <h2
      aria-labelledby={label}
      aria-describedby={description}
      className={twMerge('text-xl font-semibold mb-2', className)}>
      {children}
    </h2>
  );
};

Title.displayName = 'Title';

export default Title;
