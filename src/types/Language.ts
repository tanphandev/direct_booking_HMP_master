export enum LanguageCode {
  VI = 'VI',
  EN = 'EN',
  TH = 'TH'
}

export type languageProps = {
  label: string;
  code: LanguageCode;
};

export const language: languageProps[] = [
  {
    label: 'Viet Nam',
    code: LanguageCode.VI
  },
  {
    label: 'English',
    code: LanguageCode.EN
  },
  {
    label: 'Thailand',
    code: LanguageCode.TH
  }
];
