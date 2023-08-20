import { storyblokEditable } from '@storyblok/react';

import Hero from '@/components/Hero/Hero';
import { HeroBlockPropType } from '@/types/Hero';

import styles from './Hero5050.module.css';

const Hero5050 = ({ blok }: HeroBlockPropType) => {
  if (!blok) return null;
  const { heroContent } = blok;
  if (!heroContent) return null;

  return (
    <section className={styles.Section} {...storyblokEditable(blok)}>
      <div className={styles.Wrapper}>
        {heroContent.map(({ _uid }, index) => (
          <Hero
            key={_uid}
            blok={blok}
            className={styles.Image}
            desktopImage={heroContent[index].media[0].desktopImage}
            horizontalTextPosition={heroContent[index].horizontalTextPosition}
            mobileImage={heroContent[index].media[0].mobileImage}
            subtitle={heroContent[index].subtitle}
            title={heroContent[index].title}
            verticalTextPosition={heroContent[index].verticalTextPosition}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero5050;
