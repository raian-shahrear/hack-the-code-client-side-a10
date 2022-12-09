import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.config'
import { useState } from 'react';
import { useEffect } from 'react';

export const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  

  // Create a user account
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login user
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Reset password
  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  }

  // Update user information like Email & Password
  const updateUserInfo = (name, imageURL) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageURL
    });
  }

  // Verify email
  const verifyEmail = () => {
    setLoading(true);
    return sendEmailVerification(auth.currentUser);
  }

  // Google login/signUp
  const googleUser = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  }
  // GitHub login/signUp
  const githubUser = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  }
  // Facebook login/signUp
  const facebookUser = () => {
    setLoading(true);
    return signInWithPopup(auth, facebookProvider);
  }

  // Get currently logged in user
  useEffect( () => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribe();
    }
  }, [])

  // Sign out user
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  }


  const authInfo = {user, loading, createUser,loginUser, resetPassword, updateUserInfo, verifyEmail, googleUser, githubUser, facebookUser, signOutUser};

  return (
    <div>
      <UserContext.Provider value={authInfo}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default AuthContext;