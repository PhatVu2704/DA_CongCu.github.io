import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from '../components/Accounts/Login/Login';
import SIGNUP from '../components/Accounts/SignUp/SIGNUP';
import Home from '../pages/Home/Home';
import { useAuth } from '../components/Accounts/AuthContext';
import Intro from '../pages/Intro/Intro'; // Giữ lại từ HEAD
import ContactPage from '../pages/Question/ContactPage';

const AppRoutes = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/Intro" element={<Intro />} /> {/* Giữ lại từ HEAD */}
      </Route>
      <Route path="/news/:id" element={<NewDetail />} />
      <Route path="/ContactPage" element={<ContactPage />} />
      <Route path="/account/login" element={isAuthenticated ? <Navigate to="/" /> : <Login />} /> {/* Từ main */}
      <Route path="/account/signup" element={isAuthenticated ? <Navigate to="/" /> : <SIGNUP />} /> {/* Từ main */}
      {/* Add other routes as necessary */}
    </Routes>
  );
};

export default AppRoutes;