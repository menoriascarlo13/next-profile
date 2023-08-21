import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';

import Card from '@/components/Card/Card';

const Certificates = ({ blok }: any) => (
  <section {...storyblokEditable(blok)} className='px-20 mt-10'>
    <div className='grid  md:grid-cols-2 lg:grid-cols-4'>
      {blok.certificate.map(({ _uid, description, image, logo, title, url }: any) =>
        url ? (
          <Link href={url.cached_url} target='_blank'>
            <Card key={_uid} description={description} image={image} logo={logo} title={title} />
          </Link>
        ) : (
          <Card key={_uid} description={description} image={image} logo={logo} title={title} />
        )
      )}
    </div>
  </section>
);

export default Certificates;
