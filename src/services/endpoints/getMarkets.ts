import { ApiKey, Cookie } from '@/types/Data';

import { MarketType } from '../../types/Endpoint';
import centraEndpoint from '../centraEndpoint';

type GetMarketProps = ApiKey & {
  cookies?: Cookie;
  getMarketsData: boolean;
};

type MarketsReturnType = {
  markets: Array<MarketType>;
};

const getMarkets = async ({ apiKey, cookies, getMarketsData }: GetMarketProps) => {
  if (getMarketsData) {
    const { markets } = (await centraEndpoint({
      endpoint: 'markets',
      options: {
        headers: {
          'API-Authorization': apiKey,
          'Content-Type': 'application/json',
          'api-token': cookies?.token || ''
        },
        method: 'GET'
      }
    })) as MarketsReturnType;

    return markets;
  }

  return null;
};

export default getMarkets;
