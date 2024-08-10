import axios from "axios";
import { useEffect, useState } from "react";
import EditModal from "./EditModal";
import DeleteModal from "./DeleteModal";
import { useLocation } from "react-router-dom";

const AllVaccineList = () => {
  const [vaccines, setVaccines] = useState([]);
  const [vaccinId, setVaccineId] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.message) {
      setMessage(location.state.message);
    }
    const fetchUserVaccine = async () => {
      try {
        const response = await axios.get(
          "https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/list/"
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
  }, [location.state]);
  const handleOpenModal = (id) => {
    setVaccineId(id);
    setIsEditModalOpen(true);
  };
  const handleDeleteModal = (id) => {
    setVaccineId(id);
    setIsDeleteModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="bg-base-100 shadow-lg p-10 rounded">
      <div className="overflow-x-auto">
        {message && (
          <div role="alert" className="alert alert-success bg-green-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{message}</span>
          </div>
        )}
        <h2 className="font-bold text-center text-4xl text-pink-500 mb-6">
          All Vaccine List
        </h2>
        <table className="table table-lg">
          <thead>
            <tr>
              <th>No.</th>
              <th>Vaccine Name</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Edit Campaign</th>
              <th>Delete Campaign</th>
            </tr>
          </thead>
          <tbody>
            {vaccines.map((vaccine) => (
              <tr key={vaccine.id}>
                <th>{vaccine.id}</th>
                <td>{vaccine.name}</td>
                <td>{vaccine.start_date}</td>
                <td>{vaccine.end_date}</td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleOpenModal(vaccine.id)}
                  >
                    <span className="text-yellow-600">Edit</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="15"
                      height="15"
                      viewBox="0 0 30 30"
                    >
                      <path
                        fill="orange"
                        d="M 22.828125 3 C 22.316375 3 21.804562 3.1954375 21.414062 3.5859375 L 19 6 L 24 11 L 26.414062 8.5859375 C 27.195062 7.8049375 27.195062 6.5388125 26.414062 5.7578125 L 24.242188 3.5859375 C 23.851688 3.1954375 23.339875 3 22.828125 3 z M 17 8 L 5.2597656 19.740234 C 5.2597656 19.740234 6.1775313 19.658 6.5195312 20 C 6.8615312 20.342 6.58 22.58 7 23 C 7.42 23.42 9.6438906 23.124359 9.9628906 23.443359 C 10.281891 23.762359 10.259766 24.740234 10.259766 24.740234 L 22 13 L 17 8 z M 4 23 L 3.0566406 25.671875 A 1 1 0 0 0 3 26 A 1 1 0 0 0 4 27 A 1 1 0 0 0 4.328125 26.943359 A 1 1 0 0 0 4.3378906 26.939453 L 4.3632812 26.931641 A 1 1 0 0 0 4.3691406 26.927734 L 7 26 L 5.5 24.5 L 4 23 z"
                      ></path>
                    </svg>
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-sm"
                    onClick={() => handleDeleteModal(vaccine.id)}
                  >
                    <span className="text-red-500">delete</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="15"
                      height="15"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="red"
                        d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.803372 6 11.082924 6.9194511 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 8.2636719 15 A 1.50015 1.50015 0 0 0 8.6523438 15.007812 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 39.347656 15.007812 A 1.50015 1.50015 0 0 0 39.728516 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.916254 6.9202798 35.196001 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 14.640625 9 L 33.359375 9 C 34.196749 9 34.974746 9.4162203 35.439453 10.113281 L 36.697266 12 L 11.302734 12 L 12.560547 10.113281 A 1.50015 1.50015 0 0 0 12.5625 10.111328 C 13.025982 9.4151428 13.801878 9 14.640625 9 z M 11.669922 15 L 36.330078 15 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 11.669922 15 z"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isEditModalOpen && (
          <EditModal
            onClose={handleCloseModal}
            id={vaccinId}
            setVaccines={setVaccines}
            setMessage={setMessage}
          ></EditModal>
        )}
        {isDeleteModalOpen && (
          <DeleteModal
            onClose={handleCloseModal}
            id={vaccinId}
            setVaccines={setVaccines}
            setMessage={setMessage}
          ></DeleteModal>
        )}
      </div>
    </div>
  );
};

export default AllVaccineList;
