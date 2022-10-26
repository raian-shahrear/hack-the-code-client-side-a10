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

      <div className='w-11/12 mx-auto my-20'>
        <h1 className='text-4xl text-white font-semibold mb-6'>Top Enrolled Courses</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            topCourses.map(course => <DisplayCourses key={course.id} course={course} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;