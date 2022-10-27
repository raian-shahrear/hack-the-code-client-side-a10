import React from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/AuthContext';

const UserProfile = () => {
  const {user} = useContext(UserContext);
  const nameRef = useRef(user?.displayName);
  const photoRef = useRef(user?.photoURL);

  const handleSaveChange = (event) => {
    event.preventDefault();
    if(nameRef && photoRef){
      alert(`Name and Photo URL has been changed as '${nameRef.current.value}' and '${photoRef.current.value}' respectively`);
    }
  }

  if(user && user.uid){
    return (
      <div className='flex justify-center my-20'>
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-900 text-gray-100">
  
        <div className="flex flex-col justify-center max-w-full p-6 ">
            <img src={user?.photoURL && user.photoURL} alt="profileImg" className="w-32 h-32 mx-auto rounded-full aspect-square" />
            <div className="text-center divide-y">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName ? user.displayName : "Not Available"}</h2>
                <p className="px-5 text-xs sm:text-base">Email: {user?.email ? user.email : "Not Available"}</p>
                <p className="px-5 text-xs sm:text-base">Status: {user?.emailVerified ? <span className='text-green-500'>Verified</span> : <span className='text-red-500'>Not Verified</span>}</p>
              </div>
            </div>
          </div>
          
          <div className=" w-full mb-10">
            <hr className="w-full text-gray-400"/>
          </div>
          <form onSubmit={handleSaveChange} className="space-y-8 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div className="space-y-2">
                <label for="email" className="block text-sm">Email address</label>
                <input type="email" name="email" id="email" defaultValue={user?.email ? user.email : "email is not available"} className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" readOnly />
              </div>
              <div className="space-y-2">
                <label for="uname" className="block text-sm">Change Your Name</label>
                <input type="text" name="name" id="uname" ref={nameRef} defaultValue={user?.displayName ? user.displayName : "name is not available"} className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" />
              </div>
              <div className="space-y-2">
                <label for="url" className="block text-sm">Change Your Photo URL</label>
                <input type="text" name="image" id="url" ref={photoRef} defaultValue={user?.photoURL ? user.photoURL : "photoURL is not available"} className="w-full px-4 py-3 rounded-md border-gray-700 bg-gray-200 text-gray-900 focus:border-blue-900" />
              </div>
            </div>
            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-blue-500 hover:bg-blue-400 text-gray-900">Save Change</button>
          </form>
        </div>
      </div>
    );
  }else{
    return (
      <div className='flex flex-col items-center my-64 text-center gap-6'>
        <h2 className='text-4xl font-semibold text-slate-200'>Only authorized user can access this information</h2>
        <Link to='/login'><h5 className='text-3xl font-semibold text-blue-500'>Please Login</h5></Link>
      </div>
    )
  }
};

export default UserProfile;