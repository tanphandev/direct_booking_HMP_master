import { useEffect, useState } from 'react';
import { useAppSelector } from '.';

export const useLoading = (sections: string[]) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { loading: loadingItems } = useAppSelector((state) => state.common);
  useEffect(() => {
    if (!loadingItems.length) setLoading(false);

    const result = sections.some((section) => {
      return loadingItems.includes(section);
    });
    setLoading(result);

    return () => setLoading(false);
  }, [loadingItems, sections]);

  return { loading };
};
