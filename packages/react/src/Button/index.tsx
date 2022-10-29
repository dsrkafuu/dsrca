import styles from './index.module.scss';
import clsx from 'clsx';

export type ButtonType = 'default' | 'primary' | 'success' | 'danger';

export interface ButtonProps {
  type?: ButtonType;
  children?: React.ReactNode;
  [key: string]: unknown;
}

function Button({ type, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, {
        [styles.primary]: type === 'primary',
        [styles.success]: type === 'success',
        [styles.danger]: type === 'danger',
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
