import { Link } from "react-router-dom";
import img from "../../../../src/assets/vaccine-details.png";
import { useGlobalState } from "../../../Layout/GlobalState";
export const Vaccine = ({ vaccine, onOpenModal }) => {
  const globalState = useGlobalState();
  return (
    <div className="card bg-white shadow-xl rounded-lg overflow-hidden my-5 flex flex-col">
      <figure className="w-full h-64">
        <img
          className="w-full h-full object-cover"
          src={vaccine.image ? vaccine.image : img}
          alt="Vaccine Campaign"
        />
      </figure>
      <div className="card-body p-4 flex flex-col justify-between">
        <div>
          <h2 className="card-title text-3xl font-bold mb-2 text-pink-500 uppercase">
            {vaccine.name}
          </h2>
          <p className="text-gray-700 mb-4">{vaccine.description}</p>
          <h2 className="text-md font-semibold">
            Start Date: {vaccine.start_date}
          </h2>
          <h2 className="text-md font-semibold">
            End Date: {vaccine.end_date}
          </h2>
        </div>
        <div className="card-actions flex justify-between mt-4">
          {globalState.isPatient ? (
            <button
              onClick={() => onOpenModal(vaccine)}
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-colors duration-300"
            >
              Dose Appointment
            </button>
          ) : (
            <Link
              to={"/login"}
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-colors duration-300"
            >
              Login to take Dose
            </Link>
          )}
          <Link
            to={`details/${vaccine.id}`}
            className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white text-md"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Vaccine;
