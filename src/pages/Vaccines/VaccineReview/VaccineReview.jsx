import axios from "axios";
import { useEffect, useState } from "react";

const VaccineReview = () => {
  const [reviews, setReviews] = useState([]);
  const [patient, setPatient] = useState(null);
  const patientId = localStorage.getItem("patient_id");
  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get("http://127.0.0.1:8000/patient/list/");
      console.log(response);
      if (response.data) {
        const patien = response.data.find((pat) => pat.id == patientId);
        console.log(patien);
        setPatient(patien);
      }
    };
    fetchUser();
  }, [patientId]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios(
        "http://127.0.0.1:8000/vaccine-campaign/review/"
      );
      if (response.data) {
        console.log(response.data);
        setReviews(response.data);
      }
    };
    fetchReviews();
  }, []);
  return (
    <section className="bg-white px-4 py-12 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-bold text-pink-500 text-center text-3xl leading-none uppercase max-w-2xl mx-auto mb-12">
          What Patient Are Saying
        </h2>
        <div className="flex flex-col gap-3 flex-wrap space-y-4 md:space-y-0 md:flex-row md:flex-auto md:space-x-4 relative">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-gray-200 rounded-lg p-8 text-center md:w-1/4"
            >
              <p className="font-bold uppercase">{patient.user.username}</p>
              <p className="text-xl font-light italic text-gray-700">
                {review.reviews}
              </p>
              <div className="flex items-center justify-center space-x-2 mt-4">
                {review.rating}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VaccineReview;
