/* eslint-disable react/prop-types */
import { storyblokEditable } from '@storyblok/react';

const Showcase = ({ blok }: any) => {
  return (
    <section {...storyblokEditable(blok)}>
      <div className='text-center'>
        <p className='text-[20px]'>{blok.title}</p>
        <p className='text-[18px] opacity-30'>{blok.description}</p>
      </div>
    </section>
  );
};

export default Showcase;
