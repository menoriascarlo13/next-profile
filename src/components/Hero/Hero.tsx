import { storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';

import { HeroPropType } from '@/types/Hero';

import Image from '../Image/Image';
import styles from './Hero.module.css';

const Hero = ({ blok, className }: HeroPropType) => {
  return (
    <div
      className={clsx(styles.Hero, className, `min-h-screen flex justify-center items-center md:items-start p-10`)}
      {...storyblokEditable(blok)}
      style={{
        background: ` url('${blok?.background_image?.filename}') no-repeat center / cover`
      }}
    >
      <div className='text-center flex flex-col items-center w-full max-w-[627px] h-full'>
        <div className='mb-[100px]'>
          <h4 className='text-center mb-[27px] font-bold'>{blok?.name}</h4>
          <div
            className='w-[154px] h-[154px] rounded-full overflow-hidden relative border-solid p-4 border-[#83828A]'
            style={{ background: 'linear-gradient(180deg, rgba(143,143,143,0) 0%, rgba(143,143,143,1) 249%)' }}
          >
            <div className='w-full h-full relative overflow-hidden rounded-full'>
              <Image className=' w-[121px] h-[121px] ' src={blok?.profile_image?.filename} />
            </div>
          </div>
        </div>
        <h1 className='text-white mb-0 text-5xl md:text-8xl'>{blok?.title}</h1>
      </div>
    </div>
  );
};

export default Hero;
