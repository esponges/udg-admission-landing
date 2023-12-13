import { twMerge as tw } from 'tailwind-merge';

type BaseButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children: React.ReactNode;
  baseStyle?: string;
  styles?: string;
  modifier?: string;
};

// todo: move to its own Atom?
export const BaseButton = ({
  type = 'button',
  onClick,
  className,
  disabled = false,
  children,
  baseStyle,
  styles,
  modifier,
  ...rest
}: BaseButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    className={tw(baseStyle, styles, modifier, className)}
    disabled={disabled}
    {...rest}
  >
    {children}
  </button>
);
