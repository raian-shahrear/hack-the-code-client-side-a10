import React from 'react';
import {Outlet} from "react-router-dom";
import Footer from '../Pages/Shared/Footer';
import NavBar from "../Pages/Shared/NavBar";
import SideBar from '../Pages/Shared/SideBar';

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
      <Footer />
    </div>
  );
};

export default Root;