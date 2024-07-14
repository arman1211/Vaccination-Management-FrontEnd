import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
      <div className="overflow-x-auto m-12  bg-base-100 shadow-md rounded">
        <h2 className="font-bold text-center text-4xl text-pink-500 mb-6">
          Your all Vaccine History
        </h2>
        <table className="table table-sm">
          <thead>
            <tr className="font-bold text-lg">
              <th>No.</th>
              <th>Vaccine Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Your first dose</th>
              <th>Second dose date</th>
              <th>status</th>
              <th>Review</th>
              <th>Reports</th>
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
                {vaccine.is_completed ? (
                  <td className="text-success font-bold">Completed ✅</td>
                ) : (
                  <td className="text-warning font-bold">Pending ⌛</td>
                )}

                <td>
                  <Link
                    to={`/vaccine-campaign/details/${vaccine.vaccine.id}`}
                    className="btn btn-sm bg-pink-500 text-white hover:text-black"
                  >
                    Review
                  </Link>
                </td>
                <td>
                  <Link
                    target="_blank"
                    className="bg-green-700 text-white p-1.5 rounded"
                    to={`http://127.0.0.1:8000/vaccine-campaign/vaccine-dose-report/${vaccine.id}`}
                  >
                    Download Report
                  </Link>
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
