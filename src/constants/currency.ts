export type CurrencyType = 'USD' | 'VND'; // Định nghĩa các loại tiền tệ

export const currency: Record<CurrencyType, { locate: string; currency: string }> = {
  USD: { locate: 'en-US', currency: 'USD' },
  VND: { locate: 'vi-VN', currency: 'VND' },
};
