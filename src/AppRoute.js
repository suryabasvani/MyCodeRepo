import React from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import MasterLayout from "./common/UI/MasterLayout";
import AdminLayout from "./features/Admin/UI/AdminLayout";
import Dashboard from "./features/Admin/Dashboard";
import Doctors from "./features/Admin/Doctors/Doctors";
import Doctor from "./features/Doctor/Doctor";
import Nurses from "./features/Nurse/Nurses";
import MyAccounts from "./features/Accouts/MyAccounts";
import Accounts from "./features/Admin/Accounts";
import Patients from "./features/Admin/Patients/Patients";
import Patient from "./features/Patient/Patient";
import Details from "./features/Admin/Doctors/Details";
import AddDoctor from "./features/Admin/Doctors/Add_Doctor";

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
            { path: "", element: <Navigate to="dashboard" /> },
            { path: "dashboard", element: <Dashboard /> },
          ],
        },
        {
          path: "doctors",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Doctors /> },
            { path: "list/details/:docid", element: <Details /> },
            { path: "add_doctor", element: <AddDoctor /> },
          ],
        },
        {
          path: "nurses",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Nurses /> },
          ],
        },
        {
          path: "accounts",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Accounts /> },
          ],
        },
        {
          path: "patients",
          element: <Outlet />,
          children: [
            { path: "", element: <Navigate to="list" /> },
            { path: "list", element: <Patients /> },
          ],
        },
      ],
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
