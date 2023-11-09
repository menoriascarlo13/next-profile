import { useEffect, useState } from 'react';

const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<Boolean>(false);

  const calculateIsDesktop = () => {
    console.log('window?.matchMedia', window?.matchMedia);
    if (window?.matchMedia) {
      console.log('test', window);
      setIsDesktop(window.matchMedia('(any-hover: hover) and (min-width: 1024px)').matches);
      console.log(window.matchMedia('(any-hover: hover) and (min-width: 1024px)').matches);
    } else {
      setIsDesktop(false);
    }
  };

  useEffect(() => {
    console.log(window);
    if (typeof window !== 'undefined') {
      window.addEventListener('load', calculateIsDesktop);
      console.log('!undefined', window);
      return () => {
        window.removeEventListener('load', calculateIsDesktop);
      };
    }

    return () => {};
  }, []);

  return isDesktop;
};

export default useDesktop;
