import clsx from 'clsx';
import * as React from 'react';

export type PageProps = React.ComponentPropsWithoutRef<'main'>;

export const Page = React.forwardRef<HTMLDivElement, PageProps>(
  ({ className, style, children, ...rest }, ref) => {
    return (
      <main ref={ref} className={clsx('flex flex-col flex-1', className)} style={style} {...rest}>
        {children}
      </main>
    );
  }
);

Page.displayName = 'Page';
