import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  icon?: any;
  after?: boolean;
  ref?: any;
  simple?:boolean;
};
const MenuButton = ({ text, onClick, icon, after,ref,simple=false }: ButtonProps) => {
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
      className={`${!simple?"border border-text-400":""} bg-transparent rounded-full text-text-900 w-full h-[38px] flex ltr:flex-row-reverse items-center justify-center hover:bg-text-4`}
      onClick={onClick}
    >
      {!after && handleIcon()}
      {!simple && text}
      {after && handleIcon()}
    </button>
  );
};
export default MenuButton;
