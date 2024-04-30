import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portal from '../modules/portal/Portal.tsx';
import Login from '../modules/pre-login/login/Login.tsx';


export default function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portal />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </Router>
  );
}
