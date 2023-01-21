import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../logo/Logo";
import AuthPattern from "../artworks/AuthPattern";

const AuthLayout = () => {
  return (
    <div className="w-full h-[100vh]">
      <div className="h-[50vh] w-full bg-primary-100"></div>
      <div className="flex flex-col items-center justify-center absolute w-full h-full top-0 left-0">
        <Logo />
        <div className="mt-[70px] w-[480px] h-[426px] relative">
          <AuthPattern className="-top-[60px] -right-[60px]" />
          <AuthPattern className="-bottom-[60px] -left-[60px]" />
          <div className="w-full rounded-[8px] h-full bg-white shadow-outline-primary relative z-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
