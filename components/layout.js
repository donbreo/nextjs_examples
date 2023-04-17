import Header from './header'
import Footer from './footer'
import React, { useState, useContext } from 'react'
import AuthContext from "../store/authStore";

export default function Layout({ children }) {
  const loginAuthContext = useContext(AuthContext);
  const [state, setState] = useState({
    handleToggleMenu: true,
    loggedIn_Info: {},
    isLoggedIn: false,
    isLoginOpen: false,
  });
  loginAuthContext.toggleLoginPopup = () => {
    /* Logic to open login popup here */
    /* This will be called from anywhere within the entire website */
  };
  
  useState(()=>{
    /* add logic to fetch userData from localstorage if present */
    /* else conditionaly show login/sign up in head if not not logged in */
    /* delete userData in case of logout */
  },[])
  const submitLogin = (args) =>{
    /* get login data as userData */
    /* accept args from login window */
    /* assign data from login api  */
    /* setState((prevState) => {
      return {
        ...prevState,
        isLoggedIn: true,
        loggedIn_Info: userData
      };
    }); */
  }

  return (
    <AuthContext.Provider
      value={{
        ...loginAuthContext,
        loggedIn_Info: state?.loggedIn_Info,
        isLoggedIn: state?.isLoggedIn,
      }}
    >
      <Header />
        <main>{children}</main>
      <Footer />
    </AuthContext.Provider>
  )
}