import { storyblokEditable } from '@storyblok/react';

const Experience = ({ blok }: any) => {
  return <section {...storyblokEditable(blok)} />;
};

export default Experience;
