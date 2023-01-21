import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  type?: "button" | "submit" | "reset";
  simple?: boolean;
  bordered?: boolean;
  href?: string;
  text: string;
  onClick?: () => void;
};
const Button = ({
  type,
  simple,
  bordered,
  href,
  text,
  onClick,
}: ButtonProps) => {
  const classNames = `w-full h-12 rounded-[8px] flex items-center justify-center bg-primary-main text-white ${
    bordered
      ? "border border-primary-main bg-transparent text-primary-main"
      : ""
  } ${simple ? "border-none bg-transparent text-primary-main" : ""}`;
  return (
    <>
      {href && (
        <Link to={href}>
          <a className={classNames}>{text}</a>
        </Link>
      )}
      {type && (
        <button className={classNames} type={type}>
          {text}
        </button>
      )}
      {onClick && (
        <button className={classNames} onClick={onClick}>
          {text}
        </button>
      )}
    </>
  );
};
export default Button;
