import * as React from 'react';
import qs from 'query-string';
import useSWR from 'swr';
import { RandomUserResponse } from 'types/random-user';
import fetch from '~/lib/fetch';
import { useGenderFilterState, useKeywordFilterState } from '../store/filter-store';

export function useUsersFilterable(page = 1, results = 10) {
  const [keyword] = useKeywordFilterState();
  const [gender] = useGenderFilterState();
  const url = React.useMemo(
    () =>
      qs.stringifyUrl({
        url: '/api/random-user',
        query: {
          page,
          results,
          keyword,
          gender,
        },
      }),
    [keyword, gender, page, results]
  );
  const { data, error } = useSWR<RandomUserResponse, unknown>(() => url, fetch);

  return {
    users: data?.results,
    info: data?.info,
    isLoading: !!data && !!error,
    isError: error,
  } as const;
}
