'use client';

import { twMerge as tw } from 'tailwind-merge';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';
import { BaseButton } from './BaseButton';

type Props = {
  primary?: boolean;
  children: React.ReactNode;
  modifier?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  pendingMessage?: string;
  disabled?: boolean;
  link?: string;
};

const Button = ({
  primary,
  modifier,
  children,
  type = 'button',
  onClick,
  pendingMessage = `Loading...`,
  disabled = false,
  link,
  ...rest
}: Props) => {
  // pending should be enabled in the child component that invokes the server action
  const { pending } = useFormStatus();
  const baseStyle = `font-sans font-medium py-2 px-4 border rounded`;
  const styles = primary
    ? `bg-indigo-600 text-white border-indigo-500 hover:bg-indigo-700`
    : `bg-white text-gray-600 border-gray-300 hover:bg-gray-100`;

  if (link) {
    return (
      <Link href={link}>
        <BaseButton
          type={type}
          onClick={onClick}
          className={tw(baseStyle, styles, modifier)}
          disabled={disabled}
          {...rest}
        >
          {children}
        </BaseButton>
      </Link>
    );
  }

  return (
    <BaseButton
      type={type}
      onClick={onClick}
      className={tw(baseStyle, styles, modifier)}
      disabled={disabled}
      {...rest}
    >
      {pending ? pendingMessage : children}
    </BaseButton>
  );
};

export default Button;
