import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddVaccineCampaign = () => {
  let doctor_id = localStorage.getItem("doctor_id");
  doctor_id = parseInt(doctor_id);
  const [vaccineName, setVaccineName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: vaccineName,
      start_date: startDate,
      end_date: endDate,
      description: description,
      created_by: doctor_id,
      image: image,
    };
    try {
      setIsLoading(true);
      const response = await axios.post(
        "https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/list/",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response.data) {
        setIsLoading(false);
        navigate("/dashboard/vaccine-list", {
          state: { message: "Vaccine Added Successfully" },
        });
      }
    } catch (error) {
      setError("Please Provide Valid data");
      setIsLoading(false);
    }
    console.log(data);
  };

  return (
    <div className="bg-white border rounded-lg px-8 py-6 mx-auto my-8  w-96">
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="text-4xl text-center font-medium text-pink-600">
        Add Vaccine Campaign
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Image</label>
          <input
            type="file"
            name="image"
            onChange={(e) => setImage(e.target.files[0])}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Vaccine Name
          </label>
          <input
            type="text"
            name="vaccine"
            value={vaccineName}
            onChange={(e) => setVaccineName(e.target.value)}
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
            id="date"
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
            id="date"
            name="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Description
          </label>
          <textarea
            id="message"
            name="message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
            rows="5"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            {isLoading ? (
              <span className="loading loading-dots loading-sm"></span>
            ) : (
              "Submit"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVaccineCampaign;
