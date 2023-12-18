import React, { useEffect, useState } from "react";
import { FormOption } from "../../app/models/form";
import Radio from "./Radio";

type RadioGroupProps = {
  name: string;
  label: string;
  formik: any;
  inputActions?: any;
  className?: string;
  options?: FormOption[];
  labelClass?: string;
  lg?: boolean;
};
const RadioGroup = ({
  name,
  label,
  formik,
  className,
  inputActions,
  options,
  labelClass,
  lg
}: RadioGroupProps) => {
  // const [selectedOption, setSelectedOption] = useState<string>(
  //   formik.values[name]
  // );
  const handleChange = (item: any) => {
    // setSelectedOption(item.value);
    formik.handleChange({
      target: {
        name,
        value: item.value,
      },
    });
  };
  useEffect(() => {
    // setSelectedOption(formik.values[name]);
  }
    , [formik.values[name]])
  return (
    <div
      className={`flex flex-col w-full items-start justify-start ${className}`}
    >
      <div className="text-sm mb-2 flex justify-between w-full">
        <label htmlFor={name} className={`font-normal text-xs ${labelClass}`}>{label}</label>
        {inputActions?.()}
      </div>

      <div className="flex gap-4 items-center justify-items-stretch w-full max-w-full flex-wrap">
        {options?.map((item, index) => (
          <Radio
            lg={lg}
            key={index}
            className="group"
            name={name}
            value={item.value}
            label={item.label}
            checked={formik.values[name] === item.value}
            handleCheck={() => handleChange(item)}
          />
        ))}
      </div>

      {formik.errors?.[name] && formik.touched?.[name] && (
        <p className="text-error-primary text-[10px] mt-1">
          {formik.errors?.[name]}
        </p>
      )}
    </div>
  );
};
export default RadioGroup;
