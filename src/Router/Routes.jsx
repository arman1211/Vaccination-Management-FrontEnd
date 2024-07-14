import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Authentication/Login/Login";
import Registration from "../pages/Authentication/Registration/Registration";
import Vaccines from "../pages/Vaccines/Vaccines/Vaccines";
import Profile from "../pages/Profile/Profile/Profile";
import PrivateRoute from "./PrivateRoute";
import VaccineDetails from "../pages/Vaccines/VaccineDetails/VaccineDetails";
import DoctorRegistration from "../pages/Authentication/Registration/DoctorRegistration";
import Dashboard from "../pages/Dashboard/Dashboard/Dashboard";
import ViewProfile from "../pages/Dashboard/ViewProfile/ViewProfile";
import AddVaccineCampaign from "../pages/Dashboard/AddVaccineCampaign/AddVaccineCampaign";
import PatientVaccineList from "../pages/Dashboard/PatientVaccineList/PatientVaccineList";
import AllVaccineList from "../pages/Dashboard/AllVaccineList/AllVaccineList";
import ContactUs from "../pages/ContactUs/ContactUs";

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
        path: "/register/doctor",
        element: <DoctorRegistration />,
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
        path: "/about-us",
        element: <ContactUs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard",
        element: <PrivateRoute element={<ViewProfile></ViewProfile>} />,
      },
      {
        path: "/dashboard/add-vaccine",
        element: (
          <PrivateRoute element={<AddVaccineCampaign></AddVaccineCampaign>} />
        ),
      },
      {
        path: "/dashboard/patient-schedule",
        element: (
          <PrivateRoute element={<PatientVaccineList></PatientVaccineList>} />
        ),
      },
      {
        path: "/dashboard/vaccine-list",
        element: <PrivateRoute element={<AllVaccineList></AllVaccineList>} />,
      },
    ],
  },
]);
