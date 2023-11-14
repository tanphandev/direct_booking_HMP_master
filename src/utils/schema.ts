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
    fullName: yup.string().required(ERROR.required),
    email: yup.string().required(ERROR.required).email(ERROR.isEmail),
    phone: yup.string().required(ERROR.required),
    country: yup.string().required(ERROR.required),
  });

export const GUEST_INFO_SCHEMA = () =>
  yup.object().shape({
    fullName: yup.string().required(ERROR.required),
    country: yup.string().required(ERROR.required),
  });
