import { storyblokEditable } from '@storyblok/react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import Button from '@/components/Button/Button';
import Card from '@/components/Card/Card';
import useDesktop from '@/hooks/useDesktop';

const Certificates = ({ blok }: any) => {
  const isDesktop = useDesktop();
  const certLength = blok.certificate.length - 1;
  const defaultLimit = isDesktop ? 3 : 2;
  const [limit, setLimit] = useState<number>(defaultLimit);
  const [isLoadMore, setIsLoadMore] = useState(defaultLimit !== certLength);
  const [certificates, setCertificates] = useState(blok.certificate);
  const loadMoreHandler = () => setLimit((prev) => prev + (defaultLimit + 1));

  useEffect(() => {
    setLimit(defaultLimit);
  }, [defaultLimit]);

  useEffect(() => {
    setIsLoadMore(blok.certificate.length >= limit);
  }, [limit, blok.certificate.length]);

  useEffect(() => {
    const currentCerts = blok.certificate.filter((_: any, index: number) => index <= limit);
    setCertificates(currentCerts);
  }, [blok.certificate, limit]);

  return (
    <section {...storyblokEditable(blok)} className='px-5 lg:px-20 mt-10'>
      <div className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[16px]'>
        {certificates.map(({ _uid, description, image, logo, title, url }: any) =>
          url ? (
            <Link key={_uid} className='h-full' href={url.cached_url} target='_blank'>
              <Card className='h-full' description={description} image={image} logo={logo} title={title} />
            </Link>
          ) : (
            <Card key={_uid} className='h-full' description={description} image={image} logo={logo} title={title} />
          )
        )}
      </div>
      {isLoadMore && (
        <Button
          className='button tertiary my-0 mx-auto mt-10'
          label={`${limit + 1}/${blok.certificate.length} Certificates`}
          onClick={loadMoreHandler}
        />
      )}
    </section>
  );
};

export default Certificates;
