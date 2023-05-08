import React from "react";
import ReactInputMask from "react-input-mask";

type TextFieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string|null;
  formik: any;
  mask?: string;
  maskChar?: string;
  inputActions?: any;
  className?: string;
};
const TextField = ({
  name,
  label,
  formik,
  type,
  placeholder,
  maskChar,
  className,
  mask,
  inputActions,
}: TextFieldProps) => {
  // console.log("formik.errors?.[name]", formik.values[name]);

  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-sm mb-2 flex justify-between w-full">
        <label htmlFor={name} className="font-normal">{label}</label>
        {inputActions?.()}
      </div>

      <ReactInputMask
        mask={mask ? mask : ""}
        maskChar={maskChar ? maskChar : " "}
        value={formik.values?.[name]}
        type={type}
        dir="rtl"
        className={`w-full h-12 border border-text-400 rounded-[8px] p-2 text-xs focus:border-primary-main !outline-none invalid:border-error-primary ${
          formik.errors?.[name] && formik.touched?.[name]
            ? "!border-error-primary"
            : ""
        }`}
        id={name}
        name={name}
        style={{ direction: type == "tel" ? "ltr" : "rtl" }}
        placeholder={placeholder||""}
        onChange={(e) => {
          //formik handlechange without mask
          formik.handleChange({
            target: {
              name,
              value: e.target.value,
              // value: e.target.value.replace(/ /g, ""),
            },
          });
        }}
      ></ReactInputMask>

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default TextField;
