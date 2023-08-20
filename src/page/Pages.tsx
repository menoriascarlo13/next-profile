/* eslint-disable react-hooks/rules-of-hooks */
import { StoryblokComponent, useStoryblokState } from '@storyblok/react';
import Head from 'next/head';
import { useMemo } from 'react';

import Header from '@/blocks/Header/Headers';
import { ProductServiceProvider } from '@/context/ProductService';
import Consoler from '@/services/consoler';
import getHeadTitleResolver from '@/tools/getHeadTitleResolver';
import { PagePropType } from '@/types/PagePropType';

const Pages = (props: PagePropType) => {
  try {
    const { header, story, storyKey } = props;

    const storyBlok = useStoryblokState(story);
    const haveStoryblokComponents = storyBlok && storyKey !== 404;
    const headTitle = getHeadTitleResolver({ pageProps: props });

    if (!haveStoryblokComponents) {
      Consoler({
        message: `No Storyblok Data fetched: Information ${storyBlok}, ${storyKey}`,
        type: 'warn'
      });
    }

    const HeaderMemo = useMemo(() => <Header {...props} header={header} />, [header, props]);

    return (
      <ProductServiceProvider value={{ props }}>
        <Head>
          <title>{storyBlok ? headTitle : 'My Site'}</title>
          <link href='/favicon.ico' rel='icon' />
        </Head>
        {HeaderMemo}
        {haveStoryblokComponents && <StoryblokComponent blok={storyBlok?.content} />}
      </ProductServiceProvider>
    );
  } catch (err) {
    Consoler({
      err,
      message: 'Unable to show Components from Page.tsx due to error: ',
      type: 'error'
    });

    return err;
  }
};

export default Pages;
