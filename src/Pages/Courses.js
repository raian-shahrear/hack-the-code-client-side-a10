import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../Hooks/useTitle';
import DisplayCourses from './Others/DisplayCourses';

const Courses = () => {
  const courses = useLoaderData();
  const [state, setState] = useState();
  useTitle('Courses');

  return (
    <div>
      <div className='w-11/12 mx-auto my-20'>
        <h1 className='text-4xl text-white font-semibold mb-10'>All Courses</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            courses.map(course => <DisplayCourses key={course.courseId} course={course} setState={setState} />)
          }
        </div>
      </div>
    </div>
  );
};

export default Courses;