import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../modules/pre-login/login/Login.tsx';
import Landing from '../modules/portal/landing/Landing.tsx';


export default function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}
