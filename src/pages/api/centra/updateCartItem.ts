import type { NextApiRequest, NextApiResponse } from 'next';

import lineEndpoint from '../../../services/endpoints/setLine';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { body, cookies } = req;
  const { action, line, quantity } = body;
  const apiKey = process.env.NEXT_PUBLIC_CHECKOUT_API_KEY;
  const method = action === 'increase' ? 'POST' : 'DELETE';
  const endpoint = action === 'remove' ? `${line}` : `${line}/quantity/${quantity}`;

  const { selection } = await lineEndpoint({
    apiKey,
    cookies,
    endpoint,
    line,
    method,
    quantity
  });

  const { discounts, items, totals } = selection;

  res.status(200).json({ ...discounts, items, ...totals, status: res.statusCode, totals });
}
