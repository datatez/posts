import React, { useContext } from 'react';
import './styles/app.css';
import {BrowserRouter} from "react-router-dom";
import Navbar from './components/UI/button/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true)
    }
    setLoading(false);
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

export default App;