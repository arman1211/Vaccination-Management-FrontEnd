import axios from "axios";
import { useEffect, useState } from "react";
import { Vaccine } from "../Vaccine/Vaccine";
import VaccineModal from "../Vaccine/VaccineModal";

const Vaccines = () => {
  const [vaccines, setVaccines] = useState([]);
  const [selectedVaccine, setSelectedVaccine] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchVaccines = async () => {
      setLoading(true);
      try {
        const response = await axios(
          "https://vaccination-management-backend-drf.vercel.app/vaccine-campaign/list/"
        );
        console.log(response);
        setLoading(false);
        setVaccines(response.data);
      } catch (error) {
        console.log(error);
        setLoading(false);
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
    <div className="container mx-auto p-4 h-auto min-h-screen">
      <h1 className="text-4xl text-pink-500 my-16 font-bold mb-4 stylish-regular text-center">
        All Vaccine Campaigns
      </h1>
      <div className="mx-auto w-5/6 md:w-full vaccines-container grid md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-10 flex-wrap space-y-5">
        {loading ? (
          <div className="flex justify-center items-center ">
            <div className="w-16 h-16 border-4  border-dashed rounded-full animate-spin border-pink-500"></div>
          </div>
        ) : (
          <>
            {vaccines.map((vaccine) => (
              <Vaccine
                key={vaccine.id}
                vaccine={vaccine}
                onOpenModal={handleOpenModal}
              />
            ))}
          </>
        )}
      </div>
      {selectedVaccine && (
        <VaccineModal
          vaccine={selectedVaccine}
          onClose={handleCloseModal}
        ></VaccineModal>
      )}
    </div>
  );
};

export default Vaccines;
