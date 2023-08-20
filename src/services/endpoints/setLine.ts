import centraEndpoint from '../centraEndpoint';

const lineEndpoint = async ({ apiKey, cookies, endpoint, method }: any) => {
  const response = (await centraEndpoint({
    endpoint: `lines/${endpoint}`,
    options: {
      headers: {
        'API-Authorization': apiKey,
        'Content-Type': 'application/json',
        'api-token': cookies?.token || ''
      },
      method
    }
  })) as any;

  return response;
};

export default lineEndpoint;
