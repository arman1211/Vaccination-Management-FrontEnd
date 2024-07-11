import axios from "axios";
import { useEffect, useState } from "react";
import profile from "../../../assets/profile2.jpg";
import PatientVaccines from "../PatientVaccineList/PatientVaccines";

const Profile = () => {
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const fetchUserVaccine = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/patient/list/");
        if (response.data) {
          const filterVaccine = response.data.find(
            (patient) => patient.user.id === parseInt(userId)
          );
          setPatient(filterVaccine);
        }
      } catch (error) {
        console.log("something wrong");
      }
    };
    fetchUserVaccine();
  }, []);

  if (!patient) {
    return <span className="loading loading-bars loading-lg mx-auto"></span>;
  }

  return (
    <>
      <div className="card lg:card-side bg-base-100 shadow-xl h-96 my-28 w-3/4 m-auto">
        <figure>
          <img src={profile} alt="Album" className="w-96" />
        </figure>
        <div className="card-body">
          <div className="flex items-center space-x-4">
            <div>
              <h2 className="text-5xl font-bold text-pink-500">
                {patient.user.username}
              </h2>
              <p className="text-sm text-gray-600">{patient.user.email}</p>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mt-2 text-gray-700">
              <strong>Address:</strong> {patient.address}
            </p>
            <p className="mt-2 text-gray-700">
              <strong>Phone:</strong> {patient.phone}
            </p>
            <p className="mt-2 text-gray-700">
              <strong>NID:</strong> {patient.nid}
            </p>
            <button className="btn btn-neutral btn-sm mt-4">Update Info</button>
            <button className="btn btn-neutral btn-sm ml-4">
              Change Password
            </button>
          </div>
        </div>
      </div>
      <PatientVaccines></PatientVaccines>
    </>
  );
};

export default Profile;
