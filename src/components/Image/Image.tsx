import clsx from 'clsx';
import type { ImageLoaderProps } from 'next/image';
// eslint-disable-next-line import/no-named-default
import { default as NextImage } from 'next/image';

import { ImagePropsType } from '@/types/Image';

import styles from './Image.module.css';

const imageLoader = ({ quality, src, width }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

const Image = ({
  alt = 'Image',
  backupSrc = '/400.svg',
  className,
  height,
  placeholder = 'blur',
  src,
  width,
  ...props
}: ImagePropsType) => {
  const blurData =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=';

  // const { imageHeight, imageWidth } = getImageDimension(src);
  // const imgHeight = !height ? +imageHeight : height;
  // const imgWidth = !width ? +imageWidth : width;

  // const sizes: Sizes = ['360', '1080', '2040'];
  // const isImageFromStoryblok = src.includes('a.storyblok.com');

  // const path = process.env.NEXT_PUBLIC_STORYBLOK_URL;
  return (
    <NextImage
      alt={alt}
      blurDataURL={blurData}
      className={clsx(styles.Image, className)}
      fill
      loader={imageLoader}
      placeholder={placeholder}
      quality={75}
      src={src || backupSrc}
      {...props}
      sizes='(max-width: 780px) 100vw, (max-width: 1440px) 20vw, (max-width: 1920px) 30vw, 33vw'
    />
  );
};

export default Image;
