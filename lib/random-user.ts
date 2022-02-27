import qs from 'query-string';
import { RandomUserResponse } from 'types/random-user';
import fetch from './fetch';

const RANDOM_USER_API_ENDPOINT = 'https://randomuser.me';

export async function getRandomUsers(page = 1, results = 10, inc?: string) {
  const url = qs.stringifyUrl({
    url: `${RANDOM_USER_API_ENDPOINT}/api`,
    query: {
      page,
      results,
      seed: 'ILOVETRACKMANIAESPORTS',
      inc: inc ?? 'login,name,email,gender,registered',
      nat: 'us,gb,ie',
    },
  });

  const response: RandomUserResponse = await fetch(url);
  return response;
}
