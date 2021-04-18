import React, { useState, createContext } from 'react';

export const UserContext = createContext<any>(null);

export const UserProvider = (props: {children?: React.ReactChild}) => {
  const [auth, setAuth] = useState();
  const { children } = props;

  return (
    <UserContext.Provider value={[auth, setAuth]}>
      {children}
    </UserContext.Provider>
  )
};