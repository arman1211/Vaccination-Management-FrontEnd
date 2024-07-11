import axios from "axios";
import { useEffect, useState } from "react";
import { Vaccine } from "../Vaccine/Vaccine";
import VaccineModal from "../Vaccine/VaccineModal";

const Vaccines = () => {
  const [vaccines, setVaccines] = useState([]);
  const [selectedVaccine, setSelectedVaccine] = useState(null);

  useEffect(() => {
    const fetchVaccines = async () => {
      try {
        const response = await axios(
          "http://127.0.0.1:8000/vaccine-campaign/list/"
        );
        console.log(response);
        setVaccines(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchVaccines();
  }, []);

  const handleOpenModal = (vaccine) => {
    setSelectedVaccine(vaccine);
  };
  const handleCloseModal = () => {
    setSelectedVaccine(null);
  };
  return (
    <div className="container mx-auto p-4 h-auto">
      <h1 className="text-2xl font-bold mb-4">Vaccine Campaigns</h1>
      <div className="vaccines-container flex flex-col space-y-5">
        {vaccines.map((vaccine) => (
          <Vaccine
            key={vaccine.id}
            vaccine={vaccine}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>
      {selectedVaccine && (
        <VaccineModal
          vaccine={selectedVaccine}
          onClose={handleCloseModal}
        ></VaccineModal>
      )}
      <div className="my-12">
        <h1 className="text-2xl font-bold mb-4">Vaccine Campaigns</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white  border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-4 border-b">Name</th>
                <th className="py-2 px-4 border-b">Description</th>
                <th className="py-2 px-4 border-b">Start Date</th>
                <th className="py-2 px-4 border-b">End Date</th>
              </tr>
            </thead>
            <tbody>
              {vaccines.map((vaccine) => (
                <tr key={vaccine.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b">{vaccine.name}</td>
                  <td className="py-2 px-4 border-b">{vaccine.description}</td>
                  <td className="py-2 px-4 border-b">{vaccine.start_date}</td>
                  <td className="py-2 px-4 border-b">{vaccine.end_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Vaccines;
