interface InputFieldProps {
  isRequire?: boolean;
  label?: string;
  id?: string;
  name?: string;
  value?: any;
  placeHolder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  formik?: any;
  labelClassName?: string;
  inputClassName?: string;
}

interface BaseRefProps<T> {
  value: T;
}
