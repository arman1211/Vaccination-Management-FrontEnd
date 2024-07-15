import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const DoctorRegistration = () => {
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
      doctor: {
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
        "https://vaccination-management-backend-drf.onrender.com/doctor/register/",
        data
      );
      console.log(response);
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
            Create a Doctor account
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

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#" onSubmit={handleRegistration}>
              <div className="mt-6">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Username
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    id="username"
                    name="username"
                    placeholder="john"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  Phone
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    id="phone"
                    name="phone"
                    placeholder="018000000000"
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="nid"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Nid
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    id="nid"
                    name="nid"
                    placeholder="123456....."
                    type="text"
                    required
                    value={nid}
                    onChange={(e) => setNid(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="address"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Address
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    id="address"
                    name="address"
                    placeholder="City-village"
                    type="text"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5  text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    placeholder="user@example.com"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5
                  "
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Confirm Password
                </label>
                <div className="mt-1 rounded-md shadow-sm">
                  <input
                    id="password_confirmation"
                    name="password_confirmation"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    {isLoading ? (
                      <span className="loading loading-dots loading-sm"></span>
                    ) : (
                      "Create account"
                    )}
                  </button>
                </span>
              </div>
              {message && (
                <div role="alert" className="alert alert-warning mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
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
                  {error && <span>{error}</span>}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorRegistration;
