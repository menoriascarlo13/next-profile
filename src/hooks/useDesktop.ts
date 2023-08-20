import { useEffect, useState } from 'react';

const useDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(Boolean);

  const calculateIsDesktop = () => {
    if (window?.matchMedia) {
      setIsDesktop(window.matchMedia('(any-hover: hover) and (min-width: 1024px)').matches);
    }

    return false;
  };

  useEffect(() => {
    calculateIsDesktop();

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', calculateIsDesktop);
      setIsDesktop(calculateIsDesktop);

      return () => {
        window.addEventListener('resize', calculateIsDesktop);
      };
    }

    return () => {};
  }, []);

  return isDesktop;
};

export default useDesktop;
