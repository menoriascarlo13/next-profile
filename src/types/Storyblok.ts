export type StoryblokDataProps = {
  query?: { [key: string]: string | string[] | undefined };
};

export type StoryblokParamsType = {
  cv: number;
  version: 'published' | 'draft' | undefined;
};

export type StoryblokStoryType = {
  created_at: string;
  default_full_slug: string | null;
  first_published_at: string;
  full_slug: string;
  group_id: string;
  id: number;
  is_startpage: boolean;
  lang: string;
  meta_data: string | null;
  name: string;
  parent_id: number;
  path: string;
  position: number;
  published_at: string | number | Date | null;
  release_id: number | null;
  slug: string;
  sort_by_date: string | number | Date | null;
  translated_slugs: string | null;
  uuid: number | string;
};

export type StoryblokDataHaveReturnType = {
  header: StoryblokStoryType;
  key: string;
  story: StoryblokStoryType;
};

export type StoryblokDataReturnType = StoryblokDataHaveReturnType;

export type StoryblokContentType = {
  paragraph?: string;
  subtitle?: string;
  title?: string;
};

export type StoryblokImageType = {
  _uid: string;
  image: string;
  label: string;
};
