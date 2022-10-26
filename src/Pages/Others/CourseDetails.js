import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaExclamationCircle, FaRegCalendarAlt, FaTeamspeak, FaCheck } from "react-icons/fa";
import { BiWorld } from "react-icons/bi";
import { VscFilePdf } from "react-icons/vsc";
import { TbCertificate, TbWorld } from "react-icons/tb";
import { AiOutlineClockCircle } from "react-icons/ai";

const CourseDetails = () => {
  const detailsOfCourse = useLoaderData();
  const {courseId, title, courseOverview, details, difficulty, enrolled, image, instructor, language, price, ratings, totalHour} = detailsOfCourse;
  return (
    <div>
      <div className='bg-blue-900 h-auto lg:h-96'>
        <section className='text-white w-11/12 mx-auto py-12 flex flex-col-reverse gap-10 lg:gap-2 lg:grid grid-cols-12'>
          <div className='col-span-8'>
            <div className='flex items-start gap-3'>
              <button className='hover:text-white text-yellow-500'><VscFilePdf className='text-4xl' title='Download PDF' /></button>
              <h1 className='text-4xl font-semibold'>{title}</h1>
            </div>
            <h4 className='mt-4 mb-2'>{details}</h4>
            <div className='flex items-center gap-3 text-yellow-500'>
              <p className='font-semibold'><small>{ratings}</small></p>
              <p className='flex'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStarHalfAlt/>
              </p>
              <p className='text-white'><small><span className='font-semibold'>{enrolled}</span> students already enrolled</small></p>
            </div>
            <p className='my-2'><small>Taken by <span className='font-semibold text-yellow-500'>{instructor}</span></small></p>
            <div className='flex items-center gap-3'>
              <p className='flex items-center gap-1'>
                <FaExclamationCircle/>
                <small>Last updated 10/2022</small>
              </p>
              <p className='flex items-center gap-1'>
                <BiWorld/>
                <small>{language}</small>
              </p>
            </div>
            <div className='mt-10'>
              <Link>
                <button className='bg-yellow-500 py-2 px-4 rounded-md text-blue-900 font-semibold hover:bg-yellow-600'>
                  <p>Get Premium Access</p>
                  <p>{price}</p>
                </button>
              </Link>
            </div>
          </div>
          <div className='col-span-4'>
            <img className='h-auto w-full lg:h-96 rounded-md' src={image} alt="course-img" />
          </div>
        </section>
      </div>

      <div className='my-24 w-11/12 mx-auto'>
        <section className='grid grid-cols-1 lg:grid-cols-12 gap-10'>
          <div className='lg:col-span-8 bg-gray-900 text-white p-10'>
            <h2 className='text-xl'>Course Overview</h2>
            <hr className='mt-2 mb-6' />
            {
              courseOverview.map((overview, idx) => <li key={idx} className='list-none flex items-baseline gap-3 mb-4'><FaCheck/> {overview}</li>)
            }
          </div>
          <div className='lg:col-span-4'>
            <ul className='bg-gray-900 text-white text-lg p-10'>
              <li className='flex items-center gap-2 mb-4'><FaRegCalendarAlt/> Flexible deadlines</li>
              <li className='flex items-center gap-2 mb-4'><TbCertificate/> Shareable Certificate</li>
              <li className='flex items-center gap-2 mb-4'><FaRegCalendarAlt/> {difficulty} Level</li>
              <li className='flex items-center gap-2 mb-4'><TbWorld/> 100% online</li>
              <li className='flex items-center gap-2 mb-4'><FaTeamspeak/> {language}</li>
              <li className='flex items-center gap-2 mb-4'><AiOutlineClockCircle/> {totalHour} video</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetails;