import './index.scss';
import React from 'react';
import clsx from 'clsx';

export type ButtonType =
  | 'default'
  | 'primary'
  | 'success'
  | 'danger'
  | 'outline';

export interface ButtonProps {
  type?: ButtonType;
  icon?: React.ReactNode;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

function Button({
  type,
  icon,
  href,
  onClick,
  className,
  children,
  ...props
}: ButtonProps) {
  const Component = href ? 'a' : 'button';

  return (
    <Component
      onClick={onClick}
      className={clsx(
        'dsr-button',
        {
          'dsr-button__primary': type === 'primary',
          'dsr-button__success': type === 'success',
          'dsr-button__danger': type === 'danger',
          'dsr-button__outline': type === 'outline',
          'dsr-button__icon-only': icon && !children,
          'dsr-button__icon-text': icon && children,
        },
        className
      )}
      href={href}
      {...props}
    >
      {icon || null}
      {children}
    </Component>
  );
}

export default Button;
