import axios from "axios";
import { useEffect, useState } from "react";

const EditModal = ({ onClose, id, setVaccines, setMessage }) => {
  const [vaccine, setVaccine] = useState({});
  const [vaccineName, setVaccineName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  useEffect(() => {
    const fetchVaccine = async () => {
      try {
        const response = await axios.get(
          `https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/lists/${id}`
        );
        console.log(response);
        if (response.data) {
          setVaccine(response.data);
          setVaccineName(vaccine.name);
          setStartDate(vaccine.start_date);
          setEndDate(vaccine.end_date);
          setDescription(vaccine.description);
        }
      } catch (error) {
        console.log("something wrong");
      }
    };
    fetchVaccine();
  }, [
    id,
    vaccine.name,
    vaccine.description,
    vaccine.start_date,
    vaccine.end_date,
  ]);
  const handleEditVaccine = async (e) => {
    e.preventDefault();
    const data = {
      name: vaccineName,
      description: description,
      start_date: startDate,
      end_date: endDate,
      created_by: vaccine.created_by,
    };
    console.log(data);
    try {
      const response = await axios.put(
        `https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/edit/${id}/`,
        data
      );
      console.log(response);
      if (response.status == 200) {
        setVaccine(response.data);
        setMessage("Edited successfully");
        setVaccines((prevVaccines) =>
          prevVaccines.map((vaccine) =>
            vaccine.id === id ? { ...vaccine, ...response.data } : vaccine
          )
        );
        onClose();
      }
    } catch (error) {
      setError("something wrong", error);
      console.log(error);
    }
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

        {error && (
          <div role="alert" className="alert alert-warning bg-red-300">
            <span>{error}</span>
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-4 text-center text-pink-600">
          Edit Campaign
        </h2>
        <form onSubmit={handleEditVaccine}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="text"
              value={vaccineName}
              onChange={(e) => setVaccineName(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Description
            </label>
            <input
              type="text"
              name="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Start Date
            </label>
            <input
              type="date"
              name="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              End Date
            </label>
            <input
              type="date"
              name="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              className="btn py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent ml-2 text-white text-md mr-4 hover:bg-pink-400"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
