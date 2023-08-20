import { MutableRefObject, useEffect, useRef, useState } from 'react';

type UseIsElementVisiblePropType = {
  options?: {
    root: null;
    rootMargin?: string;
    threshold?: number | number[];
  };
  ref: MutableRefObject<null> | null;
};

const useIsElementVisible = ({ options, ref }: UseIsElementVisiblePropType) => {
  const elementRef = useRef(ref);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFN: IntersectionObserverCallback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFN, options);

    if (elementRef.current?.current) {
      const currentRef: any = elementRef.current.current;

      if (currentRef) observer.observe(currentRef);

      return () => currentRef && observer.unobserve(currentRef);
    }

    return () => {};
  }, [options, elementRef]);

  return {
    elementRef,
    isVisible
  };
};

export default useIsElementVisible;
