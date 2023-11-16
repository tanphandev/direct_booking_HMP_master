import { useEffect, useState } from 'react';
import { useAppSelector } from '.';

export const useLoading = (sections: string[]) => {
  const [loading, setLoading] = useState<boolean>(true);
  const { loading: loadingItems } = useAppSelector((state) => state.common);
  useEffect(() => {
    if (!loadingItems.length) return;

    const result = sections.some((section) => {
      return loadingItems.includes(section);
    });
    setLoading(result);

    return () => setLoading(false);
  }, [loadingItems, sections]);

  return { loading };
};
