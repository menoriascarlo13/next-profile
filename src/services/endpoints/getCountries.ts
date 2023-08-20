import { CountryType } from '@/types/Country';
import { ApiKey, Cookie } from '@/types/Data';

import centraEndpoint from '../centraEndpoint';

type GetShippingCountriesProps = ApiKey & {
  cookies?: Cookie;
  getShippingCountryData: boolean;
};

type ShippingCountryReturnType = {
  countries: CountryType[];
  token: string;
};

const getShippingCountries = async ({ apiKey, cookies, getShippingCountryData }: GetShippingCountriesProps) => {
  if (getShippingCountryData) {
    const { countries } = (await centraEndpoint({
      endpoint: 'countries',
      options: {
        headers: {
          'API-Authorization': apiKey,
          'Content-Type': 'application/json',
          'api-token': cookies?.token
        },
        method: 'GET'
      }
    })) as ShippingCountryReturnType;

    return countries;
  }

  return null;
};

export default getShippingCountries;
