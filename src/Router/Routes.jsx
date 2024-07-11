import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import Vaccines from "../pages/Vaccines/Vaccines/Vaccines";
import Profile from "../pages/Profile/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import VaccineDetails from "../pages/Vaccines/VaccineDetails/VaccineDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Registration></Registration>,
      },
      {
        path: "/vaccine-campaign",
        element: <Vaccines />,
      },
      {
        path: "/vaccine-campaign/details/:id",
        element: <VaccineDetails />,
      },
      {
        path: "/profile",
        element: <PrivateRoute element={<Profile></Profile>} />,
      },
      {
        path: "/dashboard",
        element: <PrivateRoute element={<Dashboard />} />,
      },
    ],
  },
]);
