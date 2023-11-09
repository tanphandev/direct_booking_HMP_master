import { useEffect } from 'react';

export const useOnClickOutside = (
  ref: React.RefObject<HTMLElement> | Element | null,
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (ref === null) return;
      const refElement = ref instanceof Element ? ref : ref.current;
      if (!refElement || refElement.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};
