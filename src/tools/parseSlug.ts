type Options = {
  defaultSlug: string;
};

export default function parseSlug(slug?: string | string[], options?: Options) {
  if (!slug || slug[0] === 'index') {
    return options?.defaultSlug || '';
  }

  if (typeof slug === 'string') {
    return slug;
  }

  return slug.join('/');
}
