import { storyblokEditable } from '@storyblok/react';
import clsx from 'clsx';

import useDesktop from '@/hooks/useDesktop';
import { HeroPropType } from '@/types/Hero';

import Image from '../Image/Image';
import styles from './Hero.module.css';
import HeroContent from './HeroContent/HeroContent';

const Hero = ({
  blok,
  className,
  desktopImage,
  horizontalTextPosition = 'left',
  mobileImage,
  subtitle,
  textColor = 'white',
  title,
  verticalTextPosition = 'top'
}: HeroPropType) => {
  const desktop = useDesktop();

  return (
    <div className={clsx(styles.Hero, className)} {...storyblokEditable(blok)}>
      {desktopImage &&
        desktopImage.length > 0 &&
        desktopImage.map(({ _uid, image, label }) => (
          <Image
            key={_uid}
            alt={label}
            className={clsx(styles.Image, {
              [styles.Image__Active]: desktop
            })}
            src={image}
          />
        ))}

      {mobileImage &&
        mobileImage.length > 0 &&
        mobileImage.map(({ _uid, image, label }) => (
          <Image
            key={_uid}
            alt={label}
            className={clsx(styles.Image, {
              [styles.Image__Active]: !desktop
            })}
            src={image}
          />
        ))}

      {(title || subtitle) && (
        <HeroContent
          horizontalTextPosition={horizontalTextPosition}
          subtitle={subtitle}
          textColor={textColor}
          title={title}
          verticalTextPosition={verticalTextPosition}
        />
      )}
    </div>
  );
};

export default Hero;
