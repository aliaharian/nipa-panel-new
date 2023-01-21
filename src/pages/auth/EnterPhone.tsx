import { useFormik } from "formik";
import React from "react";
import MobilePhone from "../../components/form/MobilePhone";
import * as Yup from "yup";
import Button from "../../components/button/Button";

interface initialValues {
  phone: string;
}
const validationSchema = Yup.object().shape({
  phone: Yup.string()
    .min(11, "شماره موبایل صحیح نیست")
    .max(11, "شماره موبایل صحیح نیست ")
    .required("شماره موبایل الزامی است"),
});
const EnterPhone = () => {
  //formik
  const initialValues: initialValues = {
    phone: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("dssdsds", values);
    },
  });

  console.log(formik);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-7">ورود / ثبت نام</h1>
      <p className="text-text-500">برای ادامه شماره موبایل خود را وارد کنید.</p>

      <form onSubmit={formik.handleSubmit} className="w-full px-[80px]">
        <div className="mt-7 w-full">
          <MobilePhone
            name="phone"
            label="شماره موبایل"
            type="tel"
            placeholder="شماره همراه خود را وارد نمایید"
            formik={formik}
          />
        </div>
        <div className="mt-20">
          <Button text="تایید و دریافت کد" type="submit" />
        </div>
      </form>
    </div>
  );
};
export default EnterPhone;
