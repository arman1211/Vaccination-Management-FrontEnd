import axios from "axios";
import { useState } from "react";
import VaccineSuccessMessage from "./VaccineSuccessMessage";

const VaccineModal = ({ vaccine, onClose }) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [successMessage, setSuccessMessage] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleSubmit = () => {
    const patient_id = localStorage.getItem("patient_id");
    console.log(patient_id);
    const vaccineId = vaccine.id;
    const data = {
      vaccine_id: vaccineId,
      patient_id: parseInt(patient_id),
      first_dose_date: selectedDate,
    };
    if (selectedDate > vaccine.end_date) {
      setError("You cant select a date later than the vaccine end date");
      return;
    }
    const fetchVaccinePost = async () => {
      setIsLoading(true);
      const response = await axios.post(
        "https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/post/",
        data
      );
      if (response.data) {
        console.log(response);
        setSuccessMessage(response.data);
        setIsSuccess(true);
        setIsLoading(false);
      }
      setIsLoading(false);
    };
    fetchVaccinePost();
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-3xl  font-bold text-pink-500 text-center">
          Dose Appointment
        </h3>
        <div className="py-4">
          <div className="mb-2">
            <span className="font-semibold text-gray-700">Name:</span>
            <span className="ml-2 text-gray-900">{vaccine.name}</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-gray-700">Description:</span>
            <span className="ml-2 text-gray-900">{vaccine.description}</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-gray-700">Start Date:</span>
            <span className="ml-2 text-gray-900">{vaccine.start_date}</span>
          </div>
          <div className="mb-2">
            <span className="font-semibold text-gray-700">End Date:</span>
            <span className="ml-2 text-gray-900">{vaccine.end_date}</span>
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Select Schedule Date:</span>
          </label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="modal-action">
          <button
            className="btn py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md"
            onClick={onClose}
          >
            Cancel
          </button>
          {isLoading ? (
            <button className="btn py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400">
              <span className="loading loading-dots loading-sm"></span>
            </button>
          ) : (
            <button
              className="btn py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
              onClick={handleSubmit}
            >
              Confirm
            </button>
          )}
        </div>
        {error && <h2 className="text-red-500">{error}</h2>}
        {isSuccess && (
          <VaccineSuccessMessage
            message={successMessage}
            vaccine={vaccine}
          ></VaccineSuccessMessage>
        )}
      </div>
    </div>
  );
};

export default VaccineModal;
