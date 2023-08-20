import { storyblokEditable } from '@storyblok/react';

import Hero from '@/components/Hero/Hero';
import { HeroBlockPropType } from '@/types/Hero';

import styles from './HeroSingle.module.css';

const HeroSingle = ({ blok }: HeroBlockPropType) => {
  if (!blok) return null;
  const { heroContent } = blok;
  if (!heroContent) return null;

  return (
    <section className={styles.Section} {...storyblokEditable(blok)}>
      <div className={styles.Wrapper}>
        <Hero
          blok={blok}
          desktopImage={heroContent[0].media[0].desktopImage}
          horizontalTextPosition={heroContent[0].horizontalTextPosition}
          mobileImage={heroContent[0].media[0].mobileImage}
          subtitle={heroContent[0].subtitle}
          textColor={heroContent[0].textColor}
          title={heroContent[0].title}
          verticalTextPosition={heroContent[0].verticalTextPosition}
        />
      </div>
    </section>
  );
};

export default HeroSingle;
