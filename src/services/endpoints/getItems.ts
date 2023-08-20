import { ApiKey, Cookie } from '@/types/Data';

import centraEndpoint from '../centraEndpoint';

type GetItemProps = ApiKey & {
  cookies?: Cookie;
  item: string;
  quantity?: number;
};

const getItems = async ({ apiKey, cookies, item, quantity = 1 }: GetItemProps) => {
  const response = await centraEndpoint({
    endpoint: `items/${item}`,
    options: {
      body: JSON.stringify({ quantity }),
      headers: {
        'API-Authorization': apiKey,
        'Content-Type': 'application/json',
        'api-token': cookies?.token || ''
      },
      method: 'POST'
    }
  });

  return response;
};

export default getItems;
