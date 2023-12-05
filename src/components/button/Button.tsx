import { CircularProgress } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  simple?: boolean;
  bordered?: boolean;
  href?: string;
  text: any;
  onClick?: () => void;
  icon?: any;
  after?: boolean;
  sm?: boolean;
  xs?: boolean;
  gray?: boolean;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
};
const Button = ({
  type,
  simple,
  bordered,
  href,
  text,
  onClick,
  icon,
  after,
  sm,
  xs,
  gray,
  disabled,
  loading,
  className
}: ButtonProps) => {
  const classNames = `w-full ${className} ${
    xs ? "h-[36px]" : sm ? "h-[38px]" : "h-12"
  } rounded-[8px] flex items-center justify-center bg-primary-main text-white ${
    bordered
      ? "border border-primary-main bg-transparent !text-primary-main"
      : ""
  }
   ${simple ? "border-none bg-transparent !text-primary-main" : ""}
   ${gray ? "border-none !bg-text-200 !text-text-500" : ""}
    ${disabled ? "opacity-90 cursor-not-allowed pointer-events-none" : ""}
  `;
  const handleIcon = () => {
    if (icon) {
      return <div className="inline-block ml-[4px]">{icon}</div>;
    } else {
      return <></>;
    }
  };
  return (
    <>
      {href && (
        <Link to={href} className={classNames}>
          {!after && handleIcon()}
          {loading ? <CircularProgress className="!text-white !w-[20px] !h-[20px]"/> : text}
          {after && handleIcon()}
        </Link>
      )}
      {type && (
        <button className={classNames} type={type}>
          {!after && handleIcon()}
          {loading ? <CircularProgress className="!text-white !w-[20px] !h-[20px]"/> : text}
          {after && handleIcon()}
        </button>
      )}
      {onClick && (
        <button className={classNames} onClick={onClick}>
          {!after && handleIcon()}
          {loading ? <CircularProgress className="!text-white !w-[20px] !h-[20px]"/> : text}
          {after && handleIcon()}
        </button>
      )}
    </>
  );
};
export default Button;
