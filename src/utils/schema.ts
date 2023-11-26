import * as yup from 'yup';

export const ERROR = {
  isEmail: 'Enter email please!',
  required: 'This field is required',
  passRequire:
    'Password must contain at least eight characters, at least one number and both lower and uppercase letters and special characters',
  incorrectPass: 'Password incorrect',
};

export const ORDER_INFO_SCHEMA = () =>
  yup.object().shape({
    full_name: yup.string().required(ERROR.required),
    mail: yup.string().required(ERROR.required).email(ERROR.isEmail),
    phone_number: yup.string().required(ERROR.required),
    country: yup.string().required(ERROR.required),
  });

export const GUEST_INFO_SCHEMA = () =>
  yup.object().shape({
    full_name: yup.string().required(ERROR.required),
    country: yup.string().required(ERROR.required),
  });

export const OTHER_PEOPLE_INFO_SCHEMA = () =>
  yup.object().shape({
    name: yup.string().required(ERROR.required),
    mail: yup.string().required(ERROR.required).email(ERROR.isEmail),
  });
