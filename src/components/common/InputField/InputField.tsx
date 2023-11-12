function InputField({
  label,
  id,
  value,
  placeHolder,
  isRequire = false,
  onChange,
  labelClassName,
  inputClassName,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label className={`${labelClassName}`} htmlFor={id}>
        {label}
        {isRequire && <span className="text-red ml-1">*</span>}
      </label>
      <input
        className={`${inputClassName} outline-none`}
        value={value}
        onChange={onChange}
        id={id}
        placeholder={placeHolder}
      />
    </div>
  );
}

export default InputField;
