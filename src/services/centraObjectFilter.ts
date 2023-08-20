/* eslint-disable no-prototype-builtins */
import Consoler from './consoler';

const CentraObjectFilter = ({
  props,
  subFilter = '',
  toFilter
}: {
  props: any;
  subFilter?: string;
  toFilter: string;
}) => {
  try {
    if (props.hasOwnProperty(toFilter) && subFilter.length === 0) {
      return props[toFilter];
    }

    if (props[toFilter].hasOwnProperty(subFilter)) {
      return props[toFilter][subFilter];
    }

    return props;
  } catch (error) {
    Consoler({
      err: error,
      message: `Error at Filtering Data at CentraObjectFilter.ts: ${JSON.stringify(error)}`,
      type: 'error'
    });

    return error;
  }
};

export default CentraObjectFilter;
