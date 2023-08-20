import storyblokData from '@/custom-data/storyblokData';
import { StoryblokDataReturnType } from '@/types/Storyblok';

const pageSettings = async ({ query }: { query: any }) => {
  const { header, key, story } = (await storyblokData({ query })) as StoryblokDataReturnType;

  return {
    header,
    key,
    query,
    story
  };
};

export default pageSettings;
