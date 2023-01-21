import React from "react";

type TextFieldProps = {
  name: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  type?: string;
  placeholder?: string;
};
const TextField = ({
  name,
  label,
  value,
  onChange,
  error,
  type,
  placeholder,
}: TextFieldProps) => {
  return (
    <div className="form-group">
      <label htmlFor="name">{label}</label>
      <input
        type={type}
        className="form-control"
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
export default TextField;
