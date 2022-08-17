import React, { useContext, useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const UserContext = React.createContext();
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [myUser, setMyUSer] = useState(null);

  //set user if there is or not
  useEffect(() => {
    setMyUSer(user);
  }, [user]);

  //remove user from local storage
  const removeStorage = () => {
    localStorage.removeItem('user');
  };
  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, myUser, removeStorage }}
    >
      {children}
    </UserContext.Provider>
  );
};
// make sure use
export const useUserContext = () => {
  return useContext(UserContext);
};
