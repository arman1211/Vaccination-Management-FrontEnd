import axios from "axios";
import { useEffect, useState } from "react";
import profile from "../../../assets/doctor.jpg";
import UpdateInfo from "./UpdateInfo";
import UpdadePassword from "./UpdatePassword";
import {
  FiEdit,
  FiKey,
  FiMail,
  FiMapPin,
  FiPhone,
  FiUser,
} from "react-icons/fi";
import { MdOutlineVerifiedUser } from "react-icons/md";

const ViewProfile = () => {
  const [doctor, setDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("doctor_id");
    const fetchUserVaccine = async () => {
      try {
        const response = await axios.get(
          `https://vaccination-management-backend-drf.vercel.app/doctor/list/${userId}`
        );
        if (response.data) {
          setDoctor(response.data);
        }
      } catch (error) {
        console.log("something wrong");
      }
    };
    fetchUserVaccine();
  }, []);

  if (!doctor) {
    return (
      <div className="flex justify-center items-center ">
        <div className="w-16 h-16 border-4  border-dashed rounded-full animate-spin border-pink-500"></div>
      </div>
    );
  }

  const handleUpdateClick = () => {
    setIsModalOpen(true);
  };
  const handlePasswordUpdateClick = () => {
    setIsPasswordModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsPasswordModalOpen(false);
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl lg:h-3/4 my-10 w-full md:w-3/4 mx-auto lg:mx-28 p-4 lg:p-8">
      <figure className="flex justify-center lg:justify-start">
        <img
          src={profile}
          alt="Doctor Profile"
          className="w-64 lg:w-96 rounded-badge"
        />
      </figure>

      <div className="card-body">
        <div className="flex flex-col items-center lg:items-start">
          <div className="flex items-center space-x-2 mb-2">
            <FiUser className="text-pink-500" size={30} />
            <h2 className="text-4xl lg:text-5xl font-bold text-pink-500">
              {doctor.doctor.username}
            </h2>
          </div>
          <p className="text-sm text-gray-600 flex items-center">
            <FiMail className="mr-1" /> {doctor.doctor.email}
          </p>
        </div>

        <div className="mt-6 text-center lg:text-left">
          <h3 className="text-2xl font-semibold">Contact Information</h3>
          <p className="mt-3 text-gray-700 flex items-center">
            <FiMapPin className="mr-2 text-blue-500" />
            <strong>Address:</strong> {doctor.address}
          </p>
          <p className="mt-2 text-gray-700 flex items-center">
            <FiPhone className="mr-2 text-green-500" />
            <strong>Phone:</strong> {doctor.phone}
          </p>
          <p className="mt-2 text-gray-700 flex items-center">
            <MdOutlineVerifiedUser className="mr-2 text-yellow-500" />
            <strong>NID:</strong> {doctor.nid}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row mt-6 space-y-4 lg:space-y-0 lg:space-x-4 justify-center lg:justify-start">
          <button
            className="btn bg-pink-600 text-white hover:bg-pink-500 btn-sm lg:btn-md flex items-center justify-center"
            onClick={handleUpdateClick}
          >
            <FiEdit className="mr-2" /> Update Info
          </button>
          <button
            className="btn btn-outline btn-sm lg:btn-md flex items-center justify-center"
            onClick={handlePasswordUpdateClick}
          >
            <FiKey className="mr-2" /> Change Password
          </button>
        </div>

        {message && (
          <div
            role="alert"
            className="alert alert-success bg-green-300 mt-6 text-center lg:text-left"
          >
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
      </div>

      {isModalOpen && (
        <UpdateInfo
          doctor={doctor}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          setDoctor={setDoctor}
          setMessage={setMessage}
        />
      )}
      {isPasswordModalOpen && (
        <UpdadePassword
          doctor={doctor}
          isOpen={isPasswordModalOpen}
          onClose={handleCloseModal}
          setDoctor={setDoctor}
          setMessage={setMessage}
        />
      )}
    </div>
  );
};

export default ViewProfile;
