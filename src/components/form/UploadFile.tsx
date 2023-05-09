import React, { useRef } from "react";
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
  fileRef?: any;
  disabled?: boolean;
};
const UploadFile = ({
  name,
  label,
  formik,
  placeholder,
  className,
  inputActions,
  imageOnly,
  disabled,
  fileRef,
}: UploadFileProps) => {
  // console.log("formik.errors?.[name]", formik.values[name]);
  console.log("dvdvdvdvd", placeholder);
  const fileRefInside = useRef<HTMLInputElement>(null);

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
      className={`flex flex-col w-full items-start justify-start ${className} ${
        disabled ? "pointer-events-none" : "pointer-events-auto"
      }`}
    >
      {label && (
        <div className="text-sm mb-2 flex justify-between w-full">
          <label htmlFor={name}>{label}</label>
          {inputActions?.()}
        </div>
      )}

      <Dropzone
        disabled={disabled}
        onFileDrop={handleChange}
        placeholder={placeholder}
        imageOnly={imageOnly}
        fileRef={fileRef || fileRefInside}
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
