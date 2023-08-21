import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';

import Image from '@/components/Image/Image';

const Contact = ({ blok }: any) => {
  return (
    <section {...storyblokEditable(blok)} className='px-5 lg:px-20'>
      <div
        className='max-w-[865px] w-full bg-[#121120] rounded-lg my-0 mx-auto p-9 grid lg:grid-cols-12 gap-[14px] lg:gap-[0]'
        style={{
          filter: 'drop-shadow(0px 0px 15px #702FD2)'
        }}
      >
        <div className='lg:col-span-7 gap-[14px] flex flex-col text-center lg:text-left'>
          {blok.title && <p className='font-semibold text-lg'>{blok.title}</p>}
          {blok.description && <p className='font-medium text-sm opacity-60 lg:max-w-[419px]'>{blok.description}</p>}
        </div>
        <div className='lg:col-span-5 gap-[32px] flex flex-col justify-center items-center lg:justify-start lg:items-start'>
          <div className='flex gap-[26px]'>
            {blok.socials.map(({ _uid, icon: { filename }, url }: any) => (
              <Link
                key={_uid}
                className='overflow-hidden w-[24px] h-[24px] block relative transition-opacity hover:opacity-50'
                href={url.cached_url}
                target='_blank'
              >
                <Image height={24} src={filename} width={24} />
              </Link>
            ))}
          </div>
          <div>
            {blok.button.map(({ _uid, label, url }: any) => (
              <Link
                key={_uid}
                className='py-[13px] px-[24px] rounded-lg transition-opacity hover:opacity-80 text-center flex md:text-left md:block'
                href={url.cached_url}
                style={{
                  background: 'linear-gradient(278deg, rgba(154,133,220,1) 0%, rgba(109,75,193,1) 50%)'
                }}
                target='_blank'
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
