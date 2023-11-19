type InputObject = Record<string, any>;

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const auto_grow = (element: any) => {
  element.style.height = element.scrollHeight + 'px';
};

export const getDateNowTimestamp = () => Math.floor(Date.now() / 1000);

export const getDateFormatTimestamp = (date: string) => {
  return Math.floor(new Date(date).getTime() / 1000); // Convert to seconds
};

export const formatCurrency = (number: number) => number?.toLocaleString('vi', { style: 'currency', currency: 'VND' });

export const trimObjectValues = (obj: InputObject): InputObject => {
  const trimmedData: InputObject = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      trimmedData[key] = typeof value === 'string' ? value.trim() : value;
    }
  }

  return trimmedData;
};
