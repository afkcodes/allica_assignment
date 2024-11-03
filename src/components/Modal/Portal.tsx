import { createPortal } from 'react-dom';
import { useModal } from './ModalContext';
import { BaseModalProps } from './modal.types';

/**
 * Creates a portal for the modal to display
 * @param param0 children:ReactNode - A Node to display in a portal
 * @returns React Portal or null if modal is closed
 */

const Portal = ({ children }: BaseModalProps) => {
  const { open } = useModal();

  if (!open) return null;

  return createPortal(
    <div className='relative w-full' tabIndex={-1}>
      {children}
    </div>,
    document.body
  );
};

export default Portal;
