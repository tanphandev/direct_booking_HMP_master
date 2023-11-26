import { forwardRef, useImperativeHandle } from 'react';
import { useFormik } from 'formik';
import DeleteIcon from '../../../../public/assets/icons/DeleteIcon';
import { OTHER_PEOPLE_INFO_SCHEMA } from '@/utils/schema';

type Props = {
  index: number;
  id: string;
  handleDelete: Function;
};

const OtherPeopleInput = forwardRef<any, Props>(function Component({ index, handleDelete, id }, ref) {
  const formik = useFormik({
    initialValues: {
      name: '',
      mail: '',
    },
    validationSchema: OTHER_PEOPLE_INFO_SCHEMA,
    enableReinitialize: true,
    onSubmit: (values) => {},
  });

  useImperativeHandle(ref, () => ({
    formik,
    id: id,
  }));

  return (
    <form onSubmit={formik.handleSubmit} className="grid grid-cols-12 py-2 min-h-[54px] ">
      <div className="col-span-1 h-[38px] font-bold flex items-center justify-center">{index + 1}</div>
      <div className="col-span-4">
        <input
          className="primary-input border border-black-0.3 rounded-md px-[12px] mr-[6px] outline-none"
          placeholder="John Doe"
          {...formik.getFieldProps('name')}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="text-sm text-red mt-1">{formik.errors.name}</div>
        ) : null}
      </div>
      <div className="col-span-6">
        <input
          className="primary-input border border-black-0.3 rounded-md px-[12px] ml-[6px] outline-none"
          placeholder="johndoe@example.com1"
          {...formik.getFieldProps('mail')}
        />
        {formik.touched.mail && formik.errors.mail ? (
          <div className="text-sm text-red mt-1 ml-2">{formik.errors.mail}</div>
        ) : null}
      </div>
      <div className="col-span-1 h-[38px] flex justify-center items-center">
        <div
          onClick={() => {
            handleDelete(id);
          }}
        >
          <DeleteIcon className="cursor-pointer" width="24px" height="24px" />
        </div>
      </div>
    </form>
  );
});

export default OtherPeopleInput;
