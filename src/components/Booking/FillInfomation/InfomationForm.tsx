import { useFormik } from 'formik';
import { forwardRef, useImperativeHandle } from 'react';
import { useTranslation } from 'react-i18next';

import InputField from '@/components/common/InputField/InputField';
import CountriesAutocomplete from '@/components/common/AutoComplete/CountriesAutocomplete';
import 'react-phone-input-2/lib/style.css';
import { GUEST_INFO_SCHEMA, ORDER_INFO_SCHEMA } from '@/utils/schema';
import PhoneInput from 'react-phone-input-2';

type Props = {
  type: 'order' | 'guest';
};

const InformationForm = forwardRef<any, Props>(function Component({ type }, ref) {
  const { t } = useTranslation();
  const formik = useFormik({
    initialValues: {
      full_name: '',
      mail: '',
      phone_number: '',
      country: '',
    },
    validationSchema: type === 'order' ? ORDER_INFO_SCHEMA : GUEST_INFO_SCHEMA,
    onSubmit: (values) => {},
  });

  useImperativeHandle(ref, () => ({
    formik: formik,
  }));

  return (
    <form onSubmit={formik.handleSubmit} className="mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[10px] gap-y-4">
        <InputField
          labelClassName="text-base text-grey-21 mb-2"
          inputClassName="primary-input"
          isRequire={true}
          id="order-fullname"
          name="full_name"
          label={t('BOOKING_FORM.USER_INPUT_FORM.NAME_TITLE')}
          placeHolder={t('BOOKING_FORM.USER_INPUT_FORM.NAME_PLACEHOLDER')}
          value={formik.values.full_name}
          formik={formik}
        />
        <InputField
          labelClassName="text-base text-grey-21 mb-2"
          inputClassName="primary-input"
          isRequire={type === 'order' ? true : false}
          id="order-email"
          name="mail"
          label={t('BOOKING_FORM.USER_INPUT_FORM.EMAIL_TITLE')}
          placeHolder={t('BOOKING_FORM.USER_INPUT_FORM.EMAIL_PLACEHOLDER')}
          value={formik.values.mail}
          formik={formik}
        />
        <div className="flex flex-col">
          <label className="mb-2">
            {t('BOOKING_FORM.USER_INPUT_FORM.PHONE_TITLE')}
            {type === 'order' ? (
              <span className="text-red ml-1">*</span>
            ) : (
              <span className="text-grey-99 ml-1">{`(${t('BOOKING_FORM.USER_INPUT_FORM.OPTIONAL')})`}</span>
            )}
          </label>
          <div>
            <PhoneInput
              inputProps={{
                name: 'phone',
              }}
              inputClass="order-phone-input !w-full !text-base text-grey-21 px-[12px] py-[6px] border-[1px] border-grey-d9 focus:!border-blue-80 focus:shadow-[0_0_0_0.2rem_rgba(0,123,255,.25)] rounded-md"
              buttonClass="phone-code"
              dropdownClass="!w-[292px] !mt-[1px] !shadow-custom_1"
              country={'vn'}
              value={formik.values.phone_number}
              onChange={(phone_number) => {
                formik.setFieldValue('phone_number', phone_number);
              }}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone_number && formik.errors.phone_number ? (
              <div className="text-sm text-red mt-1">{formik.errors.phone_number}</div>
            ) : null}
          </div>
        </div>
        <CountriesAutocomplete name="country" formik={formik} isRequire={true} value={formik.values.country} />
      </div>
    </form>
  );
});

export default InformationForm;
