import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import React, { ReactNode } from 'react';
import { A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { SwiperModule, SwiperOptions } from 'swiper/types';

type CarouselPropsType = SwiperOptions & {
  children?: ReactNode[];
  className?: string;
  key?: string;
  modules?: SwiperModule[];
  onSwiper?: any;
};

const Carousel = ({ children, className, key, modules = [], ...props }: CarouselPropsType) => (
  <Swiper className={className} modules={[A11y, ...modules]} {...props}>
    {children?.map((item: any) => (
      <SwiperSlide key={key}>{item}</SwiperSlide>
    ))}
  </Swiper>
);

export default Carousel;
