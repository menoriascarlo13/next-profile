/* eslint-disable no-unreachable */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { apiPlugin, storyblokInit } from '@storyblok/react';

import components from '@/configs/components-config';
import Pages from '@/page/Pages';
import pageSettings from '@/page/pageSettings';

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN, // add your access token
  components,
  use: [apiPlugin] // provide api client that the storyblok using
});

export const getStaticPaths = async () => ({
  fallback: 'blocking',
  paths: []
});

export const getStaticProps = async ({ params }: any) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  const repo = await res.json();

  const { header, key, story } = await pageSettings({
    query: params
  });

  console.log('static request');

  try {
    return {
      props: { header, key, repo, story }
    };
  } catch (error) {
    console.log('Error at getStatic slug: ', error);

    return {
      notFound: true
    };
  }
};

export default Pages;
