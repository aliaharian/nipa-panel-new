import React, { useState } from "react";
import ReactInputMask from "react-input-mask";
import Select from "react-select";

type TextFieldProps = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  formik: any;
  mask?: string;
  maskChar?: string;
  inputActions?: any;
  className?: string;
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
}: TextFieldProps) => {
  // console.log("formik.errors?.[name]", formik.values[name]);
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (e: any) => {
    console.log("eee", e);
    setSelectedOption(e);
  };
  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-sm mb-2 flex justify-between w-full">
        <label htmlFor={name}>{label}</label>
        {inputActions?.()}
      </div>
      <Select
        defaultValue={selectedOption}
        onChange={handleChange}
        placeholder={placeholder}
        options={options}
        className="w-full h-12 !outline-none"

        classNames={{
          control: (state) =>
            `h-12 !rounded-[6px] !outline-none !shadow-none ${state.isFocused ? '!border-primary-main' : 'border-text-300'}`,
            placeholder:(state)=> `text-right`,
            singleValue:(state)=>`text-right`,
            valueContainer:(state)=>`!outline-none`
            
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
