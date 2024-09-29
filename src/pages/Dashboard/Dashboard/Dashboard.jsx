import { Link, Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import profile from "../../../assets/doctor.jpg";

const Dashboard = () => {
  return (
    <div className="font-poppins antialiased">
      <Navbar></Navbar>
      <div id="view" className="h-full mt-4 flex flex-row">
        <div
          id="sidebar"
          className="bg-white h-screen md:block shadow-xl fixed px-3 overflow-hidden z-10 w-14 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
        >
          <div className="space-y-6 md:space-y-10 mt-10">
            <h1 className="font-bold text-4xl text-center md:hidden">
              D<span className="text-pink-600">.</span>
            </h1>
            <h1 className="hidden md:block font-bold text-sm md:text-xl text-center">
              Doctor Dashboard<span className="text-pink-600">.</span>
            </h1>
            <div id="profile" className="space-y-3">
              <img
                src={profile}
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-pink-500">
                  Doctor
                </h2>
              </div>
            </div>

            <div id="menu" className="flex flex-col space-y-2">
              <Link
                to="/dashboard"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-pink-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
              >
                <div className="flex ">
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="hidden md:block">Profile</span>
                </div>
              </Link>
              <Link
                to="/dashboard/add-vaccine"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-pink-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <div className="flex">
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                  </svg>
                  <span className="hidden md:block">Add Vaccine</span>
                </div>
              </Link>
              <Link
                to="/dashboard/patient-schedule"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-pink-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <div className="flex">
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                    <path
                      fillRule="evenodd"
                      d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="hidden md:block">Patient Vaccine List</span>
                </div>
              </Link>
              <Link
                to="/dashboard/vaccine-list"
                className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-pink-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
              >
                <div className="flex">
                  <svg
                    className="w-6 h-6 fill-current inline-block"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                  </svg>
                  <span className="hidden md:block">Vaccine Control</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile-description-container m-auto " id="container">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
