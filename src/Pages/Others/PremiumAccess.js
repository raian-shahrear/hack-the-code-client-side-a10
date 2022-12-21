import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../Hooks/useTitle';

const PremiumAccess = () => {
  useTitle('Premium Course')
  const courseDetails = useLoaderData();
  const {courseId, title, image, instructor, price} = courseDetails;
  const navigate = useNavigate();

  const handleCheckOut = () => {
    toast.success('Checkout done successfully!!!', {autoClose: 1500});
  }
  const handleDeleteProduct = () => {
    navigate(`/category/course-details/${courseId}`)
    toast.success('Product deleted successfully!!!', {autoClose: 1500});
  }
  
  return (
    <div className='mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl px-4 md:px-24 lg:px-8 py-24'>
      <div className="flex flex-col max-w-full py-6 space-y-4 sm:p-10 bg-gray-900 text-gray-100">
        <h2 className="text-2xl font-semibold">Your Demo cart</h2>
        <ul className="flex flex-col divide-y divide-gray-700">
          <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
            <div className="flex w-full space-x-2 sm:space-x-4">
              <img className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500" src={image} alt="courseImage" />
              <div className="flex flex-col justify-between w-full pb-4">
                <div className="flex justify-between w-full pb-2 space-x-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">{title}</h3>
                    <p className="text-sm text-gray-400">Taken by <span className='font-semibold'>{instructor}</span></p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold">{price}</p>
                  </div>
                </div>
                <div className="flex text-sm divide-x">
                  <button onClick={handleDeleteProduct} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
                      <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                      <rect width="32" height="200" x="168" y="216"></rect>
                      <rect width="32" height="200" x="240" y="216"></rect>
                      <rect width="32" height="200" x="312" y="216"></rect>
                      <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                    </svg>
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="space-y-1 text-right">
          <p>Total amount:
            <span className="font-semibold ml-2">{price}</span>
          </p>
          <p className="text-sm text-gray-400">Not including taxes and shipping costs</p>
        </div>
        <div className="flex justify-end space-x-4">
          <Link to={`/category/course-details/${courseId}`}>
           <button type="button" className="px-6 py-2 border-2 rounded-md border-blue-300 font-semibold text-blue-300 hover:border-transparent hover:bg-blue-500 hover:text-gray-900">Back <span className="sr-only sm:not-sr-only">to Course</span>
            </button>
          </Link>
          <Link to='/'>
            <button onClick={handleCheckOut} type="button" className="px-6 py-2 border-2 rounded-md bg-yellow-500 text-gray-900 border-transparent font-semibold hover:border-yellow-500 hover:bg-transparent hover:text-yellow-500">
            <span className="sr-only sm:not-sr-only">Continue to </span>Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiumAccess;