/* eslint-disable */

import clsx from 'clsx';

import styles from './HeroContent.module.css';
import TextColorOptions from '@/configs/textColor';
import VerticalPositionOptions from '@/configs/verticalPosition';
import HorizontalPositionOptions from '@/configs/horizontalPosition';
import { HorizontalPositionType, VerticalPositionType, FontColorType } from '@/types/common';

type HeroContentPropType = {
  horizontalTextPosition: HorizontalPositionType;
  subtitle?: string;
  title?: string;
  verticalTextPosition: VerticalPositionType;
  textColor: FontColorType;
};

const HeroContent = ({
  horizontalTextPosition = 'left',
  subtitle,
  textColor = 'black',
  title,
  verticalTextPosition = 'top'
}: HeroContentPropType) => {
  return (
    <div
      className={clsx(
        styles.Content,
        TextColorOptions[textColor],
        HorizontalPositionOptions[horizontalTextPosition],
        VerticalPositionOptions[verticalTextPosition]
      )}
    >
      {title && <h1>{title}</h1>}
      {subtitle && <h4>{subtitle}</h4>}
    </div>
  );
};

export default HeroContent;
