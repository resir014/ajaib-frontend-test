import { SearchIcon } from '@heroicons/react/solid';
import * as React from 'react';

export function UsersFilterForm() {
  return (
    <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
      <div>
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
            placeholder="Search..."
          />
          <button
            type="button"
            className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-indigo-600 text-sm font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <SearchIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          className="mt-1 block w-full min-w-[200px] pl-3 pr-10 py-2 text-base border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          defaultValue=""
        >
          <option value="">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
    </div>
  );
}
