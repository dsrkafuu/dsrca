import './index.scss';
import clsx from 'clsx';

export type CardMode = 'default' | 'outline';
export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps {
  mode?: CardMode;
  size?: CardSize;
  plain?: boolean;
  className?: string;
  children?: React.ReactNode;
  [key: string]: unknown;
}

function Card({
  mode = 'default',
  size = 'md',
  plain,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        'dsr-card',
        {
          'dsr-card__default': mode === 'default',
          'dsr-card__outline': mode === 'outline',
          'dsr-card__sm': size === 'sm',
          'dsr-card__md': size === 'md',
          'dsr-card__lg': size === 'lg',
          'dsr-card__plain': !!plain,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
