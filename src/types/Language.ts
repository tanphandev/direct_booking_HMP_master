// export enum LanguageCode {
//   VI = 'vi',
//   EN = 'en',
//   TH = 'th'
// }

// export type languageProps = {
//   label: string;
//   code: LanguageCode;
// };

// export const language: languageProps[] = [
//   {
//     label: 'Viet Nam',
//     code: LanguageCode.VI,
//   },
//   {
//     label: 'English',
//     code: LanguageCode.EN,
//   },
//   {
//     label: 'Thailand',
//     code: LanguageCode.TH,
//   },
// ];

export type languageProps = {
  label: string;
  code: string;
};

export const language: languageProps[] = [
  {
    label: 'Viet Nam',
    code: 'vi',
  },
  {
    label: 'English',
    code: 'en',
  },
  {
    label: 'Thailand',
    code:'th',
  },
];
