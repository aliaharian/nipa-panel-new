import React from "react";
import ReactInputMask from "react-input-mask";
import { Input, InputAdornment, TextField as MuiTextField, OutlinedInput } from "@mui/material";
import transform from "app/utils/transform";

type TextFieldProps = {
  name: string;
  label?: any;
  type?: string;
  placeholder?: string | null;
  formik?: any;
  mask?: string;
  maskChar?: string;
  inputActions?: any;
  className?: string;
  normal?: boolean;
  endEndorement?: any;
  multiline?: boolean;
  readonly?: boolean;
};
const TextField = ({
  name,
  label,
  formik,
  type = "text",
  placeholder,
  maskChar,
  className,
  mask,
  inputActions,
  normal,
  endEndorement,
  multiline,
  readonly
}: TextFieldProps) => {

  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      {label && <div className="text-sm mb-2 flex justify-between w-full">
        <label htmlFor={name} className="font-normal !text-xs">{label}</label>
        {inputActions?.()}
      </div>}

      {!normal ? <ReactInputMask
        mask={mask ? mask : ""}
        maskChar={maskChar ? maskChar : " "}
        value={formik?.values?.[name]}
        type={type}
        dir="rtl"
        className={`w-full h-12 border border-text-400 rounded-[8px] p-2 text-sm focus:border-primary-main !outline-none invalid:border-error-primary ${formik?.errors?.[name] && formik?.touched?.[name]
          ? "!border-error-primary"
          : ""
          }`}
        id={name}
        name={name}
        style={{ direction: type == "tel" ? "ltr" : "rtl" }}
        placeholder={placeholder || ""}
        readOnly={readonly}
        onChange={(e) => {
          //formik handlechange without mask
          formik?.handleChange({
            target: {
              name,
              value: e.target.value,
              // value: e.target.value.replace(/ /g, ""),
            },
          });
        }}
      ></ReactInputMask> :

        <Input
          value={type == "number"?
            //convert to persian digits put commas
            transform.toPersianDigitsPutCommas(formik?.values?.[name])
            : formik?.values?.[name]
          }
          type={"text"}
          readOnly={readonly}
          id={name}
          name={name}
          multiline={multiline}
          rows={multiline ? 4 : 1}
          placeholder={placeholder || ""}
          onChange={(e) => {
            const value = transform.convetToEnglishDigitsRemoveCommas(e.target.value);
            //formik handlechange without mask
            formik?.handleChange({
              //accept only number
              target: {
                name,
                //accept number only 
                value: type == "number" ? value.match(/\d+/g)?.join("") || "" : e.target.value,
                // value: e.target.value.replace(/ /g, ""),
              },
            });
          }}
          
          disableUnderline
          endAdornment={<InputAdornment position="end" >{endEndorement}</InputAdornment>}
          className={`!text-sm text-text-400 w-full ${
            multiline ? "h-[100px] resize-none !p-2" : "h-12"
          } border border-text-400 rounded-[8px] p-2 focus:border-primary-main !outline-none invalid:border-error-primary ${formik?.errors?.[name] && formik?.touched?.[name]
            ? "!border-error-primary"
            : ""
            }`}
        />
      }

      {formik?.errors?.[name] && formik?.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik?.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default TextField;
