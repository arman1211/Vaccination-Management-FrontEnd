import { Link, Navigate } from "react-router-dom";
import img from "../../../../src/assets/vaccine-hero.png";
import { useEffect, useState } from "react";
export const Vaccine = ({ vaccine, onOpenModal }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const patientId = localStorage.getItem("patient_id");
  useEffect(() => {
    if (patientId) {
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className="card card-side bg-white shadow-xl rounded-lg overflow-hidden my-5 flex flex-col md:flex-row">
      <figure className="md:w-1/3">
        <img
          className="w-3/4 h-full object-cover"
          src={img}
          alt="Vaccine Campaign"
        />
      </figure>
      <div className="card-body p-4 flex flex-col my-auto justify-between">
        <div>
          <h2 className="card-title text-3xl font-bold mb-2 text-pink-500 uppercase">
            {vaccine.name}
          </h2>
          <p className="text-gray-700 mb-4">{vaccine.description}</p>
          <h2 className="text-md font-semibold">
            Start Date: {vaccine.start_date}
          </h2>
          <h2 className="text-md font-semibold">
            End Date: {vaccine.end_date}
          </h2>
        </div>
        <div className="card-actions flex">
          {isLoggedIn ? (
            <button
              onClick={() => onOpenModal(vaccine)}
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-colors duration-300"
            >
              Dose Appointment
            </button>
          ) : (
            <Link
              to={"/login"}
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-colors duration-300"
            >
              Login to take Dose
            </Link>
          )}
          <Link
            to={`details/${vaccine.id}`}
            className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-colors duration-300"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vaccine;
