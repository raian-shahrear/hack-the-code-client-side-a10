import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import headerImg from '../Resources/Header.jpg'
import DisplayCourses from './Others/DisplayCourses';

const Home = () => {
  useTitle('Home')
  const topCourses = useLoaderData();
  const [state, setState] = useState('');
  return (
    <div>
      <header className=''>
        <img className='object-cover object-center w-full h-96' src={headerImg} alt="header-img" />
      </header>

      <div className='w-11/12 mx-auto my-20'>
        <h1 className='text-4xl text-white font-semibold mb-10'>{state}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            topCourses.map(course => <DisplayCourses key={course.id} course={course} setState={setState} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Home;