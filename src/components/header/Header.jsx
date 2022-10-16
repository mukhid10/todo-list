import React from "react";
import { Outlet } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div>
      <div className="container-fluid header d-flex align-items-center">
        <div className="container d-flex align-items-center">
          <p className="text-white m-0">TO DO LIST APP</p>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Header;
