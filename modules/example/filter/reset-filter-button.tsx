import * as React from 'react';
import { useGenderFilterState, useKeywordFilterState } from '../store/filter-store';

export function ResetFilterButton() {
  const [, setGender] = useGenderFilterState();
  const [, setKeyword] = useKeywordFilterState();

  const handleClick = React.useCallback(() => {
    setGender(undefined);
    setKeyword(undefined);
  }, [setGender, setKeyword]);

  return (
    <div>
      <button
        type="button"
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleClick}
      >
        Reset filter
      </button>
    </div>
  );
}
