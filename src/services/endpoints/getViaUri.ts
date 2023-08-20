/* eslint-disable no-console */
import { ApiKey, Cookie } from '@/types/Data';

import centraEndpoint from '../centraEndpoint';

type ForType = 'category' | 'product' | 'cmsArticle';

type GetViaUriPropType = ApiKey & {
  cookies?: Cookie;
  option?: {
    for?: ForType[];
    language?: string;
    market?: string;
    priceList?: string;
    uri: string;
  };
};

const getViaUri = async ({ apiKey, cookies, option }: GetViaUriPropType) => {
  try {
    const product = (await centraEndpoint({
      endpoint: 'uri',
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

    return product;
  } catch (error) {
    console.error('Error Fetching Data from getViaUri: ', error);

    return error;
  }
};

export default getViaUri;
