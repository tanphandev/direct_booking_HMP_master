import React, { memo, useRef, useState } from 'react';
import classNames from 'classnames';

type Props = {
  id?: string;
  name?: string;
  items: string[];
  value: string;
  formik: any;
  inputClassName?: string;
  menuWrapperClassName?: string;
  menuItemClassName?: string;
};

const Autocomplete = ({
  id,
  name,
  items,
  value,
  formik,
  inputClassName,
  menuWrapperClassName,
  menuItemClassName,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={classNames({
        'dropdown w-full': true,
        'dropdown-open': open,
      })}
      ref={ref}
    >
      <input
        id={id}
        name={name}
        type="text"
        className={classNames(
          'w-full text-base border-[1px] focus:border-blue-80 focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,.25)] outline-none',
          inputClassName,
        )}
        autoComplete="off"
        value={value}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        tabIndex={0}
      />
      {formik.touched[`${name}`] && formik.errors[`${name}`] ? (
        <div className="text-sm text-red mt-1">{formik.errors[`${name}`]}</div>
      ) : null}
      {/* Menu */}
      <div
        className={classNames(
          'dropdown-content max-h-[256px] overflow-auto flex-col rounded-sm shadow-custom_1 py-4',
          menuWrapperClassName,
        )}
        style={{ width: ref.current?.clientWidth }}
      >
        <ul>
          {items.map((item, index) => {
            return (
              <li
                key={index}
                tabIndex={index + 1}
                onClick={() => {
                  formik.setFieldValue(name, item);
                  setOpen(false);
                }}
                className={classNames('flex items-center', menuItemClassName)}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default memo(Autocomplete);
