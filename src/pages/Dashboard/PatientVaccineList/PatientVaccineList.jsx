import axios from "axios";
import { useEffect, useState } from "react";

const PatientVaccineList = () => {
  const [vaccines, setVaccines] = useState([]);
  useEffect(() => {
    const fetchUserVaccine = async () => {
      try {
        const response = await axios.get(
          "https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/booking/"
        );
        console.log(response);
        if (response.data) {
          setVaccines(response.data);
        }
      } catch (error) {
        console.log("something wrong");
      }
    };
    fetchUserVaccine();
  }, []);
  const handleCompleteDose = async (id) => {
    try {
      const response = await axios.put(
        `https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/complete/${id}/`,
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
    <div className="bg-base-100 shadow-lg p-2  rounded mt-2">
      <div className="overflow-x-scroll">
        <h2 className="font-bold text-center text-4xl text-pink-500 mb-6">
          All Patient Vaccine History
        </h2>
        <table className="table table-lg">
          <thead>
            <tr className="font-bold text-sm">
              <th>No.</th>
              <th>Vaccine Name</th>
              <th>Patient Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Patient first dose</th>
              <th>Patient second dose</th>
              <th>Complete dose</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine) => (
              <tr key={vaccine.id}>
                <th>{vaccine.id}</th>
                <td>{vaccine.vaccine.name}</td>
                <td>{vaccine.patient.user.username}</td>
                <td>{vaccine.vaccine.start_date}</td>
                <td>{vaccine.vaccine.end_date}</td>
                <td>{vaccine.first_dose_date}</td>
                <td>{vaccine.second_dose_date}</td>
                <td>
                  {vaccine.is_completed ? (
                    <button className="btn btn-sm bg-green-500 text-white hover:text-black">
                      Completed
                    </button>
                  ) : (
                    <button
                      onClick={() => handleCompleteDose(vaccine.id)}
                      className="btn btn-sm bg-pink-500 text-white hover:text-black"
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
    </div>
  );
};

export default PatientVaccineList;
