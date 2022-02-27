import clsx from 'clsx';
import * as React from 'react';

export type PageContentProps = React.ComponentPropsWithoutRef<'main'>;

export const PageContent = React.forwardRef<HTMLDivElement, PageContentProps>(
  ({ className, style, children, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={clsx('flex flex-col flex-1 shadow-inner bg-gray-100 p-4', className)}
        style={style}
        {...rest}
      >
        {children}
      </section>
    );
  }
);

PageContent.displayName = 'PageContent';
