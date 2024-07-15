import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useGlobalStateUpdate } from "../../../Layout/GlobalState";

const Login = () => {
  const setGlobalState = useGlobalStateUpdate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const getPatientId = async (id) => {
    const response = await axios(
      "https://vaccination-management-backend-drf.onrender.com/patient/list/"
    );
    console.log(response);
    let patId;
    const patient = response.data.find((pat) => pat.user.id === id);
    if (patient) {
      setGlobalState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        isPatient: true,
        isDoctor: false,
      }));

      patId = patient.id;
      return patId;
    }
  };
  const getDoctorId = async (id) => {
    const response = await axios(
      "https://vaccination-management-backend-drf.onrender.com/doctor/list/"
    );
    console.log(response);
    const doctor = response.data.find((pat) => pat.doctor.id === id);
    if (doctor) {
      setGlobalState((prevState) => ({
        ...prevState,
        isAuthenticated: true,
        isPatient: false,
        isDoctor: true,
      }));
      const docId = doctor.id;
      console.log("docid ", docId);
      return docId;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://vaccination-management-backend-drf.onrender.com/user/login/",
        {
          username,
          password,
        }
      );
      if (response.data.token) {
        const pat_id = await getPatientId(response.data.user_id);
        const doc_id = await getDoctorId(response.data.user_id);
        console.log(pat_id, doc_id);
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user_id", response.data.user_id);
        if (pat_id) {
          localStorage.setItem("patient_id", parseInt(pat_id));
        } else {
          localStorage.setItem("doctor_id", parseInt(doc_id));
        }

        setIsLoading(false);
        navigate("/");
      } else {
        setError(response.data.error);
        setIsLoading(false);
      }
    } catch (error) {
      setError("Invalid username or password");
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <img
            className="mx-auto h-10 w-auto"
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Login to your account
          </h2>
          <p className="mt-2 text-center text-sm leading-5 text-gray-500 max-w">
            Or
            <Link
              to={"/register"}
              className="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              register new account
            </Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form method="POST" action="#" onSubmit={handleSubmit}>
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
                    required=""
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 "
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
                    required=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                  />
                </div>
              </div>

              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    {isLoading ? "Logging in..." : "Login"}
                  </button>
                  {error && <p style={{ color: "red" }}>{error}</p>}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
