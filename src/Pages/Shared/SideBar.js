import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaCode, FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  return (
    <div className='my-10 px-8 flex flex-col lg:sticky top-5'>
      <section>
        <h2 className='text-3xl font-semibold text-slate-100 mb-6 flex flex-wrap'><p className='bg-gray-500 p-1 pl-2'>Course</p><p className='bg-orange-500 p-1 pr-2'>Categories</p></h2>
        <div className='grid md:grid-cols-3 lg:block'>
          {
            categories.map(category => <li key={category.categoryId} className="list-none">
              <NavLink 
              to={`/categories/courses/${category.categoryId}`} 
              className={({isActive}) => isActive ? "font-semibold text-lg text-gray-900 flex items-center gap-4" : " font-semibold text-lg text-gray-600 flex items-center gap-4"}>
                <FaCode />
                <p>{category.categoryName}</p>
              </NavLink>
              </li>)
          }
        </div>
      </section>
      <hr className='border-1 border-gray-500 my-10' />
      <section>
      <h2 className='text-3xl font-semibold text-slate-100 mb-8 flex flex-wrap'><p className='bg-gray-500 p-1 pl-2'>Quick</p><p className='bg-orange-500 p-1 pr-2'>Registration</p></h2>
        <div className='grid md:grid-cols-3 lg:flex flex-col gap-4'>
          <Link><button className='bg-gray-900 hover:bg-gray-800 text-slate-100 text-lg py-2 w-full rounded-md grid lg:grid grid-cols-2 items-center md:flex justify-center gap-4'><p className='justify-self-end'><FaGoogle/></p> <p className='justify-self-start'>Google</p></button></Link>
          <Link><button className='bg-gray-900 hover:bg-gray-800 text-slate-100 text-lg py-2 w-full rounded-md grid lg:grid grid-cols-2 items-center md:flex justify-center gap-4'><p className='justify-self-end'><FaGithub/></p> <p className='justify-self-start'>GitHub</p></button></Link>
          <Link><button className='bg-gray-900 hover:bg-gray-800 text-slate-100 text-lg py-2 w-full rounded-md grid lg:grid grid-cols-2 items-center md:flex justify-center gap-4'><p className='justify-self-end'><FaFacebookF/></p> <p className='justify-self-start'>Facebook</p></button></Link>
        </div>
      </section>
    </div>
  );
};

export default SideBar;