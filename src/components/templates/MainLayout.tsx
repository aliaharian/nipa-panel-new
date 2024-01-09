import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useAppSelector } from "app/redux/hooks";

const MainLayout = () => {
  const collapseMenu = useAppSelector((state) => state.app.collapseMenu);

  return (
    <div className="mx-auto flex h-[100vh] overflow-auto relative  bg-primary-100 print:overflow-visible">
      <div className={`print:hidden h-full sticky top-0`}>
        <Sidebar />
      </div>
      <div className={`w-full min-h-screen h-max ${collapseMenu?"max-w-[calc(100vw-84px)]":"max-w-[calc(100vw-280px)]"} print:!max-w-[100vw]`}>
        <Header />
        <div className="p-[31px] print:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
