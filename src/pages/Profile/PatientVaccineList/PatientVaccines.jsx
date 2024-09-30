import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CancelAppointmentModal from "./CancelAppointmentModal";

const PatientVaccines = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [vaccines, setVaccines] = useState([]);
  const [vaccineId, setVaccineId] = useState(null);
  const [deletePermission, setDeletePermission] = useState(false);
  useEffect(() => {
    const deleteDoseBooking = async () => {
      console.log(vaccineId);
      try {
        const response = await axios.delete(
          `https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/booking/delete/${vaccineId}`
        );
        console.log(response);
        if (response.status == 204) {
          setVaccines((prevVaccines) =>
            prevVaccines.filter((vaccine) => vaccine.id !== vaccineId)
          );
          setDeletePermission(false);
          setModalOpen(false);
        }
      } catch (error) {
        console.error("Error deleting the booking:", error);
      }
    };

    if (deletePermission) {
      deleteDoseBooking();
    }
  }, [deletePermission, vaccineId]);
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    const fetchUserVaccine = async () => {
      try {
        const response = await axios.get(
          "https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/booking/"
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
  const handleOpenModal = (id) => {
    setVaccineId(id);
    setModalOpen(true);
  };
  const handleCloseModal = () => {
    setModalOpen(false);
  };
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

              <th>Your first dose</th>
              <th>Second dose date</th>
              <th>status</th>
              <th>Schedule</th>
              <th>Review</th>
              <th>Pdf Reports</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine) => (
              <tr key={vaccine.id}>
                <th>{vaccine.id}</th>
                <td>{vaccine.vaccine.name}</td>
                <td>{vaccine.first_dose_date}</td>
                <td>{vaccine.second_dose_date}</td>
                {vaccine.is_completed ? (
                  <td className="text-success font-bold">Completed ✅</td>
                ) : (
                  <td className="text-warning font-bold">Pending ⌛</td>
                )}
                {vaccine.is_completed ? (
                  <td>
                    <Link className="bg-green-700 text-white p-1.5 rounded">
                      Done ✅
                    </Link>
                  </td>
                ) : (
                  <td>
                    <Link
                      className="btn btn-sm bg-pink-900 text-white hover:text-black"
                      onClick={() => handleOpenModal(vaccine.id)}
                    >
                      Cancel
                    </Link>
                  </td>
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
                    to={`https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/vaccine-dose-report/${vaccine.id}`}
                  >
                    Download
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {modalOpen && (
          <CancelAppointmentModal
            handleOpenModal={handleOpenModal}
            onClose={handleCloseModal}
            id={vaccineId}
            setDeletePermission={setDeletePermission}
          ></CancelAppointmentModal>
        )}
      </div>
    </div>
  );
};

export default PatientVaccines;
