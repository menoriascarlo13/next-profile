import { Image } from '@/types/Image';

const getImageDimension = (url: string): Image => {
  let dimensions: string | string[];
  let isStoryblok: string | string[];

  if (url) {
    dimensions = url.split('/')[5] && url.split('/')[5].split('x');

    isStoryblok = url
      .split('/')
      .filter(Boolean)
      .filter((item) => item.includes('a.storyblok.com'));

    if (isStoryblok.includes('a.storyblok.com')) {
      return {
        imageHeight: Number(dimensions[1]),
        imageWidth: Number(dimensions[0])
      };
    }
  }

  return {
    imageHeight: 500,
    imageWidth: 500
  };
};

export default getImageDimension;
