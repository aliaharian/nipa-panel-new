import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import Select from "react-select";
import { FormOption } from "../../app/models/form";

type TextFieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string | null;
  formik: any;
  mask?: string;
  maskChar?: string;
  inputActions?: any;
  className?: string;
  options?: FormOption[];
  disabled?: boolean;
};
const DropDown = ({
  name,
  label,
  formik,
  type,
  placeholder,
  maskChar,
  className,
  mask,
  inputActions,
  options,
  disabled,
}: TextFieldProps) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (e: any) => {
    setSelectedOption(e);
    console.log("nice car");
    // formik?.handleChange(e);
    formik.handleChange({
      target: {
        name,
        value: e.value,
        type: e.type,
        // value: e.target.value.replace(/ /g, ""),
      },
    });
  };
  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-sm mb-2 flex justify-between w-full">
        <label className="font-normal" htmlFor={name}>
          {label}
        </label>
        {inputActions?.()}
      </div>
      <Select
        isDisabled={disabled}
        defaultValue={formik.values ? formik.values[name] : selectedOption}
        onChange={handleChange}
        value={
          formik.values
            ? options?.find((x) => x.value === formik.values[name])
            : selectedOption
        }
        placeholder={placeholder}
        options={options}
        className="w-full h-12 !outline-none"
        classNames={{
          control: (state) =>
            `h-12 !rounded-[6px] !outline-none !shadow-none ${
              state.isFocused ? "!border-primary-main" : "border-text-300"
            }`,
          placeholder: (state) => `text-right text-xs`,
          singleValue: (state) => `text-right text-xs`,
          valueContainer: (state) => `!outline-none`,
          indicatorSeparator: (state) => `!hidden`,
          menu: (state) =>
            `!shadow-none border border-text-400 !rounded-[6px] py-[6px]`,
          option: (state) => `p-[6px] ${state.isFocused ? "" : ""}`,
        }}
        styles={{
          option: (baseStyles, state) => ({
            "&>p": {
              cursor: "pointer",
              backgroundColor:
                state.isFocused || state.isSelected ? "#eef3fa" : "#fff",
              height: 40,
              display: "flex",
              fontWeight: "normal",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px",
              borderRadius: "4px",
              color: "#1f1f1f",
            },
          }),
        }}
      />

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default DropDown;
