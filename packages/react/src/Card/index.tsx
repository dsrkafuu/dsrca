import styles from './index.module.scss';
import clsx from 'clsx';

export type CardMode = 'default' | 'outline';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps {
  mode?: CardMode;
  size?: CardSize;
  plain?: boolean;
  children?: React.ReactNode;
  [key: string]: unknown;
}

function Card({
  mode = 'default',
  size = 'md',
  plain,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(styles.card, {
        [styles.default]: mode === 'default',
        [styles.outline]: mode === 'outline',
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
        [styles.plain]: !!plain,
      })}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
