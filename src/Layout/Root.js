import React from 'react';
import {Outlet} from "react-router-dom";
import NavBar from "../Pages/Others/NavBar";
import SideBar from '../Pages/Others/SideBar';

const Root = () => {
  return (
    <div>
      <NavBar/>
      <div className='grid grid-cols-12'>
        <section className='col-span-3 bg-yellow-500'>
          <SideBar />
        </section>
        <section className='col-span-9 bg-slate-700'>
          <Outlet />
        </section>
      </div>
      <h1 className='text-center text-white  py-16 bg-gray-900'>Footer Area</h1>
    </div>
  );
};

export default Root;