import CustomData from '@/custom-data/customData';
import storyblokData from '@/custom-data/storyblokData';
import { StoryblokDataReturnType } from '@/types/Storyblok';

const pageSettings = async ({ cookies, query }: { cookies: any; query: any }) => {
  const hasQuery: boolean = Boolean(query?.slug?.length);
  const hasCookies: boolean = Object.keys(cookies as Object).length !== 0;

  const prop = await CustomData({
    cookies,
    getCountryData: !hasQuery && true,
    getLanguagesData: !hasQuery && true,
    getMarketsData: !hasQuery && true,
    getShippingCountryData: !hasQuery && true,
    hasCookies,
    hasQuery,
    query
  });

  const { header, key, story } = (await storyblokData({ query })) as StoryblokDataReturnType;

  return {
    header,
    key,
    prop,
    query,
    story
  };
};

export default pageSettings;
