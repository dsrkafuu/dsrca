import './index.scss';
import React from 'react';
import clsx from 'clsx';

export type TextAreaMode = 'default' | 'outline';

export interface TextAreaProps {
  mode?: TextAreaMode;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  rows?: number;
  className?: string;
  [key: string]: unknown;
}

function TextArea({
  mode = 'default',
  value,
  onChange,
  rows,
  className,
  ...props
}: TextAreaProps) {
  return (
    <textarea
      className={clsx(
        'dsr-textarea',
        {
          'dsr-textarea__default': mode === 'default',
          'dsr-textarea__outline': mode === 'outline',
        },
        className
      )}
      value={value}
      onChange={onChange}
      rows={rows}
      {...props}
    />
  );
}

export default TextArea;
