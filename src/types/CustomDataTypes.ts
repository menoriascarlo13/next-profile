import { LanguageType, MarketType } from '@/types/Endpoint';

import { CentraProductType } from './CentraProductType';
import { CountryType } from './Country';

export type CustomDataProps = {
  cookies?: Record<string, string>;
  getCountryData?: boolean;
  getLanguagesData?: boolean;
  getMarketsData?: boolean;
  getShippingCountryData?: boolean;
  hasCookies?: boolean;
  hasQuery?: boolean;
  query?: { [key: string]: string | string[] | undefined };
};

export type CustomDataReturnType = CountryType & {
  // [key: string]: string | CountryType | boolean | LanguageType[] | MarketType[] | CountryType[] | CountryType;
  defaultCountry?: CountryType;
  languages?: LanguageType[] | null;
  markets?: MarketType[] | null;
  products?: CentraProductType[];
  shippingCountries?: CountryType[] | null;
  token?: string;
};
