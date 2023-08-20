import useDesktop from '@/hooks/useDesktop';
import { MediaPropType } from '@/types/Media';

import Image from '../Image/Image';

const Media = ({ className, desktopImage, desktopImageAlt, mobileImage, mobileImageAlt }: MediaPropType) => {
  const isDesktop = useDesktop();

  if (!isDesktop) return <Image alt={mobileImageAlt} className={className} src={mobileImage} />;

  return <Image alt={desktopImageAlt} className={className} src={desktopImage} />;
};

export default Media;
