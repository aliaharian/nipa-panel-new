import {useFormik} from "formik";
import React, {useEffect} from "react";
import * as Yup from "yup";
import Button from "../../components/button/Button";
import {useAppSelector} from "app/redux/hooks";
import {useNavigate} from "react-router-dom";
import VerifyText from "../../components/form/VerifyText";
import {useConfirmOtp} from "app/queries/auth/hooks";
import {userLoginType} from "@models/auth";

interface initialValues {
    mobile?: string | null;
    otp: string;
}

const validationSchema = Yup.object().shape({
    mobile: Yup.string()
        .min(11, "شماره موبایل صحیح نیست")
        .max(11, "شماره موبایل صحیح نیست ")
        .required("شماره موبایل الزامی است"),
    otp: Yup.string()
        .min(5, "کد صحیح نیست")
        .max(5, "کد صحیح نیست ")
        .required("کد الزامی است"),
});
const VerifyPhone = () => {
    //formik
    const mobile = useAppSelector((state) => state.users.mobile);
    const initialValues: initialValues = {
        mobile: mobile,
        otp: "",
    };
    const Navigate = useNavigate();
    const {mutate, loading} = useConfirmOtp();
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            mutate(values, {
                onSuccess: (data: userLoginType) => {
                    data?.token && Navigate("/dashboard", {replace: true});
                }
            })
        },
    });

    useEffect(() => {
        !mobile && Navigate("/auth/login", {replace: true});
    }, [mobile, Navigate]);

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold mb-7">کد تایید را وارد کنید</h1>
            <p className="text-text-500">کد ۵ رقمی به شماره {mobile} ارسال شد.</p>

            <form onSubmit={formik.handleSubmit} className="w-full px-[80px]">
                <div className="mt-7 w-full">
                    <VerifyText
                        name="otp"
                        formik={formik}
                    />
                </div>
                <div className="mt-20">
                    <Button text="تایید و دریافت کد" type="submit" loading={loading} disabled={loading}/>
                </div>
            </form>
        </div>
    );
};
export default VerifyPhone;
