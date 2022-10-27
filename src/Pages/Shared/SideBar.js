import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaCode, FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import { UserContext } from '../../Contexts/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SideBar = () => {
  const navigate = useNavigate();
  const {googleUser, githubUser, facebookUser} = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [categories, setCategories] = useState([]);


  useEffect( () => {
    fetch("http://localhost:5000/categories")
    .then(res => res.json())
    .then(data => setCategories(data))
  },[])


  // Google user
  const handleGoogle = () => {
    googleUser()
    .then(result => {
      const user = result.user;
      console.log(user);
      setErrorMessage('');
      navigate('/');
      toast.success("Account has been registered successfully through Google!!!", {autoClose: 1500});
    })
    .catch(err => {
      console.error(err);
      setErrorMessage(err.message);
    })
  } 
  // Facebook user
  const handleFacebook = () => {
    facebookUser()
    .then(result => {
      const user = result.user;
      console.log(user);
      setErrorMessage('');
      navigate('/');
      toast.success("Account has been registered successfully through Facebook!!!", {autoClose: 1500});
    })
    .catch(err => {
      console.error(err);
      setErrorMessage(err.message);
    })
  } 
  // GitHub user
  const handleGitHub = () => {
    githubUser()
    .then(result => {
      const user = result.user;
      console.log(user);
      setErrorMessage('');
      navigate('/');
      toast.success("Account has been registered successfully through GitHub!!!", {autoClose: 1500});
    })
    .catch(err => {
      console.error(err);
      setErrorMessage(err.message);
    })
  } 

  return (
    <div className='my-10 px-8 flex flex-col lg:sticky top-5'>
      <section>
        <h2 className='text-3xl font-semibold text-slate-100 mb-6 flex flex-wrap'><p className='bg-gray-500 p-1 pl-2'>Course</p><p className='bg-orange-500 p-1 pr-2'>Categories</p></h2>
        <div className='grid md:grid-cols-3 lg:block'>
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
        </div>
      </section>
      <hr className='border-1 border-gray-500 my-10' />
      <section>
      <h2 className='text-3xl font-semibold text-slate-100 mb-8 flex flex-wrap'><p className='bg-gray-500 p-1 pl-2'>Quick</p><p className='bg-orange-500 p-1 pr-2'>Registration</p></h2>
        <div className='grid md:grid-cols-3 lg:flex flex-col gap-4'>
          <button onClick={handleGoogle} className='bg-gray-900 hover:bg-gray-800 text-slate-100 text-lg py-2 w-full rounded-md grid lg:grid grid-cols-2 items-center md:flex justify-center gap-4'><p className='justify-self-end'><FaGoogle/></p> <p className='justify-self-start'>Google</p></button>
          <button onClick={handleGitHub} className='bg-gray-900 hover:bg-gray-800 text-slate-100 text-lg py-2 w-full rounded-md grid lg:grid grid-cols-2 items-center md:flex justify-center gap-4'><p className='justify-self-end'><FaGithub/></p> <p className='justify-self-start'>GitHub</p></button>
          <button onClick={handleFacebook} className='bg-gray-900 hover:bg-gray-800 text-slate-100 text-lg py-2 w-full rounded-md grid lg:grid grid-cols-2 items-center md:flex justify-center gap-4'><p className='justify-self-end'><FaFacebookF/></p> <p className='justify-self-start'>Facebook</p></button>
        </div>
      </section>
    </div>
  );
};

export default SideBar;