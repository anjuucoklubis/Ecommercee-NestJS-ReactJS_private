import React from "react";

// Admin Imports
import Product from "./views/product/Product.tsx";
import CategoryProduct from "./views/categoryproduct/CategoryProduct.tsx";
import Role from "./views/auth/role/Role.tsx";
import MainDashboard from "./views/admin/default/Dashboard.tsx";
import NFTMarketplace from "./views/admin/marketplace/Marketplace.tsx";
// import Profile from "./views/admin/profile/ProfileOverview.tsx";
// import DataTables from "./views/admin/tables/Tables.tsx";
// import RTLDefault from "./views/rtl/default/Dashboard.tsx";

// Auth Imports
import Login from "../pre-login/login/Login.tsx";
import Register from "../pre-login/register/Register.tsx";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdOutlineProductionQuantityLimits,
  MdGridView,
  MdOutlineManageAccounts,
  MdLock,
  // MdBarChart,
  // MdPerson,
} from "react-icons/md";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Role",
    layout: "/admin",
    path: "role",
    icon: <MdOutlineManageAccounts className="h-6 w-6" />,
    component: <Role />,
  },
  {
    name: "Produk",
    layout: "/admin",
    path: "product",
    icon: <MdOutlineProductionQuantityLimits className="h-6 w-6" />,
    component: <Product />,
  },
  {
    name: "Kategori Produk",
    layout: "/admin",
    path: "category",
    icon: <MdGridView className="h-6 w-6" />,
    component: <CategoryProduct />,
  },
  {
    name: "NFT Marketplace",
    layout: "/admin",
    path: "nf  t-marketplace",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <NFTMarketplace />,
    secondary: true,
  },

  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <Login />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <Register />,
  },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
  // {
  //   name: "Data Tables",
  //   layout: "/admin",
  //   icon: <MdBarChart className="h-6 w-6" />,
  //   path: "data-tables",
  //   component: <DataTables />,
  // },

  // {
  //   name: "Profile",
  //   layout: "/admin",
  //   path: "profile",
  //   icon: <MdPerson className="h-6 w-6" />,
  //   component: <Profile />,
  // },
];
export default routes;
