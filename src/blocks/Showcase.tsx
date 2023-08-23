/* eslint-disable react/prop-types */
import { storyblokEditable } from '@storyblok/react';
import { Autoplay } from 'swiper';

import Carousel from '@/components/Carousel/Carousel';
import Image from '@/components/Image/Image';

const Showcase = ({ blok }: any) => {
  return (
    <section {...storyblokEditable(blok)} className='py-5 md:py-28'>
      <div className='text-center px-5 lg:px-20'>
        {blok?.title && <p className='text-[20px]'>{blok.title}</p>}
        {blok?.description && <p className='text-[18px] opacity-30'>{blok.description}</p>}
      </div>
      {blok?.icons.length > 0 && (
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
            {blok?.icons?.map(({ alt, filename, id }: any) => (
              <Image key={id} alt={alt} className='my-0 mx-auto w-auto object-contain object-center' src={filename} />
            ))}
          </Carousel>
        </div>
      )}
    </section>
  );
};

export default Showcase;
