import qs from 'query-string';
import { GetRandomUsersParams, RandomUserResponse } from 'types/random-user';
import fetch from './fetch';

const RANDOM_USER_API_ENDPOINT = 'https://randomuser.me';

export async function getRandomUsers({
  page = 1,
  results = 10,
  inc,
  filters: { gender, keyword } = {},
  sort: { sortBy, order } = {},
}: GetRandomUsersParams) {
  const url = qs.stringifyUrl({
    url: `${RANDOM_USER_API_ENDPOINT}/api/1.3/`,
    query: {
      page,
      results,
      nat: 'us,gb,ie',
      inc: inc ?? 'login,name,email,gender,registered',
      gender,
      keyword,
      sortBy,
      order,
    },
  });

  const response: RandomUserResponse = await fetch(url);
  return response;
}
