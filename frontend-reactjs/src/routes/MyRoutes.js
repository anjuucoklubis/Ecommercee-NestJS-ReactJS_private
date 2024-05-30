import React from "react";
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useAuth } from "../guard/AuthContext.js";
import Landing from "../modules/portal/landing/Landing.tsx";
import DetailProduct from "../modules/portal/detail-product/DetailProduct.tsx";

import RtlLayout from "../modules/cms/layouts/rtl/RTL.tsx";
import AdminLayout from "../modules/cms/layouts/admin/Admin.tsx";
import AuthLayout from "../modules/cms/layouts/auth/Auth.tsx";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/auth/sign-in" replace />;
};

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/detail-product/:productId" element={<DetailProduct />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route
        path="admin/*"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      />
      <Route path="rtl/*" element={<RtlLayout />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
}
