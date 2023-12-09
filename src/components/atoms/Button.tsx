"use client";

import { twMerge as tw } from 'tailwind-merge';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

interface Props {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  pendingMessage?: string;
  disabled?: boolean;
}

const Button = ({
  primary,
  modifier,
  children,
  type = 'button',
  onClick,
  pendingMessage = `Loading...`,
  disabled = false,
  ...rest
}: Props) => {
  // pending should be enabled in the child component that invokes the server action
  const { pending } = useFormStatus();
  
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={tw(`${baseStyle} ${styles} ${modifier ?? ``}`)}
      disabled={pending || disabled}
      {...rest}
    >
      {pending ? pendingMessage : children}
    </button>
  );
};

export default Button;
