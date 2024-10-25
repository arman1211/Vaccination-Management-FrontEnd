import axios from "axios";
import { useEffect, useState } from "react";

const PatientVaccineList = () => {
  const [vaccines, setVaccines] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchUserVaccine = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://vaccination-management-backend-drf.vercel.app/vaccine-campaign/booking/"
        );
        console.log(response);
        if (response.data) {
          setLoading(false);
          setVaccines(response.data);
        }
      } catch (error) {
        setLoading(false);
        console.log("something wrong");
      }
    };
    fetchUserVaccine();
  }, []);
  const handleCompleteDose = async (id) => {
    try {
      const response = await axios.put(
        `https://vaccination-management-backend-drf.vercel.app/vaccine-campaign/complete/${id}/`,
        { is_completed: true }
      );

      if (response.status === 200) {
        setVaccines((prevVaccines) =>
          prevVaccines.map((vaccine) =>
            vaccine.id === id ? { ...vaccine, is_completed: true } : vaccine
          )
        );
      }
    } catch (error) {
      alert("Failed to complete dose");
    }
  };

  return (
    <div className="bg-base-100 shadow-lg p-4 rounded-lg mt-4 w-full">
      <h2 className="font-bold text-center text-3xl text-pink-500 mb-4">
        All Patient Vaccine History
      </h2>
      {loading ? (
        <div className="flex justify-center items-center">
          <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-pink-500"></div>
        </div>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="table-auto w-full border border-gray-300">
            <thead>
              <tr className="text-left font-semibold text-gray-700 text-sm bg-gray-100">
                <th className="p-3 border-b border-gray-300">No.</th>
                <th className="p-3 border-b border-gray-300">Vaccine Name</th>
                <th className="p-3 border-b border-gray-300">Patient Name</th>
                <th className="p-3 border-b border-gray-300">Start Date</th>
                <th className="p-3 border-b border-gray-300">End Date</th>
                <th className="p-3 border-b border-gray-300">First Dose</th>
                <th className="p-3 border-b border-gray-300">Second Dose</th>
                <th className="p-3 border-b border-gray-300">Complete Dose</th>
              </tr>
            </thead>
            <tbody>
              {vaccines.map((vaccine, index) => (
                <tr
                  key={vaccine.id}
                  className="text-sm text-gray-700 hover:bg-gray-50"
                >
                  <td className="p-3 border-b border-gray-300 text-center">
                    {index + 1}
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {vaccine.vaccine.name}
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {vaccine.patient.user.username}
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {vaccine.vaccine.start_date}
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {vaccine.vaccine.end_date}
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {vaccine.first_dose_date}
                  </td>
                  <td className="p-3 border-b border-gray-300">
                    {vaccine.second_dose_date}
                  </td>
                  <td className="p-3 border-b border-gray-300 text-center">
                    {vaccine.is_completed ? (
                      <button className="px-3 py-1 text-xs font-semibold text-white bg-green-500 rounded hover:bg-green-600">
                        Completed
                      </button>
                    ) : (
                      <button
                        onClick={() => handleCompleteDose(vaccine.id)}
                        className="px-3 py-1 text-xs font-semibold text-white bg-pink-500 rounded hover:bg-pink-600"
                      >
                        Complete Dose
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PatientVaccineList;
