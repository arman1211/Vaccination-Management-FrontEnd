import axios from "axios";
import { useEffect, useState } from "react";
import profile from "../../../assets/profile2.jpg";
import PatientVaccines from "../PatientVaccineList/PatientVaccines";
import UpdateInfo from "../UpdateInfo/UpdateInfo";
import UpdadePassword from "../UpdateInfo/UpdadePassword";
import PaymentHistory from "../PaymentHistory/PaymentHistory";
import { useGlobalState } from "../../../Layout/GlobalState";
import { FaCrown } from "react-icons/fa";

const Profile = () => {
  const [patient, setPatient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const globalState = useGlobalState();

  useEffect(() => {
    const userId = localStorage.getItem("patient_id");
    const fetchUserVaccine = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://vaccination-management-backend-drf.vercel.app/patient/list/${userId}`
        );
        if (response.data) {
          setPatient(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log("something wrong");
      }
    };
    fetchUserVaccine();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center min-h-[520px] items-center ">
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
    <>
      <div className="card lg:card-side card-compact bg-base-100 shadow-xl md:h-96 h-[640px] my-28 w-3/4 m-auto">
        <figure>
          <img src={profile} alt="Album" className="md:w-96" />
        </figure>
        <div className="card-body">
          <div className="flex items-center space-x-4">
            <div>
              <div className="flex gap-2">
                <h2 className="text-5xl font-bold text-pink-500">
                  {patient && patient.user.username}{" "}
                </h2>
                <p>
                  {globalState.isPremium && (
                    <FaCrown className="text-yellow-500 mt-2" size={40} />
                  )}
                </p>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {patient && patient.user.email}
              </p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mt-2 text-gray-700">
              <strong>Address:</strong> {patient && patient.address}
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Phone:</strong> {patient && patient.phone}
            </p>
            <p className="mt-2 text-gray-700">
              <strong>NID:</strong> {patient && patient.nid}
            </p>
            <button
              className="btn btn-neutral btn-sm mt-4 w-full sm:w-auto"
              onClick={handleUpdateClick}
            >
              Update Info
            </button>
            <button
              className="btn btn-neutral btn-sm mt-2 sm:mt-0 w-full sm:w-auto sm:ml-1 lg:ml-4"
              onClick={handlePasswordUpdateClick}
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
      </div>
      {isModalOpen && (
        <UpdateInfo
          patient={patient}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          setPatient={setPatient}
          setMessage={setMessage}
        ></UpdateInfo>
      )}
      {isPasswordModalOpen && (
        <UpdadePassword
          patient={patient}
          isOpen={setIsPasswordModalOpen}
          onClose={handleCloseModal}
          setPatient={setPatient}
          setMessage={setMessage}
        ></UpdadePassword>
      )}
      {loading ? (
        <div className="flex justify-center items-center ">
          <div className="w-16 h-16 border-4  border-dashed rounded-full animate-spin border-pink-500"></div>
        </div>
      ) : (
        <PatientVaccines></PatientVaccines>
      )}
      <PaymentHistory></PaymentHistory>
    </>
  );
};

export default Profile;
