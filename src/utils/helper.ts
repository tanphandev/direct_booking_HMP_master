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
