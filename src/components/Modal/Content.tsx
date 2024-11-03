import { twMerge } from 'tailwind-merge';
import { BaseModalProps } from './modal.types';

/**
 * Modal Content component - Container for Modal Header, footer and  body
 * @example
 * ```tsx
 * <Modal.Root>
 *   <Modal.Trigger>Open</Modal.Trigger>
 *   <Modal.Content>
 *      <Modal.Header>
 *       <Modal.Eyebrow>Modal Title</Modal.Eyebrow>
 *       <Modal.Title  Modal.Title>Modal Title</Modal.Title>
 *       <Modal.Close/>
 *     </Modal.Header>
 *   <Modal.Footer>
 *     <Modal.Cancel>Cancel</Modal.Cancel>
 *     <Modal.Confirm>Confirm</Modal.Confirm>
 *     <Modal.Close/>
 *  </Modal.Footer>
 * </Modal.Content>
 * </Modal.Root>
 * ```
 */

const Content = ({
  children,
  className,
  label = 'content',
  description = 'modal_content',
}: BaseModalProps) => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center pointer-events-none'>
      <div
        role='dialog'
        aria-modal='true'
        tabIndex={-1}
        aria-labelledby={label}
        aria-describedby={description}
        className={twMerge(
          'relative sm:h-screen md:h-auto md:w-[504px] lg:w-[568px] w-full p-4 lg:p-6 space-y-4 mx-auto bg-white rounded-[4px] shadow-lg z-[51] pointer-events-auto',
          className
        )}>
        {children}
      </div>
    </div>
  );
};

export default Content;
