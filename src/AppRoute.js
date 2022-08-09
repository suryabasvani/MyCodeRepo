import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import MasterLayout from "./common/UI/MasterLayout";
import AdminLayout from "./features/Admin/UI/AdminLayout";
import Nothing from "./Nothing";
import Dashboard from "./features/Admin/Dashboard";
import Doctors from "./features/Admin/Doctors/Doctors";
import Doctor from "./features/Doctor/Doctor";
//import Nurses from "./features/Nurse/Nurses";
import DefaultPage from "./common/Pages/Default";
import MyAccounts from "./features/Accouts/MyAccounts";
import Accounts from "./features/Admin/Accounts";
import Patients from "./features/Admin/Patients/Patients";
import Patient from "./features/Patient/Patient";
import Details from "./features/Admin/Doctors/Details";
import AddDoctor from "./features/Admin/Doctors/Add_Doctor";
import AddPatient from "./features/Admin/Patients/AddPatient";
import Nurseslist from "./features/Admin/Nurses/Nurseslist";
import AddNurse from "./features/Admin/Nurses/AddNurse";
import Pharmacy from "./features/Admin/Pharmacy/Pharmacy";
import CartList from "./features/Admin/Pharmacy/CartList";

function AppRoute(props) {
  const appRoutes = [
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "",
          element: <Outlet />,
          children: [
            //{ path: "", element: <Login /> },
            // { path: "", element: <Navigate to="dashboard" /> },
            { path: "dashboard", element: <Dashboard /> },
            { path: "*", element: <Nothing /> },
          ],
        },
        {
          path: "doctors",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Doctors /> },
            { path: "list/details/:docid", element: <Details /> },
            { path: "add", element: <AddDoctor /> },
            { path: "*", element: <Nothing /> },
          ],
        },
        {
          path: "nurses",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Nurseslist /> },
            { path: "add", element: <AddNurse /> },
            { path: "*", element: <Nothing /> },
          ],
        },
        {
          path: "accounts",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Accounts /> },
            { path: "*", element: <Nothing /> },
          ],
        },
        {
          path: "patients",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Patients /> },
            { path: "add", element: <AddPatient /> },
            { path: "*", element: <Nothing /> },
          ],
        },
        {
          path: "pharmacy",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Pharmacy /> },
            { path: "cart", element: <CartList /> },
          ],
        },
      ],
    },
    {
      path: "",
      element: <DefaultPage />,
    },
    {
      path: "/doctor",
      element: <MasterLayout />,
      children: [
        {
          path: "",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="details" /> },
            { path: "details", element: <Doctor /> },
            { path: "*", element: <Nothing /> },
          ],
        },
      ],
    },
    {
      path: "/accounts",
      element: <MasterLayout />,
      children: [
        {
          path: "",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="details" /> },
            { path: "details", element: <MyAccounts /> },
            { path: "*", element: <Nothing /> },
          ],
        },
      ],
    },
    {
      path: "/patient",
      element: <MasterLayout />,
      children: [
        {
          path: "",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="details" /> },
            { path: "details", element: <Patient /> },
            { path: "*", element: <Nothing /> },
          ],
        },
      ],
    },
    {
      path: "",
      element: <Navigate to="/admin" />,
    },
  ];

  const routing = useRoutes(appRoutes);
  return <>{routing}</>;
}

export default AppRoute;
