import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../Pages/Others/NavBar";

const Root = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  );
};

export default Root;