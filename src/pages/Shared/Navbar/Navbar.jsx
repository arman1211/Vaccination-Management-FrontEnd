import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navimg from "../../../assets/global.png";

export const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const UserToken = localStorage.getItem("token");
    if (UserToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  const handleLogout = async () => {
    // const response = await axios("http://127.0.0.1:8000/user/logout/");
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("patient_id");
    setIsLoggedIn(false);
    window.location.reload();
  };
  return (
    <div className="w-full shadow-lg">
      <div className="navbar w-3/4 m-auto">
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
                <a className="text-lg font-bold hover:text-pink-500">Home</a>
              </li>

              <li>
                <a className="text-lg font-bold hover:text-pink-500">About</a>
              </li>
            </ul>
          </div>
          <Link to={"/"} className="">
            <img src={Navimg} className="w-16" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a className="text-lg font-bold hover:text-pink-500">Home</a>
            </li>

            <li>
              <a className="text-lg font-bold hover:text-pink-500">About us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {isLoggedIn ? (
            <>
              <a
                className="btn mr-6 uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                onClick={handleLogout}
              >
                Logout
              </a>
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between" href="/profile">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a href="/dashboard">Dashboard</a>
                  </li>
                  <li>
                    <a onClick={handleLogout}>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link
                to={"login/"}
                className="btn uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              >
                Login
              </Link>
              <Link
                to={"register/"}
                className="btn uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
