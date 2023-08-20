import { storyblokEditable } from '@storyblok/react';

const Experience = ({ blok }: any) => {
  return (
    <section {...storyblokEditable(blok)} className='min-h-[500px] flex items-center justify-center mix-blend-lighten'>
      <div
        className='w-full h-full top-0 left-0 absolute z-1 opacity-30'
        style={{
          background: `radial-gradient(ellipse , rgba(255,156,84,1) 0%, rgba(98,26,190,0.8) 33%, rgba(255,156,84,0) 68%)`
        }}
      />
      <h2
        className='text-center mix-blend-lighten'
        style={{
          textShadow: '0px 0px 0px #afafaf'
        }}
      >
        {blok.title}
      </h2>
    </section>
  );
};

export default Experience;
