import axios from "axios";
import { useEffect, useState } from "react";

const VaccineReview = ({ vaccine }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios(
        "https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/review/"
      );
      if (response.data) {
        console.log(response.data);
        const allReview = response.data.filter(
          (review) => review.vaccine == vaccine.id
        );
        if (allReview) {
          setReviews(allReview);
        }
      }
    };
    fetchReviews();
  }, [vaccine.id]);
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="font-bold text-pink-500 text-center text-3xl leading-none  max-w-2xl mx-auto mb-12">
          What Patient Are Saying
        </h2>
        {reviews && (
          <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1 gap-3 flex-wrap space-y-4 md:space-y-0  relative">
            {reviews.map((review) => (
              <div key={review.id} className="">
                <div className="hover:animate-background rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                  <div className="rounded-[10px] bg-white p-4 sm:p-6">
                    <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                      {review.reviews}
                    </h3>

                    <time
                      dateTime="2022-10-10"
                      className="block text-xs text-gray-500"
                    >
                      {" "}
                      {review.reviewd_at}{" "}
                    </time>
                    <p className="text-gray-500 font-semibold">
                      {review.patient_name}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1">
                      <span className="whitespace-nowrap rounded-ful px-2.5 py-0.5 text-xs">
                        {review.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {reviews.length == 0 && (
          <div>
            <h2 className="text-2xl text-gray-600 text-center mb-5">
              No Reviews Yet
            </h2>
          </div>
        )}
      </div>
    </section>
  );
};

export default VaccineReview;
