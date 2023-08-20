import { useEffect, useState } from 'react';

const useWindowScroll = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setX(window.scrollX);
      setY(window.scrollY);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }

    return () => {};
  }, []);

  return {
    x,
    y
  };
};

export default useWindowScroll;
