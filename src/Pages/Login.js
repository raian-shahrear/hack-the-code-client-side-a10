import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { UserContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const {loginUser, resetPassword, googleUser, githubUser, facebookUser} = useContext(UserContext);
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // Login account
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      form.reset();
      setErrorMessage('');
      navigate('/');
      toast.success("Successfully logged in!!!", {autoClose: 1500});
    })
    .catch(err => {
      console.error(err);
      setErrorMessage(err.message);
    })
  }


  // Password reset
  const handlePasswordReset = () => {
    resetPassword(email)
    .then(() => {
      alert("Please check your email to reset password!!!");
      setErrorMessage('');
    })
    .catch(err => {
      console.error(err);
      setErrorMessage(err.message);
    })
  }


  // Google user
  const handleGoogle = () => {
    googleUser()
    .then(result => {
      const user = result.user;
      console.log(user);
      setErrorMessage('');
      navigate('/');
      toast.success("Successfully logged in through Google!!!", {autoClose: 1500});
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
      toast.success("Successfully logged in through Facebook!!!", {autoClose: 1500});
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
      toast.success("Successfully logged in through GitHub!!!", {autoClose: 1500});
    })
    .catch(err => {
      console.error(err);
      setErrorMessage(err.message);
    })
  } 

  return (
    <div className='flex justify-center my-20'>
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-gray-900 text-gray-100">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <div>
          {errorMessage && <p className='text-sm text-red-500 my-4 text-center'>Error: {errorMessage}</p>}
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
          <div className="space-y-1 text-sm">
            <label for="uEmail" className="block text-gray-200">Email address</label>
            <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="uEmail" placeholder="valid email" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" />
          </div>
          <div className="space-y-1 text-sm">
            <label for="password" className="block text-gray-200">Password</label>
            <input type="password" name="password" id="password" placeholder="******" className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" />
            <div className="flex justify-end text-xs text-gray-400">
              <p onClick={handlePasswordReset} rel="noopener noreferrer" className='text-yellow-500 cursor-pointer hover:text-gray-100 hover:underline'>Forgot Password?</p>
            </div>
          </div>
          <button className="block w-full p-3 text-center font-semibold rounded-md text-gray-900 bg-blue-500 hover:bg-blue-400">Log In</button>
        </form>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
          <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
          <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4 text-xl">
          <button onClick={handleGoogle} aria-label="Log in with Google" className="p-3">
            <FcGoogle/>
          </button>
          <button onClick={handleGitHub} aria-label="Log in with GitHub" className="p-3">
            <FaGithub/>
          </button>
          <button onClick={handleFacebook} aria-label="Log in with Facebook" className="p-3 text-blue-500">
            <FaFacebookF/>
          </button>
        </div>
        <p className="text-xs text-center sm:px-6 text-gray-400">Don't have an account? Please <Link rel="noopener noreferrer" to="/signup" className="text-yellow-500 hover:text-gray-100 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;