import { useState } from "react";
import {
  FiHome,
  FiBarChart2,
  FiMenu,
  FiUser,
  FiBox,
  FiList,
  FiSliders,
} from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { useGlobalStateUpdate } from "../../../Layout/GlobalState";
import { DashboardDataProvider } from "../../../context/DashBoardDataContext";

const DoctorDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activePage, setActivePage] = useState("Home");
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const setGlobalState = useGlobalStateUpdate();

  const handleLogout = async () => {
    setGlobalState((prevState) => ({
      ...prevState,
      isAuthenticated: false,
      isPatient: false,
      isDoctor: true,
    }));
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("patient_id");
    localStorage.removeItem("doctor_id");
  };

  return (
    <DashboardDataProvider>
      <div className="flex h-auto min-h-screen">
        <div
          className={`bg-white text-black w-64 p-5 space-y-4 fixed inset-y-0 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 md:relative transition-transform duration-300 ease-in-out z-20`}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <FaUserCircle className="mr-2 text-pink-600" />
            DoctorBoard
          </h2>
          <nav>
            <ul className="space-y-4">
              {[
                // { name: "Home", icon: <FiHome /> },
                // { name: "Analytics", icon: <FiBarChart2 /> },
                { name: "Profile", icon: <FiUser /> },
                { name: "Add Vaccine", icon: <FiBox /> },
                { name: "Patient Vaccine List", icon: <FiList /> },
                { name: "Vaccine Control", icon: <FiSliders /> },
              ].map((page) => (
                <li key={page.name}>
                  <Link
                    to={`/doctor-dashboard/${page.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    onClick={() => {
                      setActivePage(page.name);
                    }}
                    className={`flex items-center p-2 rounded ${
                      activePage === page.name
                        ? "bg-pink-600 text-white"
                        : "hover:bg-gray-100 hover:text-black"
                    }`}
                  >
                    <span className="mr-2">{page.icon}</span>
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex-1 bg-gray-100">
          <header className="bg-white shadow-md p-4 flex justify-between items-center md:px-6">
            <button
              onClick={toggleSidebar}
              className="text-gray-800 focus:outline-none md:hidden"
            >
              <FiMenu className="text-2xl" />
            </button>

            <h1 className="text-lg font-semibold">Dashboard</h1>

            <div className="relative">
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="text-gray-800 focus:outline-none flex items-center"
              >
                <FiUser className="text-2xl" />
              </button>
              {profileMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 z-10">
                  <Link
                    to="/doctor-dashboard/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Go to home
                  </Link>
                  <a
                    href="#logout"
                    onClick={handleLogout}
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  >
                    Logout
                  </a>
                </div>
              )}
            </div>
          </header>

          {/* Content */}
          <div className="p-6">
            <h2 className="text-3xl font-bold mb-4">{activePage}</h2>

            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </DashboardDataProvider>
  );
};

export default DoctorDashboard;
