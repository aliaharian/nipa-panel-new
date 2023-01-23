import { useFormik } from "formik";
import React, { useEffect } from "react";
import TextField from "../../components/form/TextField";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import { useAppDispatch, useAppSelector } from "../../app/redux/hooks";
import { sendOtp } from "../../app/redux/users/actions";
import { useNavigate } from "react-router-dom";
import VerifyText from "../../components/form/VerifyText";

interface initialValues {
  mobile?: string | null;
  code: string;
}

const validationSchema = Yup.object().shape({
  mobile: Yup.string()
    .min(11, "شماره موبایل صحیح نیست")
    .max(11, "شماره موبایل صحیح نیست ")
    .required("شماره موبایل الزامی است"),
    code: Yup.string()
    .min(5, "کد صحیح نیست")
    .max(5, "کد صحیح نیست ")
    .required("کد الزامی است"),
});
const VerifyPhone = () => {
  //formik
  const mobile = useAppSelector((state) => state.users.mobile);

  const initialValues: initialValues = {
    mobile: mobile,
    code: "",
  };
  const Navigate = useNavigate();
  const Dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      Dispatch(sendOtp(values));
    },
  });

  useEffect(() => {
    !mobile && Navigate("/auth/login", { replace: true });
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold mb-7">کد تایید را وارد کنید</h1>
      <p className="text-text-500">کد ۵ رقمی به شماره {mobile} ارسال شد.</p>

      <form onSubmit={formik.handleSubmit} className="w-full px-[80px]">
        <div className="mt-7 w-full">
          <VerifyText
            name="code"
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
export default VerifyPhone;
