import { CountryType } from '@/types/Country';
import { ApiKey, Cookie } from '@/types/Data';

import centraEndpoint from '../centraEndpoint';

type GetCountryAutoProps = ApiKey & {
  cookies?: Cookie;
  getCountryData: boolean;
};

type CountryReturnType = {
  country: CountryType;
  token: string;
};

const getCountryAuto = async ({ apiKey, cookies, getCountryData }: GetCountryAutoProps) => {
  if (getCountryData) {
    const { country, token } = (await centraEndpoint({
      endpoint: 'countries/auto',
      options: {
        headers: {
          'API-Authorization': apiKey,
          'Content-Type': 'application/json',
          'api-token': cookies?.token || ''
        },
        method: 'GET'
      }
    })) as CountryReturnType;

    return {
      country,
      token
    };
  }
  return {
    country: {},
    token: ''
  };
};

export default getCountryAuto;
