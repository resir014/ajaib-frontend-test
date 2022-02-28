import { SearchIcon } from '@heroicons/react/solid';
import * as React from 'react';
import { useKeywordFilterState } from '../store/filter-store';

export function KeywordFilter() {
  const [value, setValue] = React.useState('');
  const [, setKeyword] = useKeywordFilterState();

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
    },
    [setValue]
  );

  const handleSubmit = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      // eslint-disable-next-line no-negated-condition
      setKeyword(value !== '' ? value : undefined);
      console.log(value);
    },
    [value, setKeyword]
  );

  return (
    <form action="#" onSubmit={handleSubmit}>
      <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
        Search
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <input
          type="text"
          name="keyword"
          id="keyword"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-[200px] sm:text-sm border-gray-300 rounded-none rounded-l-md"
          autoComplete="off"
          value={value}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button
          type="submit"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-indigo-600 text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <SearchIcon className="h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Search</span>
        </button>
      </div>
    </form>
  );
}
