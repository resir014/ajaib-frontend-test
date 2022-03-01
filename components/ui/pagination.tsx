import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import * as React from 'react';

export interface PaginationProps {
  current: number;
  total: number;
  onSelect?: (page: number) => void;
}

export function Pagination({ current, total, onSelect }: PaginationProps) {
  const handleSelectPage = React.useCallback(
    (page: number) => {
      if (onSelect) {
        onSelect(page);
      }
    },
    [onSelect]
  );

  const renderPages = () => {
    const maxButtons = 5;
    const pageButtons: React.ReactNode[] = [];

    let startPage: number, endPage: number;

    if (maxButtons < total) {
      startPage = Math.max(
        Math.min(current - Math.floor(maxButtons / 2), total - maxButtons + 1),
        1
      );
      endPage = startPage + maxButtons - 1;
    } else {
      startPage = 1;
      endPage = total;
    }

    for (let page = startPage; page <= endPage; ++page) {
      pageButtons.push(
        <button
          type="button"
          key={page}
          onClick={() => (typeof page === 'number' ? handleSelectPage(page) : null)}
          aria-current={page === current ? 'page' : undefined}
          className={clsx(
            page === current
              ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600'
              : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50',
            'relative inline-flex items-center px-4 py-2 border text-sm font-medium'
          )}
        >
          {page}
        </button>
      );
    }

    return pageButtons;
  };

  return (
    <nav
      className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
      aria-label="Pagination"
    >
      <button
        type="button"
        disabled={current === 1}
        onClick={() => handleSelectPage(current - 1)}
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed"
      >
        <span className="sr-only">Previous</span>
        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
      </button>
      {renderPages()}
      <button
        type="button"
        disabled={current === total}
        onClick={() => handleSelectPage(current + 1)}
        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:cursor-not-allowed"
      >
        <span className="sr-only">Next</span>
        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
      </button>
    </nav>
  );
}
