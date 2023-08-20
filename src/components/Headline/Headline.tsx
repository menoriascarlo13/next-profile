import clsx from 'clsx';
import { ReactNode } from 'react';

import TextAlignPositionOptions from '@/configs/textAlignPosition';
import { HorizontalPositionType } from '@/types/common';
import { StoryblokContentType } from '@/types/Storyblok';

import styles from './Headline.module.css';

type HeadlinePropsType = {
  blok?: StoryblokContentType & {
    textPosition: HorizontalPositionType;
  };
  children: ReactNode;
};

const Headline = ({ blok, children }: HeadlinePropsType) => {
  const textPosition = blok?.textPosition || 'left';

  const renderBlock = () => {
    return (
      <section className={clsx(styles.Headline, TextAlignPositionOptions[textPosition])}>
        <div className='container container-auto'>
          {blok?.content?.[0]?.title && <h1 className='title'>{blok?.content?.[0]?.title}</h1>}

          {blok?.content?.[0]?.subtitle && <h4>{blok?.content?.[0]?.subtitle}</h4>}

          {blok?.content?.[0]?.paragraph && <p>{blok?.content?.[0]?.paragraph}</p>}
          {children}
        </div>
      </section>
    );
  };

  return blok ? (
    renderBlock()
  ) : (
    <section className={styles.Headline}>
      <div className='container'>{children}</div>
    </section>
  );
};

export default Headline;
