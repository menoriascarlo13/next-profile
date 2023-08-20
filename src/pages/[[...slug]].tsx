/* eslint-disable no-console */
/* eslint-disable react-hooks/rules-of-hooks */
import { apiPlugin, storyblokInit } from '@storyblok/react';
import cookie from 'cookie';
import type { GetServerSideProps } from 'next';

import components from '@/configs/components-config';
import Pages from '@/page/Pages';
import pageSettings from '@/page/pageSettings';
import Consoler from '@/services/consoler';
import isObject from '@/tools/isObject';

// Initialize Storyblok
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_TOKEN, // add your access token
  components,
  use: [apiPlugin] // provide api client that the storyblok using
});

export const getServerSideProps: GetServerSideProps = async ({ query, req, res }) => {
  try {
    console.log('get server request');

    res.setHeader('Cache-Control', 'public, s-maxage=10, stale-while-revalidate=59');
    const cookies = cookie.parse(req.headers.cookie || '');

    const hasCookies: boolean = Object.keys(cookies as Object).length !== 0;

    const { header, key, prop, story } = await pageSettings({
      cookies,
      query
    });

    if (!hasCookies) {
      const cookieData: any = prop;

      res.setHeader(
        'set-cookie',
        Object.keys(cookieData).map((propkey) => {
          const cookieKeyValue =
            isObject(cookieData?.[propkey] as string) || Array.isArray(cookieData?.[propkey] as string)
              ? JSON.stringify(cookieData[propkey])
              : cookieData[propkey];

          return cookie.serialize(propkey, propkey !== 'products' ? String(cookieKeyValue) : '', { path: '/' });
        })
      );
    }

    const props = {
      header,
      prop,
      query,
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
