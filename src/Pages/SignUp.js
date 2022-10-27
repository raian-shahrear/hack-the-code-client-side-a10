import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";

const SignUp = () => {
  return (
    <div className='flex justify-center my-20'>
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
        <h2 className="mb-3 text-3xl font-semibold text-center">Register an account</h2>
        <p className="text-sm text-center text-gray-400">Already have an account? Please <Link to="/login" rel="noopener noreferrer" className="text-yellow-500 hover:text-gray-100 hover:underline">Log In</Link>
        </p>
        <div className="my-6 space-y-4">
          <button aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-blue-500">
            <FcGoogle className='text-lg'/>
            <p>Login with Google</p>
          </button>
          <button aria-label="Login with GitHub" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-blue-500">
            <FaGithub className='text-lg'/>
            <p>Login with GitHub</p>
          </button>
          <button aria-label="Login with Facebook" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-blue-500">
            <FaFacebookF className='text-lg text-blue-500'/>
            <p>Login with Twitter</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400"/>
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400"/>
        </div>
        <form className="space-y-8 ng-untouched ng-pristine ng-valid">
          <div className="space-y-4">
            <div className="space-y-2">
              <label for="uname" className="block text-sm">Full Name</label>
              <input type="text" name="name" id="uname" placeholder="first name / last name" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" />
            </div>
            <div className="space-y-2">
              <label for="url" className="block text-sm">Image URL</label>
              <input type="text" name="image" id="url" placeholder="image url" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" />
            </div>
            <div className="space-y-2">
              <label for="email" className="block text-sm">Email address</label>
              <input type="email" name="email" id="email" placeholder="valid email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" />
            </div>
            <div className="space-y-2">
              <label for="password" className="block text-sm">Password</label>
              <input type="password" name="password" id="password" placeholder="******" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" />
            </div>
          </div>
          <button type="button" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 hover:bg-blue-400 text-gray-900">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;