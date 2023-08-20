/* eslint-disable react/prop-types */
import { storyblokEditable } from '@storyblok/react';
import { Autoplay } from 'swiper';

import Carousel from '@/components/Carousel/Carousel';
import Image from '@/components/Image/Image';

const Showcase = ({ blok }: any) => {
  console.log(blok);

  return (
    <section {...storyblokEditable(blok)}>
      <div className='text-center'>
        <p className='text-[20px]'>{blok.title}</p>
        <p className='text-[18px] opacity-30'>{blok.description}</p>
      </div>
      <div className='block overflow-hidden mt-[100px]'>
        <Carousel
          allowTouchMove={false}
          autoplay={{
            delay: 1
          }}
          centeredSlides
          className='w-full ease-linear-swiper swiper-slide-w-auto'
          loop
          modules={[Autoplay]}
          slidesPerView='auto'
          spaceBetween={100}
          speed={5000}
        >
          {blok.icons.map(({ alt, filename, id }: any) => (
            <Image key={id} alt={alt} className='my-0 mx-auto w-auto object-contain object-center' src={filename} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Showcase;
