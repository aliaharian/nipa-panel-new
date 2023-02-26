import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

const MainLayout = () => {
  return (
    <div className="mx-auto flex h-[100vh] overflow-auto relative  bg-primary-100">
      <div className="h-full sticky top-0">
        <Sidebar />
      </div>
      <div className="w-full min-h-screen h-max">
        <Header />
        <div className="p-[31px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
