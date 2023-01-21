import React from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="max-w-md mx-auto">
      <Outlet />
    </div>
  );
};
export default MainLayout;
