import { useTranslation } from 'react-i18next';

function InputField({
  label,
  id,
  name,
  value,
  placeHolder,
  isRequire = false,
  formik,
  labelClassName,
  inputClassName,
}: InputFieldProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <label className={`${labelClassName}`} htmlFor={id}>
        {label}
        {isRequire ? (
          <span className="text-red ml-1">*</span>
        ) : (
          <span className="text-grey-99 ml-1">{`(${t('BOOKING_FORM.USER_INPUT_FORM.OPTIONAL')})`}</span>
        )}
      </label>
      <input
        name={name}
        className={`${inputClassName}`}
        value={value}
        id={id}
        placeholder={placeHolder}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched[`${name}`] && formik.errors[`${name}`] ? (
        <div className="text-sm text-red mt-1">{formik.errors[`${name}`]}</div>
      ) : null}
    </div>
  );
}

export default InputField;
