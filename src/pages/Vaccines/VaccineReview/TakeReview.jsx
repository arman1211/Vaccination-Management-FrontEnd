import axios from "axios";
import { useState } from "react";

const TakeReview = ({ vaccine_id }) => {
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState("");
  const patientId = localStorage.getItem("patient_id");

  const handleRating = (rate) => {
    setRating(rate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      reviews: reviews,
      patient: patientId,
      vaccine: vaccine_id,
      rating: "⭐".repeat(rating),
    };
    const fetchUser = async () => {
      const response = await axios.post(
        "https://vaccination-management-backend-drf.onrender.com/vaccine-campaign/review/",
        data
      );
      console.log(response);
    };
    fetchUser();

    window.location.reload();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-4 shadow-md rounded-md bg-white"
    >
      <div className="mb-4">
        <label htmlFor="reviews" className="block text-gray-700 font-bold mb-2">
          Your Review
        </label>
        <textarea
          id="reviews"
          value={reviews}
          onChange={(e) => setReviews(e.target.value)}
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
          rows="4"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">Rating</label>
        <div className="flex space-x-2">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-8 h-8 cursor-pointer ${
                i < rating ? "text-yellow-500" : "text-gray-300"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              onClick={() => handleRating(i + 1)}
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-pink-500 text-white font-bold rounded-lg hover:bg-pink-400 transition-colors duration-300"
      >
        Submit Review
      </button>
    </form>
  );
};

export default TakeReview;
