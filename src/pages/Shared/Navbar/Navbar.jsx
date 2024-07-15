import { Link } from "react-router-dom";
import Navimg from "../../../assets/global.png";
import {
  useGlobalState,
  useGlobalStateUpdate,
} from "../../../Layout/GlobalState";

export const Navbar = () => {
  const globalState = useGlobalState();
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
    <div className="w-full shadow-lg">
      <div className="navbar w-full lg:w-3/4  m-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/" className="text-lg font-bold hover:text-pink-500">
                  Home
                </a>
              </li>

              <li>
                <a
                  href="/about-us"
                  className="text-lg font-bold hover:text-pink-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/vaccine-campaign"
                  className="text-lg font-bold hover:text-pink-500"
                >
                  All Vaccine
                </a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="flex gap-1 items-center">
            <img src={Navimg} className="w-16" alt="" />
            <h1 className="black-ops-one-regular md:block hidden font-bold text-4xl text-pink-600">
              VacciSure
            </h1>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/" className="text-lg font-bold hover:text-pink-500">
                Home
              </a>
            </li>

            <li>
              <a
                href="/about-us"
                className="text-lg font-bold hover:text-pink-500"
              >
                About us
              </a>
            </li>
            <li>
              <a
                href="/vaccine-campaign"
                className="text-lg font-bold hover:text-pink-500"
              >
                All Vaccine
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {globalState.isAuthenticated ? (
            <>
              <Link
                onClick={handleLogout}
                className="btn uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Logout
              </Link>
              {globalState.isPatient ? (
                <Link
                  to={"profile/"}
                  className="btn uppercase py-2  px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md"
                >
                  Profile
                </Link>
              ) : (
                <Link
                  to={"dashboard/"}
                  className="btn uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md"
                >
                  Dashboard
                </Link>
              )}
            </>
          ) : (
            <>
              <a
                className="btn uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                href="/login"
              >
                Login
              </a>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost ml-4 btn-circle avatar"
                >
                  <a className="btn uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md">
                    Register
                  </a>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a
                      className="justify-between p-2 hover:bg-pink-500 hover:text-white text-pink-600 font-bold"
                      href="/register"
                    >
                      Register as Patient
                    </a>
                  </li>
                  <li>
                    <a
                      href="/register/doctor"
                      className="p-2 hover:bg-pink-500 hover:text-white text-pink-600 font-bold"
                    >
                      Register as Doctor
                    </a>
                  </li>
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
