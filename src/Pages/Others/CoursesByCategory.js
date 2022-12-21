import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayCourses from './DisplayCourses';

const CoursesByCategory = () => {
  const courses = useLoaderData();
  const [state, setState] = useState('');

  return (
    <div className='w-11/12 mx-auto my-20'>
      <h1 className='text-4xl text-white font-semibold mb-6'>{state}</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {
            courses.map(course => <DisplayCourses key={course.id} course={course} setState={setState} />)
          }
        </div>
    </div>
  );
};

export default CoursesByCategory;