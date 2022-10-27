import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'

export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
  
  // Create a user account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Update user information like Email & Password
  const updateUserInfo = (name, imageURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageURL
    });
  }

  // Verify email
  const verifyEmail = () => {
    return sendEmailVerification(auth.currentUser);
  }


  const authInfo = {createUser, updateUserInfo, verifyEmail};

  return (
    <div>
      <UserContext.Provider value={authInfo}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default AuthContext;