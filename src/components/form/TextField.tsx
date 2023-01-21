import React from "react";
import ReactInputMask from "react-input-mask";

type TextFieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  formik: any;
  mask?: string;
  maskChar?: string;
};
const textField = ({
  name,
  label,
  formik,
  type,
  placeholder,
  maskChar,
  mask,
}: TextFieldProps) => {
  // console.log("formik.errors?.[name]", formik.values[name]);

  return (
    <div className="flex flex-col w-full items-start justify-start">
      <label htmlFor={name} className="text-sm mb-2">
        {label}
      </label>
      <ReactInputMask
        mask={mask ? mask : ""}
        maskChar={maskChar ? maskChar : " "}
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
        onChange={(e) => {
          //formik handlechange without mask
          formik.handleChange({
            target: {
              name,
              value: e.target.value.replace(/ /g, ""),
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
export default textField;
