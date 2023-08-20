/* eslint-disable no-console */
import { getStoryblokApi } from '@storyblok/react';

import Consoler from '@/services/consoler';
import parseSlug from '@/tools/parseSlug';

import { HOME_PAGE } from '../configs/const';
import { StoryblokDataProps, StoryblokParamsType } from '../types/Storyblok';

const storyblokData = async ({ query }: StoryblokDataProps) => {
  try {
    const insideStoryblok = query?._storyblok;
    const slug = parseSlug(query?.slug, { defaultSlug: HOME_PAGE });
    const isDevelopment = process.env.NODE_ENV === 'development';

    const sbParams = {
      cv: Date.now(),
      version: isDevelopment || insideStoryblok ? 'draft' : 'published'
    } as StoryblokParamsType;

    const storyblokApi = getStoryblokApi();

    const { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
    // const header = await storyblokApi.get(`cdn/stories/header`, sbParams);

    return {
      // header: header.data.story.content,
      key: data.story.id,
      story: data.story
    };
  } catch (err: any) {
    Consoler({
      err,
      message: `Error Fetching Slug Storyblok Data at storyblokData.ts => Query: ${JSON.stringify(query)}`,
      type: 'error'
    });

    return {
      header: err.response,
      key: err.status,
      story: err.response
    };
  }
};

export default storyblokData;
