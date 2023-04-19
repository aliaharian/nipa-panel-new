import { Switch } from "@mui/material";
import { useState } from "react";
type SwitchButtonProps = {
  checked: boolean;
  setChecked: (checked: boolean) => void;
};

const SwitchButton = ({ checked, setChecked }: SwitchButtonProps) => {
  const handleCheck = () => {
    setChecked(!checked);
  };
  return (
    <div
      onClick={handleCheck}
      className={`w-[36px] h-[20px] rounded-[10px] border ${
        checked ? "border-primary-main" : "border-text-500"
      } flex items-center ${
        checked ? "justify-start" : "justify-end"
      } p-[2px] cursor-pointer`}
    >
      <div
        className={`w-4 h-4 ${
          checked ? "bg-primary-main" : "bg-text-500"
        } rounded-full`}
      ></div>
    </div>
  );
};
export default SwitchButton;
