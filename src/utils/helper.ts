export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

export const auto_grow = (element: any) => {
  element.style.height = element.scrollHeight + 'px';
};
