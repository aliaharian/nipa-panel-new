import {useFormik} from "formik";
import React from "react";
import TextField from "../../components/form/TextField";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import {useNavigate} from "react-router-dom";
import {useSendOtp} from "app/queries/auth/hooks";

interface initialValues {
    mobile: string;
}

const validationSchema = Yup.object().shape({
    mobile: Yup.string()
        .min(13, "شماره موبایل صحیح نیست")
        .max(13, "شماره موبایل صحیح نیست ")
        .required("شماره موبایل الزامی است"),
});
const EnterPhone = () => {
    //formik
    const initialValues: initialValues = {
        mobile: "",
    };
    const Navigate = useNavigate();
    const {loading, mutate} = useSendOtp()
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            mutate({mobile: values.mobile.replaceAll(" ", "")}, {
                onSuccess: () => {
                    Navigate("/auth/verify", {replace: true});
                }
            })
        },
    });

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold mb-7">ورود / ثبت نام</h1>
            <p className="text-text-500">برای ادامه شماره موبایل خود را وارد کنید.</p>

            <form onSubmit={formik.handleSubmit} className="w-full px-[80px]">
                <div className="mt-7 w-full">
                    <TextField
                        name="mobile"
                        mask="0999 999 9999"
                        label="شماره موبایل"
                        type="tel"
                        placeholder="شماره همراه خود را وارد نمایید"
                        formik={formik}
                    />
                </div>
                <div className="mt-20">
                    <Button
                        loading={loading}
                        disabled={loading}
                        text="تایید و دریافت کد"
                        type="submit"
                    />
                    <Button text="ورود با کلمه عبور" href={"/auth/verify"} simple/>
                </div>
            </form>
        </div>
    );
};
export default EnterPhone;
