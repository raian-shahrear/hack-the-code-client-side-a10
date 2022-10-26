import React from 'react';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';

const DisplayCourses = ({course, setState}) => {
  const {image, title, details, price, ratings, categoryName, courseId} = course;
  setState(categoryName);
  
  return (
    <section>
      <div className="max-w-full h-full rounded-md shadow-md shadow-slate-900 bg-gray-900 text-gray-100 relative">
        <img src={image} alt="course-img" className="object- object-center w-full rounded-t-md h-72 bg-gray-200" />
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2 mb-10">
            <h2 className="text-xl font-semibold tracking-wide">{title.length > 25 ? title.slice(0, 25) + "..." : title}</h2>
            <p className="text-gray-200"><small>{details?.length > 50 ? details.slice(0, 49) + "...": details}</small></p>
            <div className='flex items-center gap-3 text-yellow-500'>
              <p className='font-semibold'><small>{ratings}</small></p>
              <p className='flex'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStarHalfAlt/>
              </p>
            </div>
            <p className='font-semibold'>{price}</p>
            <div className={`badge badge-warning font-semibold ${course?.isAdded ? "hidden" : "block"}`}>{!course?.isAdded ? "Bestseller" : ""}</div>
          </div>
          <div className='absolute w-full bottom-0 left-0'>
            <Link to={`/category/course-details/${courseId}`}>
              <button type="button" className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-br-md rounded-bl-md bg-blue-500 text-gray-900 hover:bg-blue-400">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisplayCourses;