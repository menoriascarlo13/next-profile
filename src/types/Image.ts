export type Image = {
  imageHeight: number;
  imageWidth: number;
};

export type ImageSizeHint = {
  height?: number;
  width?: number;
};

export type ImagePropsType = ImageSizeHint & {
  alt?: string;
  backupSrc?: string;
  className?: string;
  id?: string;
  // Custom loaders
  // loaders?: CustomImageLoaderDefinitionType[];
  placeholder?: 'blur' | 'empty';
  priority?: boolean;
  // placeholderBlurOptions?: PlaceholderBlurOptionsType;
  responsive?: boolean;
  // responsiveConfig?: ResponsiveConfigType;
  // Tell the loaders how the image will be displayed relative to the screen size.
  // Example:
  // sizeHints={[{
  //   maxWidth: 1024,
  //   size: { width: 1 },
  // }, {
  //   size: { width: 1 / 4 },
  // }]}
  // This tells the loader that the image will be displayed as a quarter of the screen width on desktop (ex. in grid) so we can load smaller sized image.
  // sizeHints?: ResponsiveConfigType;
  src?: string;
};
