import React from "react";
import ReactInputMask from "react-input-mask";
import TextField from "./TextField";

type TextFieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  formik: any;
};
const MobilePhone = ({
  name,
  label,
  formik,
  type,
  placeholder,
}: TextFieldProps) => {
  console.log("formik.errors?.[name]", formik);
  return (
    <div className="flex flex-col w-full items-start justify-start">
      <label htmlFor={name} className="text-sm mb-2">
        {label}
      </label>
      <ReactInputMask
        mask="0999 999 9999"
        maskChar=" "
        value={formik.values?.[name]}
        type={type}
        dir="auto"
        className={`w-full h-12 border border-text-400 rounded-[8px] p-2 text-xs focus:border-primary-main !outline-none invalid:border-error-primary ${
          formik.errors?.[name] && formik.touched?.[name]
            ? "!border-error-primary"
            : ""
        }`}
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={formik.handleChange}
      ></ReactInputMask>

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">{formik.errors?.[name]}</p>
      )}
    </div>
  );
};
export default MobilePhone;
