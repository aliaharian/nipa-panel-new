import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="mx-auto flex items-center bg-primary-100">
      <div>
        <Sidebar />
      </div>
      <div className="w-full min-h-screen">
        <Header />
        <div className="p-[31px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
