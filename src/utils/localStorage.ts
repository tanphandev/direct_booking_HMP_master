export const storeLocalStorage = ({ keyName, value }: { keyName: string; value: any }) => {
  const isBrowser = typeof window !== 'undefined';
  isBrowser && localStorage.setItem(keyName, value);
};

export const getLocalStorage = (keyName: string) => {
  return localStorage.getItem(keyName);
};
