import React from "react";
import ReactInputMask from "react-input-mask";
import Dropzone from "./Dropzone";

type UploadFileProps = {
  name: string;
  label?: string;
  placeholder?: string;
  formik: any;
  inputActions?: any;
  className?: string;
  imageOnly?: boolean;
};
const UploadFile = ({
  name,
  label,
  formik,
  placeholder,
  className,
  inputActions,
  imageOnly,
}: UploadFileProps) => {
  // console.log("formik.errors?.[name]", formik.values[name]);
  console.log("dvdvdvdvd", placeholder);
  const handleChange = (e: any) => {
    console.log("e", e);
    formik.handleChange({
      target: {
        name,
        value: e,
      },
    });
  };
  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      {label && (
        <div className="text-sm mb-2 flex justify-between w-full">
          <label htmlFor={name}>{label}</label>
          {inputActions?.()}
        </div>
      )}

      <Dropzone
        onFileDrop={handleChange}
        placeholder={placeholder}
        imageOnly={imageOnly}
      />

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default UploadFile;
