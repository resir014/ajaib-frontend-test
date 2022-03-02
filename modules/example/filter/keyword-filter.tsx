import * as React from 'react';
import { useKeywordFilterState } from '../store/filter-store';

export function KeywordFilter() {
  const [_value, setValue] = React.useState('');
  const [keyword, setKeyword] = useKeywordFilterState();

  const handleChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword]
  );

  React.useEffect(() => {
    setValue(keyword ?? '');
  }, [keyword, setValue]);

  return (
    <div>
      <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
        Search
      </label>
      <div className="mt-1 flex rounded-md shadow-sm">
        <div className="relative flex items-stretch flex-grow focus-within:z-10">
          <input
            type="text"
            name="keyword"
            id="keyword"
            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full min-w-[200px] sm:text-sm border-gray-300 rounded-none rounded-l-md"
            autoComplete="off"
            value={_value}
            onChange={handleChange}
            placeholder="Search..."
          />
        </div>
        <button
          type="button"
          className="-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-sm font-medium rounded-r-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          onClick={() => setKeyword(undefined)}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
