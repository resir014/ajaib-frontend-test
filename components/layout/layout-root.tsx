import clsx from 'clsx';
import * as React from 'react';

export type LayoutRootProps = React.ComponentPropsWithoutRef<'div'>;

export const LayoutRoot = React.forwardRef<HTMLDivElement, LayoutRootProps>(
  ({ className, style, children, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx('flex flex-col min-h-screen', className)}
        style={style}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

LayoutRoot.displayName = 'LayoutRoot';
