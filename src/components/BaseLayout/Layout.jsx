import React from "react";
import Navbar from "../Navbar/Navbar";
import NavbarLogin from "../NavbarLogin/NavbarLogin";

const Layout = ({ children }) => {
  return (
    <div className="base-layout">
      <NavbarLogin></NavbarLogin>

      <div className="container">{children}</div>
    </div>
  );
};

export default Layout;
