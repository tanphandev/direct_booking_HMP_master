// Format options for the date
export const dateFormat = { year: 'numeric', month: 'short', day: '2-digit' };

export const displayDateFormat = (date: any) => {
  return date?.toLocaleDateString('en-US', dateFormat);
};
