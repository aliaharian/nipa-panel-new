import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { useAppDispatch, useAppSelector } from "app/redux/hooks";
import { Backdrop, useMediaQuery } from "@mui/material";
import { setOpenMenu } from "app/redux/application/actions";

const MainLayout = () => {
  const collapseMenu = useAppSelector((state) => state.app.collapseMenu);
  const openMenu = useAppSelector((state) => state.app.openMenu);
  const isMobile = useMediaQuery("(max-width:767px)");
  const Dispatch = useAppDispatch();
  const handleCloseMenu = () => {
    Dispatch(setOpenMenu(false));
  };
  return (
    <div className="mx-auto flex h-[100vh] overflow-auto relative  bg-primary-100 print:overflow-visible">
      <div
        className={`print:hidden h-full sticky top-0
      md:fixed md:z-[999] transition-all
      ${openMenu ? "md:right-0" : "md:right-[-100%]"}
      `}
      >
        {isMobile ? (
          <Backdrop open={openMenu} className="!justify-start" onClick={handleCloseMenu}>
            <Sidebar />
          </Backdrop>
        ) : (
          <Sidebar />
        )}
      </div>
      <div
        className={`w-full min-h-screen h-max
       ${
         collapseMenu ? "max-w-[calc(100vw-84px)]" : "max-w-[calc(100vw-280px)]"
       } print:!max-w-[100vw]
       md:max-w-[100vw] 
       `}
      >
        <Header />
        <div className="p-[31px] print:p-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
