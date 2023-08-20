import { BRAND_NAME, CATEGORY_SLUG, DEFAULT_SLUG, PRODUCT_PAGE_SLUG } from '@/configs/const';
import CentraObjectFilter from '@/services/centraObjectFilter';
import Consoler from '@/services/consoler';

const getHeadTitleResolver = ({ pageProps }: any): string => {
  try {
    const { query, story } = pageProps;
    const slug = query?.slug || DEFAULT_SLUG;
    const currentSlug = slug[0];
    let resolvedTitle = '';

    switch (currentSlug) {
      case PRODUCT_PAGE_SLUG: {
        const product = CentraObjectFilter({ props: pageProps, subFilter: 'product', toFilter: 'prop' });
        const productModel = CentraObjectFilter({ props: product, toFilter: 'product' });
        const { name } = productModel;

        resolvedTitle = `${name.toUpperCase()} | ${BRAND_NAME}`;
        break;
      }
      case CATEGORY_SLUG: {
        resolvedTitle = `${slug[slug.length - 1].toUpperCase()} | ${BRAND_NAME}`;
        break;
      }
      default: {
        resolvedTitle = `${story.name} | ${BRAND_NAME}`;
      }
    }

    return resolvedTitle;
  } catch (error) {
    Consoler({
      message: `Unable to process handling head title resolver throwing default head title instead => ${BRAND_NAME}: ${JSON.stringify(
        error
      )}`,
      type: 'info'
    });

    return BRAND_NAME;
  }
};

export default getHeadTitleResolver;
