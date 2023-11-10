import { useEffect, useState } from 'react';

const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState<Boolean>(false);

  const calculateIsDesktop = () => {
    if (window?.matchMedia) {
      setIsDesktop(window.matchMedia('(any-hover: hover) and (min-width: 1024px)').matches);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('load', calculateIsDesktop);
      return () => {
        window.removeEventListener('load', calculateIsDesktop);
      };
    }

    return () => {};
  }, []);

  return isDesktop;
};

export default useDesktop;
