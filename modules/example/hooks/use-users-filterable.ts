import * as React from 'react';
import debounce from 'lodash/debounce';
import qs from 'query-string';
import useSWR from 'swr';
import { RandomUserResponse } from 'types/random-user';
import fetch from '~/lib/fetch';
import { useGenderFilterState, useKeywordFilterState } from '../store/filter-store';

export function useUsersFilterable(page = 1, results = 10) {
  const [keyword] = useKeywordFilterState();
  const [gender] = useGenderFilterState();
  const [url, setUrl] = React.useState<string | null>(null);

  const debounceRef = React.useRef(
    debounce((toChange: string | null) => {
      setUrl(toChange);
    }, 750)
  );

  // Debouncing setting URL to delay `swr` hook while form changes are still happening.
  React.useEffect(() => {
    debounceRef.current(
      qs.stringifyUrl({
        url: '/api/random-user',
        query: {
          page,
          results,
          keyword,
          gender,
        },
      })
    );
  }, [keyword, gender, page, results]);

  const { data, error } = useSWR<RandomUserResponse, unknown>(() => url, fetch);

  return {
    users: data?.results,
    info: data?.info,
    isLoading: !!data && !!error,
    isError: error,
  } as const;
}
