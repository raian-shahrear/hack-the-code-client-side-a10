import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'

export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  
  // Create a user account
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Reset password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
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

  // Google login/signUp
  const googleUser = () => {
    return signInWithPopup(auth, googleProvider);
  }
  // GitHub login/signUp
  const githubUser = () => {
    return signInWithPopup(auth, githubProvider);
  }
  // Facebook login/signUp
  const facebookUser = () => {
    return signInWithPopup(auth, facebookProvider);
  }


  const authInfo = {createUser,loginUser, resetPassword, updateUserInfo, verifyEmail, googleUser, githubUser, facebookUser};

  return (
    <div>
      <UserContext.Provider value={authInfo}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default AuthContext;