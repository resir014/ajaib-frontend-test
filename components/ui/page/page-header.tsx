import * as React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export interface BreadcrumbItem {
  title: string;
  href: string;
  as?: string;
  isCurrent?: boolean;
}

export interface PageHeaderProps {
  pageTitle: string;
  actions?: React.ReactNode[];
  breadcrumbs?: BreadcrumbItem[];
}

export function PageHeader({ pageTitle, actions, breadcrumbs }: PageHeaderProps) {
  return (
    <header className="p-4">
      <div>
        <nav className="sm:hidden" aria-label="Back">
          <a
            href="#"
            className="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <ChevronLeftIcon
              className="flex-shrink-0 -ml-1 mr-1 h-5 w-5 text-gray-400"
              aria-hidden
            />
            Back
          </a>
        </nav>
        <nav className="hidden sm:flex" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-4">
            <li>
              <div className="flex">
                <Link href="/">
                  <a className="text-sm font-medium text-gray-500 hover:text-gray-700">Home</a>
                </Link>
              </div>
            </li>
            {breadcrumbs?.map(item => (
              <li key={item.href}>
                <div className="flex items-center">
                  <ChevronRightIcon className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden />
                  <Link href={item.href} as={item.as}>
                    <a
                      className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                      aria-current={item.isCurrent ? 'page' : undefined}
                    >
                      {item.title}
                    </a>
                  </Link>
                </div>
              </li>
            ))}
          </ol>
        </nav>
      </div>
      <div className="mt-2 md:flex md:items-center md:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            {pageTitle}
          </h2>
        </div>
        {actions && <div className="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">{actions}</div>}
      </div>
    </header>
  );
}
