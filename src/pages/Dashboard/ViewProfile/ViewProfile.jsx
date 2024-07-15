import axios from "axios";
import { useEffect, useState } from "react";
import profile from "../../../assets/doctor.jpg";
import UpdateInfo from "./UpdateInfo";
import UpdadePassword from "./UpdatePassword";

const ViewProfile = () => {
  const [doctor, setDoctor] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const fetchUserVaccine = async () => {
      try {
        const response = await axios.get(
          "https://vaccination-management-backend-drf.onrender.com/doctor/list/"
        );
        if (response.data) {
          const filterVaccine = response.data.find(
            (doctor) => doctor.doctor.id === parseInt(userId)
          );
          console.log(filterVaccine);
          setDoctor(filterVaccine);
        }
      } catch (error) {
        console.log("something wrong");
      }
    };
    fetchUserVaccine();
  }, []);

  if (!doctor) {
    return <span className="loading loading-bars loading-lg mx-auto"></span>;
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
    <div className="card lg:card-side bg-base-100 shadow-xl h-2/4 my-28 w-full m-auto ml-28">
      <figure>
        <img src={profile} alt="Album" className="w-96 rounded-badge" />
      </figure>
      <div className="card-body">
        <div className="flex items-center space-x-4">
          <div>
            <h2 className="text-5xl font-bold text-pink-500">
              {doctor.doctor.username}
            </h2>
            <p className="text-sm text-gray-600">{doctor.doctor.email}</p>
          </div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold">Contact Information</h3>
          <p className="mt-2 text-gray-700">
            <strong>Address:</strong> {doctor.address}
          </p>
          <p className="mt-2 text-gray-700">
            <strong>Phone:</strong> {doctor.phone}
          </p>
          <p className="mt-2 text-gray-700">
            <strong>NID:</strong> {doctor.nid}
          </p>
          <button
            className="btn btn-neutral btn-sm mt-4"
            onClick={() => handleUpdateClick()}
          >
            Update Info
          </button>
          <button
            className="btn btn-neutral btn-sm ml-4"
            onClick={() => handlePasswordUpdateClick()}
          >
            Change Password
          </button>
        </div>
        {message && (
          <div role="alert" className="alert alert-success bg-green-300">
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
        ></UpdateInfo>
      )}
      {isPasswordModalOpen && (
        <UpdadePassword
          doctor={doctor}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          setDoctor={setDoctor}
          setMessage={setMessage}
        ></UpdadePassword>
      )}
    </div>
  );
};

export default ViewProfile;
