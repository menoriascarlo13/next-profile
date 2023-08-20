import { StoryblokComponent, storyblokEditable } from '@storyblok/react';

const Page = ({ blok }: { blok: any }) => (
  <main {...storyblokEditable(blok)}>
    {blok &&
      blok.body &&
      blok.body.map((nestedBlok: any) => <StoryblokComponent key={nestedBlok._uid} blok={nestedBlok} />)}
  </main>
);

export default Page;
