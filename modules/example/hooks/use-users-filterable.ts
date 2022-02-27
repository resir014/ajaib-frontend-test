import useSWR from 'swr';
import { RandomUserResponse } from 'types/random-user';
import fetch from '~/lib/fetch';

export function useUsersFilterable(page = 1, results = 10) {
  const { data, error } = useSWR<RandomUserResponse, unknown>(
    `/api/random-user?page=${page}&results=${results}`,
    fetch
  );

  return {
    users: data?.results,
    info: data?.info,
    isLoading: !!data && !!error,
    isError: error,
  } as const;
}
