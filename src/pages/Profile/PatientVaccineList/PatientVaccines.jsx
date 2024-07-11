import axios from "axios";
import { useEffect, useState } from "react";

const PatientVaccines = () => {
  const [vaccines, setVaccines] = useState([]);
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const fetchUserVaccine = async () => {
      try {
        const response = await axios.get(
          "http://127.0.0.1:8000/vaccine-campaign/booking/"
        );
        console.log(response);
        if (response.data) {
          const filterVaccine = response.data.filter(
            (vaccine) => vaccine.patient.user.id === parseInt(userId)
          );
          console.log(filterVaccine);
          setVaccines(filterVaccine);
          console.log(filterVaccine);
        }
      } catch (error) {
        console.log("something wrong");
      }
    };
    fetchUserVaccine();
  }, []);

  return (
    <div>
      <div className="overflow-x-auto m-12">
        <h2 className="font-bold text-center text-4xl text-pink-500 mb-6">
          Your all Vaccine History
        </h2>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Vaccine Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Your first dose</th>
              <th>Second dose date</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine) => (
              <tr key={vaccine.id}>
                <th>{vaccine.id}</th>
                <td>{vaccine.vaccine.name}</td>
                <td>{vaccine.vaccine.start_date}</td>
                <td>{vaccine.vaccine.end_date}</td>
                <td>{vaccine.first_dose_date}</td>
                <td>{vaccine.second_dose_date}</td>
                <td>
                  <button className="btn btn-sm bg-pink-500 text-white hover:text-black">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PatientVaccines;
