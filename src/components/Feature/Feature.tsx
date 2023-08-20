import { storyblokEditable } from '@storyblok/react';

type FeaturePropsType = {
  blok: {
    name?: string;
  };
};

const Feature = ({ blok }: FeaturePropsType) => (
  <div className='column feature' {...storyblokEditable(blok)}>
    {blok?.name}
  </div>
);

export default Feature;
