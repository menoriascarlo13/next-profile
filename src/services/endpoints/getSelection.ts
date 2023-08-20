import { ApiKey, Cookie } from '@/types/Data';

import centraEndpoint from '../centraEndpoint';
import Consoler from '../consoler';

type GetSelectionProps = ApiKey & {
  cookies?: Cookie;
};

const getSelection = async ({ apiKey, cookies }: GetSelectionProps) => {
  try {
    const response = await centraEndpoint({
      endpoint: 'selection',
      options: {
        headers: {
          'API-Authorization': apiKey,
          'Content-Type': 'application/json',
          'api-token': cookies?.token || ''
        }
      }
    });

    return response;
  } catch (err) {
    Consoler({
      err,
      message: `Error Fetching Selection at getSelection: ${JSON.stringify(err)}`,
      type: 'error'
    });

    return err;
  }
};

export default getSelection;
