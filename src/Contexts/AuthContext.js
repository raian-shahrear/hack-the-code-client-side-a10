import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../Firebase/firebase.config'

const UserContext = createContext();
const auth = getAuth(app);

const AuthContext = ({children}) => {
  


  const authInfo = {};

  return (
    <div>
      <UserContext.Provider value={authInfo}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default AuthContext;