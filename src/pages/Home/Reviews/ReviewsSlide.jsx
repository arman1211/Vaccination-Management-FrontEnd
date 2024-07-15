import axios from "axios";
import { useEffect, useState } from "react";

const ReviewsSlide = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const fetchReviews = async () => {
      const response = await axios(
        "https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/review/"
      );
      if (response.data) {
        console.log(response.data);
        const allReview = response.data;
        if (allReview) {
          setReviews(allReview);
        }
      }
    };
    fetchReviews();
  }, []);
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl text-center font-bold text-pink-500 stylish-regular">
            What our happy user says!
          </h2>
        </div>
        {/* Slider wrapper */}
        <div className="swiper mySwiper">
          <div className="swiper-wrapper grid md:grid-cols-3 lg:grid-cols-4 xs:grid-cols-1 gap-3">
            {reviews.map((review) => (
              <div key={review.id} className="swiper-slide">
                <div className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500 w-full mx-auto hover:border-pink-500 hover:shadow slide_active:border-indigo-600">
                  <div>
                    <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500">
                      {review.rating}
                    </div>
                    <p className="text-base text-gray-600 leading-6 transition-all duration-500 pb-8 group-hover:text-gray-800 slide_active:text-gray-800">
                      {review.reviews}
                    </p>
                  </div>
                  <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                    <div className="block">
                      <h5 className="text-gray-900 font-medium transition-all duration-500 mb-1">
                        {review.patient_name}
                      </h5>
                      <span className="text-sm leading-4 text-gray-500">
                        {review.reviewd_at}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlide;
