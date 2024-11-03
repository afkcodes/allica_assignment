import { type ButtonHTMLAttributes, type ReactNode } from 'react';

export interface ModalRootProps {
  children: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export interface ModalContextValue {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface TriggerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  label?: string;
  description?: string;
}

export interface BaseModalProps {
  children?: ReactNode;
  className?: string;
  label?: string;
  description?: string;
}

export interface CloseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  description?: string;
}

export interface ActionButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}
