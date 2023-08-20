/* eslint-disable no-prototype-builtins */
import Consoler from './consoler';

const CentraProductsObjectFilter = ({ props }: any) => {
  try {
    const { prop } = props;

    if (prop.hasOwnProperty('product')) {
      const { product } = prop;

      return product;
    }

    if (!prop.hasOwnProperty('product')) {
      const { products } = prop;

      return products;
    }

    return props;
  } catch (error) {
    Consoler({
      err: error,
      message: `Error at Filtering Centra Data at centraProductsObjectFilter.ts: ${JSON.stringify(error)}`,
      type: 'error'
    });

    return error;
  }
};

export default CentraProductsObjectFilter;
