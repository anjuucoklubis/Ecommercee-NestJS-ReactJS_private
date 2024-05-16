import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../modules/pre-login/login/Login.tsx";
import Landing from "../modules/portal/landing/Landing.tsx";
import DetailProduct from "../modules/portal/detail-product/DetailProduct.tsx";


import RtlLayout from "../modules/cms/layouts/rtl/RTL.tsx";
import AdminLayout from "../modules/cms/layouts/admin/Admin.tsx";
import AuthLayout from "../modules/cms/layouts/auth/Auth.tsx";
export default function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/detail-product/:productId" element={<DetailProduct />} />
        <Route path="auth/*" element={<AuthLayout />} />
        <Route path="admin/*" element={<AdminLayout />} />
        <Route path="rtl/*" element={<RtlLayout />} />
        <Route path="/" element={<Navigate to="/admin" replace />} />
      </Routes>
    </Router>
  );
}
