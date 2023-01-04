import './index.scss';
import React from 'react';
import clsx from 'clsx';

export type InputMode = 'default' | 'outline';

export interface InputProps {
  mode?: InputMode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  className?: string;
  [key: string]: unknown;
}

function Input({
  mode = 'default',
  value,
  onChange,
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={clsx(
        'dsr-input',
        {
          'dsr-input__default': mode === 'default',
          'dsr-input__outline': mode === 'outline',
        },
        className
      )}
      value={value}
      onChange={onChange}
      {...props}
    />
  );
}

export default Input;
