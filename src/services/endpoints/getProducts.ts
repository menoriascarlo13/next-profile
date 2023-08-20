/* eslint-disable no-console */
import { ApiKey, Cookie } from '@/types/Data';

import centraEndpoint from '../centraEndpoint';
import Consoler from '../consoler';

type GetProductsProps = ApiKey & {
  cookies?: Cookie;
  option?: {
    language?: string;
    limit?: number;
    market?: string;
    priceList?: string;
    skipFirst?: number;
    uri?: string;
  };
};

const getProductByUri = async ({ apiKey, cookies, option }: GetProductsProps) => {
  try {
    const { products } = (await centraEndpoint({
      endpoint: 'products',
      options: {
        body: JSON.stringify(option),
        headers: {
          'API-Authorization': apiKey,
          'Content-Type': 'application/json',
          'api-token': cookies?.token || ''
        },
        method: 'POST'
      }
    })) as any;

    return products;
  } catch (error) {
    Consoler({
      err: error,
      message: `Unable to fetch product from getProducts endpointL ${JSON.stringify(error)}`,
      type: 'error'
    });

    return error;
  }
};

export default getProductByUri;
