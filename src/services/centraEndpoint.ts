/* eslint-disable no-console */

// const API_URL = '';
import Consoler from './consoler';

const API_URL = process.env.NEXT_PUBLIC_CHECKOUT_API_LINK;

type CentraEndpointProps = {
  endpoint: string;
  options: Object;
};

const centraEndpoint = async <T>({ endpoint, options = {} }: CentraEndpointProps): Promise<T | null | void | Error> => {
  try {
    const response = await fetch(`${API_URL}/${endpoint}`, options)
      .then((data) => data.json())
      .catch((err: Error) => {
        Consoler({
          err,
          message: 'Error Fetching Data on Centra Endpoint: ',
          type: 'error'
        });

        return err;
      });

    if (response.errors) {
      Consoler({
        message: `Response Error has been thrown: ${JSON.stringify(response.errors)}`,
        type: 'log'
      });

      throw response.errors;
    }

    return response;
  } catch (error) {
    Consoler({
      err: error,
      message: 'Error API CentraEndpoint: ',
      type: 'error'
    });

    return null;
  }
};

export default centraEndpoint;
