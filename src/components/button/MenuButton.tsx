import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  icon?: any;
  after?: boolean;
  ref?: any;
};
const MenuButton = ({ text, onClick, icon, after,ref }: ButtonProps) => {
  const handleIcon = () => {
    if (icon) {
      return <div className="inline-block text-text-600">{icon}</div>;
    } else {
      return <></>;
    }
  };
  return (
    <button
      ref={ref}
      className={"border border-text-400 bg-transparent rounded-full text-text-900 w-full h-[38px] flex items-center justify-center hover:bg-text-4"}
      onClick={onClick}
    >
      {!after && handleIcon()}
      {text}
      {after && handleIcon()}
    </button>
  );
};
export default MenuButton;
