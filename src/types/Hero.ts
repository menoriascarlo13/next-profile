import { StoryblokImageType } from '@/types/Storyblok';

import { FontColorType, HorizontalPositionType, VerticalPositionType } from './common';

export type HeroContentItemType = {
  _uid: string;
  subtitle: string;
  title: string;
};

export type HeroMediaType = {
  _uid: string;
  alt: string;
  image: string;
  mobileImage?: string;
  mobileVideoId?: string;
  name?: string;
  price?: string;
  productLink?: string;
  selectedProduct?: {
    Array: {
      category: string;
      id: string;
      link: string;
      name: string;
    }[];
  };
  videoId?: string;
};

// export type HeroType = {
//   author?: string;
//   contentItems?: HeroContentItemType[];
//   date?: string;
//   divider?: boolean;
//   eventSubtitle?: string;
//   gap?: boolean;
//   imagePosition?: ImagePosition;
//   imageTextContent?: {
//     description: RichTextType;
//     label: string;
//     link: SimpleLinkType;
//     title: string;
//   };
//   imageVariant?: string;
//   isCustomPromo?: boolean;
//   links?: SimpleLinkType[];
//   linksColor: ButtonColorType;
//   linksVariant: ButtonVariantType;
//   loadDistribution?: HeroLoadDistribution;
//   margin?: boolean;
//   media: HeroMediaType[];
//   shortTitle?: string;
//   subTitleColor?: FontColorType;
//   subTitleItalic?: boolean;
//   subTitleSize?: FontSizeType;
//   subTitleWeight?: FontWeightType;
//   titleColor?: FontColorType;
//   titleItalic?: boolean;
//   titleSize?: FontSizeType;
//   titleVariant?: FontVariantType;
//   titleWeight?: FontWeightType;
//   variant?: HeroVariantType;
// };

export type HeroPropType = {
  blok: any;
  className?: string;
  desktopImage: StoryblokImageType[];
  horizontalTextPosition: HorizontalPositionType;
  mobileImage: StoryblokImageType[];
  subtitle?: string;
  textColor?: FontColorType;
  title?: string;
  verticalTextPosition: VerticalPositionType;
};

export type HeroBlockPropType = {
  blok?: {
    heroContent: {
      _uid?: string;
      horizontalTextPosition: HorizontalPositionType;
      media: {
        desktopImage: StoryblokImageType[];
        mobileImage: StoryblokImageType[];
      }[];
      subtitle: string;
      textColor: FontColorType;
      title: string;
      verticalTextPosition: VerticalPositionType;
    }[];
  };
};
