import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import NavBar from "../Pages/Shared/NavBar";

const Layout_1 = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-slate-700">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout_1;
