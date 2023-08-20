import { ApiKey, Cookie } from '@/types/Data';
import { LanguageType } from '@/types/Endpoint';

import centraEndpoint from '../centraEndpoint';

type GetLanguagesProps = ApiKey & {
  cookies?: Cookie;
  getLanguagesData: boolean;
};

type LanguageReturnType = {
  languages: Array<LanguageType>;
};

const getLanguages = async ({ apiKey, cookies, getLanguagesData }: GetLanguagesProps) => {
  if (getLanguagesData) {
    const { languages } = (await centraEndpoint({
      endpoint: 'languages',
      options: {
        headers: {
          'API-Authorization': apiKey,
          'Content-Type': 'application/json',
          'api-token': cookies?.token || ''
        },
        method: 'GET'
      }
    })) as LanguageReturnType;

    return languages;
  }

  return null;
};

export default getLanguages;
