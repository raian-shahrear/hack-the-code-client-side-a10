import React, { useState } from 'react';
import { FaSnowflake, FaToggleOff, FaToggleOn } from "react-icons/fa";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { Link, NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkLight, setDarkLight] = useState(true);
  const {user, signOutUser} = useContext(UserContext);

  return (
    <div className="bg-gray-900">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <a
            href="/"
            className="inline-flex items-center text-4xl text-yellow-500"
          >
            <FaSnowflake />
            <span className="ml-2 text-2xl font-bold tracking-wide text-sky-500 uppercase custom-logo">
              Hack The Code
            </span>
          </a>
          <ul className="flex items-center hidden space-x-8 lg:flex">
            <li onClick={() => setDarkLight(!darkLight)} className='text-2xl text-white cursor-pointer'>
              {
                darkLight ? 
                <div className='flex items-center gap-4' title='Dark Mode'>
                  <FaToggleOff/>
                  <BsFillMoonFill className='text-yellow-100'/>
                </div>
                :
                <div className='flex items-center gap-2' title='Light Mode'>
                  <FaToggleOn/>
                  <BsFillSunFill className='text-yellow-500'/>
                </div>
              }
            </li>
            <li>
              <NavLink
                to="/home"
                className={({isActive}) => isActive ? "font-medium tracking-wide text-yellow-500" : "font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-yellow-500"}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({isActive}) => isActive ? "font-medium tracking-wide text-yellow-500" : "font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-yellow-500"}
              >
                Courses
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={({isActive}) => isActive ? "font-medium tracking-wide text-yellow-500" : "font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-yellow-500"}
              >
                FAQ
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className={({isActive}) => isActive ? "font-medium tracking-wide text-yellow-500" : "font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-yellow-500"}
              >
                Blog
              </NavLink>
            </li>
            {
              !user?.uid ? 
              <li>
                <NavLink
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={({isActive}) => isActive ? "border-2 border-transparent py-1 rounded-md font-medium tracking-wide text-white bg-yellow-600" : "border-2 border-sky-500 bg-transparent py-1 rounded-md font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-white hover:bg-yellow-600 hover:border-transparent"}
                >
                  <button className='w-24'>Log In</button>
                </NavLink>
              </li>
              :
              <>
                <li>
                  <button
                    onClick={() => {
                      signOutUser();
                      toast.warning("Sign Out Successfully!!!", {autoClose: 1500})
                    }}
                    className="border-2 border-red-500 bg-transparent py-1 w-24 rounded-md font-medium tracking-wide text-red-500 transition-colors duration-200 hover:text-white hover:bg-red-500 hover:border-transparent"
                  >
                    Sign Out
                  </button>
                </li>
                <li>
                  <Link to="/user-profile" className='flex items-center gap-3 opacity-90 hover:opacity-100'>
                    {
                      <div className="tooltip tooltip-bottom" data-tip={user?.displayName && user?.displayName}>
                        <>{user?.photoURL && <img src={user?.photoURL} alt="userImg" className='w-14 h-14 rounded-full' />}</>
                      </div>
                    }
                  </Link>
                </li>
              </>
            } 
          </ul>

          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-white" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full z-10">
                <div className="p-5 bg-gray-900 border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        className="inline-flex items-center text-4xl text-yellow-500"
                      >
                        <FaSnowflake />
                        <span className="ml-2 text-2xl font-bold tracking-wide text-sky-500 uppercase custom-logo">
                          Hack The Code
                        </span>
                      </a>
                    </div>
                    <div onClick={() => setDarkLight(!darkLight)} className='text-2xl text-white cursor-pointer'>
                      {
                        darkLight ? 
                        <div className='flex items-center gap-4' title='Dark Mode'>
                          <FaToggleOff/>
                          <BsFillMoonFill className='text-yellow-100'/>
                        </div>
                        :
                        <div className='flex items-center gap-2' title='Light Mode'>
                          <FaToggleOn/>
                          <BsFillSunFill className='text-yellow-500'/>
                        </div>
                      }
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      {
                        user?.uid && 
                        <li>
                          <Link to="/user-profile" onClick={() => setIsMenuOpen(false)} className='flex items-center gap-3 opacity-90 hover:opacity-100'>
                            {
                              <div className="tooltip tooltip-right" data-tip={user?.displayName && user?.displayName}>
                                <>{user?.photoURL && <img src={user?.photoURL} alt="userImg" className='w-14 rounded-full' />}</>
                              </div>
                            }
                          </Link>
                        </li>
                      }
                      
                      <li>
                        <NavLink
                          to="/home"
                          onClick={() => setIsMenuOpen(false)}
                          className={({isActive}) => isActive ? "font-medium tracking-wide text-yellow-500" : "font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-yellow-500"}
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/courses"
                          onClick={() => setIsMenuOpen(false)}
                          className={({isActive}) => isActive ? "font-medium tracking-wide text-yellow-500" : "font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-yellow-500"}
                        >
                          Courses
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/faq"
                          onClick={() => setIsMenuOpen(false)}
                          className={({isActive}) => isActive ? "font-medium tracking-wide text-yellow-500" : "font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-yellow-500"}
                        >
                          FAQ
                        </NavLink>
                      </li>
                      <li>
                      <NavLink
                        to="/blog"
                        onClick={() => setIsMenuOpen(false)}
                        className={({isActive}) => isActive ? "font-medium tracking-wide text-yellow-500" : "font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-yellow-500"}
                      >
                        Blog
                      </NavLink>
                      </li>
                      {
                        !user?.uid ?
                        <li>
                          <NavLink
                            to="/login"
                            onClick={() => setIsMenuOpen(false)}
                            className={({isActive}) => isActive ? "border-2 border-transparent py-1 rounded-md font-medium tracking-wide text-white bg-yellow-600" : "border-2 border-sky-500 bg-transparent py-1 rounded-md font-medium tracking-wide text-sky-500 transition-colors duration-200 hover:text-white hover:bg-yellow-600 hover:border-transparent"}
                          >
                            <button className='w-24'>Log In</button>
                          </NavLink>
                        </li>
                        :
                        <li>
                          <button
                            onClick={() => {
                              setIsMenuOpen(false); 
                              signOutUser();
                              toast.warning("Sign Out Successfully!!!", {autoClose: 1500})
                            }}
                            className="border-2 border-red-500 bg-transparent py-1 w-24 rounded-md font-medium tracking-wide text-red-500 transition-colors duration-200 hover:text-white hover:bg-red-500 hover:border-transparent"
                          >
                            Sign Out
                          </button>
                        </li>
                      }
                      
                      
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;