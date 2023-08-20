import { storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';

import Links from '@/components/Links/Links';
import Media from '@/components/Media/Media';
import HorizontalPositionOptions from '@/configs/horizontalPosition';
import VerticalPositionOptions from '@/configs/verticalPosition';
import useDesktop from '@/hooks/useDesktop';
import { HorizontalPositionType, VerticalPositionType } from '@/types/common';
import { LinksDataType } from '@/types/Links';

import styles from './TextImage5050.module.css';

const imagePositionVariant = {
  left: styles.ImagePosition__Left,
  right: styles.ImagePosition__Right
};

type TextImage5050PropsType = {
  blok: {
    description?: string;
    horizontalTextPosition: HorizontalPositionType;
    imagePosition: 'left' | 'right';
    link: LinksDataType;
    media: {
      desktopImage: {
        image: string;
      }[];
      mobileImage: {
        image: string;
      }[];
    }[];
    subtitle: string;
    title: string;
    verticalTextPosition: VerticalPositionType;
  };
};

const TextImage5050 = ({ blok }: TextImage5050PropsType) => {
  const { description, horizontalTextPosition, imagePosition, link, media, subtitle, title, verticalTextPosition } =
    blok;
  const isDesktop = useDesktop();

  return (
    <section
      {...storyblokEditable(blok)}
      className={clsx(styles.Grid, {
        [imagePositionVariant[imagePosition]]: isDesktop
      })}
    >
      <div
        className={clsx(
          styles.Content,
          HorizontalPositionOptions[horizontalTextPosition],
          VerticalPositionOptions[verticalTextPosition]
        )}
      >
        {title && <h2>{title}</h2>}
        {subtitle && <h4>{subtitle}</h4>}
        {description && <h5>{description}</h5>}
        <Links data={link} />
      </div>
      <div className={`${styles.Image} relative`}>
        <Media
          className={styles.Media}
          desktopImage={media[0]?.desktopImage[0]?.image}
          mobileImage={media[0]?.mobileImage[0]?.image}
        />
      </div>
    </section>
  );
};

export default TextImage5050;
