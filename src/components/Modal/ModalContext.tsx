import { createContext, useContext } from 'react';
import { ModalContextValue } from './modal.types';

/**
 * Creates context for the modal component
 */
const ModalContext = createContext<ModalContextValue | undefined>(undefined);

/**
 * useModal: hook to handle modal context,
 * @returns the modal context
 */

const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('Modal components must be wrapped in <Modal.Root>');
  }
  return context;
};

export { ModalContext, useModal };
