import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import Select from "react-select";
import { FormOption } from "../../app/models/form";
import Checkbox from "./Checkbox";

type TextFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
  formik: any;
  mask?: string;
  maskChar?: string;
  inputActions?: any;
  className?: string;
  options?: FormOption[];
};
const CheckboxGroup = ({
  name,
  label,
  formik,
  
  placeholder,
  maskChar,
  className,
  mask,
  inputActions,
  options,
}: TextFieldProps) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const handleChange = (item: any) => {
    if (selectedOptions.includes(item.value)) {
      let tmp = [...selectedOptions];
      const indexToRemove = tmp.indexOf(item.value);
      // Check if item to remove is found in array
      if (indexToRemove !== -1) {
        // Remove item from array using splice
        tmp.splice(indexToRemove, 1);
        setSelectedOptions([...tmp]);
      }
    } else {
      setSelectedOptions([...selectedOptions, item.value]);
    }
  };
  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-sm mb-2 flex justify-between w-full">
        <label htmlFor={name}>{label}</label>
        {inputActions?.()}
      </div>

      <div className="flex items-center justify-start max-w-full flex-wrap">
        {options?.map((item, index) => (
          <Checkbox
            key={index}
            className="group"
            name={name}
            value={item.value}
            label={item.label}
            checked={selectedOptions.includes(item.value)||false}
            handleCheck={() => handleChange(item)}
          />
        ))}
      </div>
      {/* <Select
        defaultValue={selectedOption}
        onChange={handleChange}
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
              backgroundColor:
                state.isFocused || state.isSelected ? "#eef3fa" : "#fff",
              height: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              padding: "10px",
              borderRadius: "4px",
              color: "#1f1f1f",
            },
          }),
        }}
      /> */}

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default CheckboxGroup;
