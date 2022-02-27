/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextApiHandler } from 'next';
import { parseNumber } from '~/lib/query-parser';
import { getRandomUsers } from '~/lib/random-user';

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const { page, results } = req.query;
      const users = await getRandomUsers(parseNumber(page), parseNumber(results));

      if (users.results.length) {
        return res.status(200).json(users);
      } else {
        return res.status(200).json({ results: [] });
      }
    } catch (err: unknown) {
      return res.status(200).json({ results: [] });
    }
  }

  return res.status(404).json({ error: 'Page not found' });
};

export default handler;
