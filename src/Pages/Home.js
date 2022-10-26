import React from 'react';
import { useLoaderData } from 'react-router-dom';
import headerImg from '../Resources/Header.jpg'
import DisplayCourses from './Others/DisplayCourses';

const Home = () => {
  const topCourses = useLoaderData();
  console.log(topCourses)

  return (
    <div>
      <header className=''>
        <img className='object-cover object-center w-full h-96' src={headerImg} alt="header-img" />
      </header>

      
    </div>
  );
};

export default Home;