type GetProductBreadCrumbsPropType = {
  name: string[];
  uri: string;
};

type CategoryListType = {
  categoryName: string;
  categoryUriName: string;
  name: string | string[];
  uri: string;
};

const getProductBreadcrumbs = (data: GetProductBreadCrumbsPropType | GetProductBreadCrumbsPropType[]) => {
  const categoryList: CategoryListType[] = [];
  if (Array.isArray(data)) {
    data.map(({ name, uri }) =>
      categoryList.push({
        categoryName: name[name.length - 1],
        categoryUriName: name.join('/'),
        name: name.flat(),
        uri
      })
    );
  } else {
    const { name, uri } = data;
    name.map((value, index) =>
      categoryList.push({
        categoryName: value,
        categoryUriName: uri.split('/')[index],
        name: name.flat(),
        uri: uri
          .split('/')
          .splice(0, index + 1)
          .join('/')
      })
    );
  }

  return categoryList;
};

export default getProductBreadcrumbs;
