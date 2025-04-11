import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Account/Login/Login';
import SignUp from './Components/Account/SignUp/SignUp';
import Home from './pages/Home/Home';
import { useAuth } from './Components/Account/AuthContext';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/account/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
      <Route path="/account/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUp />} />
      {/* Add other routes as necessary */}
    </Routes>
  );
};

export default AppRoutes;
