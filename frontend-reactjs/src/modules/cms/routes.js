import React from "react";

// Admin Imports
import MainDashboard from "./views/admin/default/Dashboard.tsx";
import NFTMarketplace from "./views/admin/marketplace/Marketplace.tsx";
// import Profile from "./views/admin/profile/ProfileOverview.tsx";
// import DataTables from "./views/admin/tables/Tables.tsx";
// import RTLDefault from "./views/rtl/default/Dashboard.tsx";

// Auth Imports
// import SignIn from "./views/auth/SignIn.tsx";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  // MdBarChart,
  MdOutlineProductionQuantityLimits,
  MdGridView
  // MdPerson,
  // MdLock,
  
} from "react-icons/md";
import Product from "./views/product/Product.tsx";
import CategoryProduct from "./views/categoryproduct/CategoryProduct.tsx";
// import AddCategoryProducts from "./views/categoryproduct/AddCategoryProducts.tsx";

const routes = [
  {
    name: "Main Dashboard",
    layout: "/admin",
    path: "default",
    icon: <MdHome className="h-6 w-6" />,
    component: <MainDashboard />,
  },
  {
    name: "Product",
    layout: "/admin",
    path: "product",
    icon: <MdOutlineProductionQuantityLimits className="h-6 w-6" />,
    component: <Product />,
  },
  {
    name: "Category Product",
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
  // {
  //   name: "Sign In",
  //   layout: "/auth",
  //   path: "sign-in",
  //   icon: <MdLock className="h-6 w-6" />,
  //   component: <SignIn />,
  // },
  // {
  //   name: "RTL Admin",
  //   layout: "/rtl",
  //   path: "rtl",
  //   icon: <MdHome className="h-6 w-6" />,
  //   component: <RTLDefault />,
  // },
];
export default routes;
