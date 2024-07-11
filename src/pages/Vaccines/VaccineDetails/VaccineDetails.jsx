import { Link, useParams } from "react-router-dom";
import img from "../../../../src/assets/vaccine-hero.png";
import { useEffect, useState } from "react";
import axios from "axios";
import VaccineReview from "../VaccineReview/VaccineReview";
import TestimonialsCarousel from "../VaccineReview/TestCarosel";
import TakeReview from "../VaccineReview/TakeReview";

const VaccineDetails = () => {
  const { id } = useParams();
  console.log(id);
  const [vaccine, setVaccine] = useState(null);
  useEffect(() => {
    const fetchVaccine = async () => {
      console.log("Ok");
      const response = await axios.get(
        `http://127.0.0.1:8000/vaccine-campaign/lists/${id}`
      );
      console.log(response);
      setVaccine(response.data);
    };

    fetchVaccine();
  }, [id]);

  if (!vaccine) {
    return (
      <span className="loading loading-spinner loading-lg mx-auto ml-20 h-screen"></span>
    );
  }

  return (
    <div>
      <div className="card card-side bg-white shadow-xl rounded-lg overflow-hidden my-5 flex flex-col md:flex-row">
        <figure className="md:w-1/3">
          <img
            className="w-3/4 h-full object-cover"
            src={img}
            alt="Vaccine Campaign"
          />
        </figure>
        <div className="card-body p-4 flex flex-col my-auto justify-between">
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
          <div className="card-actions flex">
            <Link
              to={"/vaccine-campaign"}
              className="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md hover:bg-pink-400 transition-colors duration-300"
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
      <VaccineReview></VaccineReview>
      <TestimonialsCarousel></TestimonialsCarousel>
      <TakeReview vaccine_id={vaccine.id}></TakeReview>
    </div>
  );
};

export default VaccineDetails;
