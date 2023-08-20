/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { apiPlugin, storyblokInit } from '@storyblok/react';
import type { GetStaticProps } from 'next';

import components from '@/configs/components-config';
import Pages from '@/page/Pages';
import pageSettings from '@/page/pageSettings';
import Consoler from '@/services/consoler';

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN, // add your access token
  apiOptions: {
    region: 'us'
  },
  components,
  use: [apiPlugin] // provide api client that the storyblok using
});

export const getStaticPaths = async () => ({
  fallback: 'blocking',
  paths: []
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    console.log('get static request');

    const { key, story } = await pageSettings({
      query: params
    });

    const props = {
      // header,
      params,
      story,
      storyKey: key
    };

    return { props };
  } catch (err) {
    Consoler({
      err,
      message: 'Unable to create Page due to Error at [[...slug.tsx]]: ',
      type: 'error'
    });

    return {
      notFound: true
    };
  }
};

export default Pages;
