import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaCode } from "react-icons/fa";

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect( () => {
    fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])

  return (
    <div className='my-6 px-8'>
      <h2 className='text-2xl font-semibold text-blue-500 mb-2'>Course Categories</h2>
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
      <hr className='border-1 border-gray-500 my-10' />
      <div>

      </div>
    </div>
  );
};

export default SideBar;