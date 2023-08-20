import centraEndpoint from '../centraEndpoint';
import Consoler from '../consoler';

const getAllCategoryUriNames = ({ categories }: any) => {
  try {
    const category = categories.map((cat: any) => {
      const { uri } = cat;
      return {
        uriNames: uri.split('/'),
        ...cat
      };
    });

    return category;
  } catch (error) {
    Consoler({
      err: error,
      message: `Error Fetching URI Names at getAllCategoryUri: ${JSON.stringify(error)}`,
      type: 'error'
    });
    return error;
  }
};

const getGroupByCategory = ({ categories }: any) => {
  try {
    const categoryGroupBy = categories.reduce((group: any, array: any) => {
      const { uriNames } = array; // array destructuring, get the key that needs to be group or compared
      // eslint-disable-next-line no-param-reassign
      group[uriNames[0]] = group[uriNames[0]] ?? []; // use key (inCategory) as grouper
      group[uriNames[0]].push(array); // push array on group var

      return group; // return the group var
    }, {});

    const categoryGroupkeys = Object.keys(categoryGroupBy);
    const categoryGroupings = categoryGroupkeys.map((array) => {
      let mainCategory = {};
      categoryGroupBy[array]
        .filter(({ uri }: { uri: string }) => uri === array)
        .map((item: any) => {
          mainCategory = {
            ...item
          };

          return item;
        });

      return {
        category: array,
        ...mainCategory,
        subcategories: categoryGroupBy[array]
      };
    });

    return categoryGroupings;
  } catch (err) {
    Consoler({
      err,
      message: `Error Grouping the Category at getGroupByCategory: ${JSON.stringify(err)}`,
      type: 'error'
    });

    return err;
  }
};

const getCategories = async ({ apiKey, cookies }: any) => {
  try {
    const response = await centraEndpoint({
      endpoint: 'categories',
      options: {
        headers: {
          'API-Authorization': apiKey,
          'Content-Type': 'application/json',
          'api-token': cookies?.token || ''
        },
        method: 'GET'
      }
    });

    const { categories, token } = response as any;

    const categoryUriNames = getAllCategoryUriNames({ categories });
    const categoryByGroup = getGroupByCategory({ categories: categoryUriNames });
    return {
      categories,
      group: categoryByGroup,
      token,
      uris: categoryUriNames
    };
  } catch (err) {
    Consoler({
      err,
      message: `Error Fetching Categories at getCategories: ${JSON.stringify(err)}`,
      type: 'error'
    });

    return err;
  }
};

export default getCategories;
