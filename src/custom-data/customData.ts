import { API_KEY, CATEGORY_SLUG, DEFAULT_SLUG, PRODUCT_LIST_PAGE_SLUG, PRODUCT_PAGE_SLUG } from '@/configs/const';
import Consoler from '@/services/consoler';
import getCategories from '@/services/endpoints/getCategories';
import getShippingCountries from '@/services/endpoints/getCountries';
import getCountryAuto from '@/services/endpoints/getCountryAuto';
import getLanguages from '@/services/endpoints/getLanguages';
import getMarkets from '@/services/endpoints/getMarkets';
import getProductByUri from '@/services/endpoints/getProducts';
import getSelection from '@/services/endpoints/getSelection';
import getViaUri from '@/services/endpoints/getViaUri';
import parseSlug from '@/tools/parseSlug';
import { CentraProductType } from '@/types/CentraProductType';
import { CustomDataProps } from '@/types/CustomDataTypes';

const CustomData = async ({
  cookies,
  getCountryData = false,
  getLanguagesData = false,
  getMarketsData = false,
  getShippingCountryData = false,
  query
}: CustomDataProps) => {
  try {
    const { country, token } = await getCountryAuto({ apiKey: API_KEY, cookies, getCountryData });
    const languages = await getLanguages({ apiKey: API_KEY, cookies, getLanguagesData });
    const markets = await getMarkets({ apiKey: API_KEY, cookies, getMarketsData });
    const shippingCountries = await getShippingCountries({ apiKey: API_KEY, cookies, getShippingCountryData });
    const slug = parseSlug(query?.slug, { defaultSlug: DEFAULT_SLUG });
    const isProductPage = slug.split('/')[0] === PRODUCT_PAGE_SLUG;
    const isCategoryPage = slug.split('/')[0] === CATEGORY_SLUG;
    const category = await getCategories({ apiKey: API_KEY, cookies });
    const selection = await getSelection({ apiKey: API_KEY, cookies });

    if (slug === PRODUCT_LIST_PAGE_SLUG) {
      Consoler({
        message: 'Product List Data at [customData.ts]',
        type: 'info'
      });

      const products = (await getProductByUri({
        apiKey: API_KEY,
        cookies,
        option: {
          language: 'en',
          limit: 10,
          market: 'all',
          skipFirst: 0
        }
      })) as CentraProductType[];

      return { category, products, selection };
    }

    if (isProductPage) {
      Consoler({
        message: 'Single Product Page Data at [customData.ts]',
        type: 'info'
      });

      const product = (await getViaUri({
        apiKey: API_KEY,
        cookies,
        option: {
          for: ['product', 'category'],
          uri: slug.split('/')[slug.split('/').length - 1]
        }
      })) as CentraProductType[];

      return { category, product, selection };
    }

    if (isCategoryPage) {
      Consoler({
        message: 'Category Page Data at [customData.ts]',
        type: 'info'
      });

      // productCount, products, category

      const { productCount, products } = await getViaUri({
        apiKey: API_KEY,
        cookies,
        option: {
          for: ['product', 'category'],
          uri: slug.split('/').slice(1, slug.split('/').length).join('/')
        }
      });

      return { category, productCount, products, selection };
    }

    return {
      category,
      defaultCountry: country,
      languages,
      markets,
      ...country,
      selection,
      shippingCountries,
      token
    };
  } catch (err) {
    Consoler({
      err,
      message: 'Error fetching data at Custom Data [customData].ts',
      type: 'error'
    });

    return err;
  }
};

export default CustomData;
