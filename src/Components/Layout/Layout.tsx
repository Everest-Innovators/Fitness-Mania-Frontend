import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      Layou
      <Outlet />
    </div>
  );
};

export default Layout;
