import { Link, useParams } from "react-router-dom";
import vaccine_img from "../../../../src/assets/vaccine-details.png";
import { useEffect, useState } from "react";
import axios from "axios";
import VaccineReview from "../VaccineReview/VaccineReview";
import TakeReview from "../VaccineReview/TakeReview";
import VaccineModal from "../Vaccine/VaccineModal";
import { useGlobalState } from "../../../Layout/GlobalState";

const VaccineDetails = () => {
  const globalState = useGlobalState();
  const { id } = useParams();
  console.log(id);
  const [vaccine, setVaccine] = useState(null);
  const patientId = localStorage.getItem("patient_id");
  const [isPatientTakeDose, setIsPatientTakeDose] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    const fetchVaccine = async () => {
      console.log("Ok");
      const response = await axios.get(
        `https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/lists/${id}`
      );
      console.log(response);
      setVaccine(response.data);
    };

    fetchVaccine();
  }, [id]);
  useEffect(() => {
    const fetchBooking = async () => {
      console.log("Ok");
      const response = await axios.get(
        `https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/booking/`
      );
      const book = response.data.find(
        (booking) => booking.patient.id == patientId && booking.vaccine.id == id
      );
      if (book) {
        setIsPatientTakeDose(true);
      }
    };

    fetchBooking();
  }, [id, patientId]);

  if (!vaccine) {
    return (
      <span className="loading loading-spinner loading-lg mx-auto ml-20 h-screen"></span>
    );
  }
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="bg-white shadow-xl rounded-lg overflow-hidden my-5 max-w-3xl mx-auto">
        <figure className="w-full">
          <img
            className="w-full h-64 object-cover"
            src={vaccine.image ? vaccine.image : vaccine_img}
            alt="Vaccine Campaign"
          />
        </figure>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-3xl font-bold mb-2 text-pink-500 uppercase">
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
          <div className="mt-4 flex gap-7 justify-center">
            {globalState.isPatient ? (
              <button
                onClick={handleOpenModal}
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-colors duration-300"
              >
                Appoint Dose
              </button>
            ) : (
              <a
                href="/login"
                className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-colors duration-300"
              >
                Login to take dose
              </a>
            )}
            <Link
              to={"/vaccine-campaign"}
              className="btn uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <VaccineReview vaccine={vaccine}></VaccineReview>
      <hr />
      <div className="patient-reviews min-h-96 m-24">
        <h2 className="text-pink-500 text-center text-3xl font-bold">
          Give Review
        </h2>
        {isPatientTakeDose ? (
          <TakeReview vaccine_id={vaccine.id}></TakeReview>
        ) : (
          <h2 className="text-center text-gray-600 text-2xl">
            Please Take a dose for Give review
          </h2>
        )}
      </div>
      {isModalOpen && (
        <VaccineModal
          vaccine={vaccine}
          onClose={handleCloseModal}
        ></VaccineModal>
      )}
    </div>
  );
};

export default VaccineDetails;
