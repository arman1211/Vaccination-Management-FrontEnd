import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Registration = () => {
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nid, setNid] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    const data = {
      user: {
        username: username,
        password: password,
        confirm_password: confirmPassword,
        email: email,
      },
      address: address,
      phone: phone,
      nid: nid,
    };
    console.log(data);
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://vaccination-management-backend-drf.vercel.app/patient/register/",
        data
      );
      console.log(response.data);
      if (response.data.message) {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error.response.data);
      setError("Invalid data provided");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 xs:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-pink-500">
            Create a Patient account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or <br />
            <Link
              to={"/login"}
              className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              login to your account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-white py-8 px-6 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#" onSubmit={handleRegistration}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Username
                  </label>
                  <div className="mt-1">
                    <input
                      id="username"
                      name="username"
                      placeholder="john"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Phone
                  </label>
                  <div className="mt-1">
                    <input
                      id="phone"
                      name="phone"
                      placeholder="018000000000"
                      type="text"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="nid"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    NID
                  </label>
                  <div className="mt-1">
                    <input
                      id="nid"
                      name="nid"
                      placeholder="123456....."
                      type="text"
                      required
                      value={nid}
                      onChange={(e) => setNid(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="address"
                      name="address"
                      placeholder="City-village"
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Email Address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      placeholder="user@example.com"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password_confirmation"
                    className="block text-sm font-medium leading-5 text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password_confirmation"
                      name="password_confirmation"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 sm:text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition duration-150 ease-in-out"
                >
                  {isLoading ? (
                    <span className="loading loading-dots loading-sm"></span>
                  ) : (
                    "Create Account"
                  )}
                </button>
              </div>

              {message && (
                <div role="alert" className="alert alert-success mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{message}</span>
                </div>
              )}

              {error && (
                <div className="text-red-500 text-sm mt-2">{error}</div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
