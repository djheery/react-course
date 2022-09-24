import React, { useCallback, useEffect, useState } from 'react';

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {}
})

let logoutTimer;

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const eTime = new Date(expirationTime).getTime();
  const remainingDuration = eTime - currentTime;
  return remainingDuration;
}

const retrieveStoreToken = () => {
  const initialToke = localStorage.getItem('token');
  const storedExpirationDate = localStorage.getItem('expirationTime');
  const remainingTime = calculateRemainingTime(storedExpirationDate);
  if(remainingTime <= 0) {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    return null;
  } 
  return {
    token: initialToke,
    time: remainingTime
  }
}

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoreToken();
  let initialToken;
  if(tokenData)
    initialToken = tokenData.token

  const [token, setToken] = useState(initialToken);
  const isLoggedIn = !!token;


  const loginHandler = (token, expirationTime) => {
    setToken(token)
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime)
    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  }

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
    if(logoutTimer)
      clearTimeout(logoutTimer);
  }, [])

  useEffect(() => {
    if(tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.time)
    }
  }, [tokenData, logoutHandler])

  const contextValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler
  }
  
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;
