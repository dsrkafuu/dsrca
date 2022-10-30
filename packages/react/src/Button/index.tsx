import './index.scss';
import clsx from 'clsx';

export type ButtonType = 'default' | 'primary' | 'success' | 'danger';

export interface ButtonProps {
  type?: ButtonType;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

function Button({ type, className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'dsr-button',
        {
          'dsr-button__primary': type === 'primary',
          'dsr-button__success': type === 'success',
          'dsr-button__danger': type === 'danger',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
