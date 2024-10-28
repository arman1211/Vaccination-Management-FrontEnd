import axios from "axios";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa"; // Importing icons

const ConfirmPayment = () => {
  const handlePayment = async () => {
    const token = localStorage.getItem("token");
    try {
      // Send POST request to initiate payment
      const response = await axios.post(
        "https://vaccination-management-backend-drf.vercel.app/patient/payment/initiate/",
        {},
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (response.status === 200 && response.data.payment_url) {
        console.log(response.data);
        window.location.href = response.data.payment_url;
      } else {
        console.error("Payment initiation failed:", response.data);
        alert("Failed to initiate payment");
      }
    } catch (error) {
      console.error("Error initiating payment:", error);
      alert("An error occurred while initiating the payment.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-lg w-full">
        <div className="flex items-center justify-center mb-6">
          <FaShoppingCart className="text-4xl text-pink-600 mr-2" />
          <h2 className="text-3xl font-bold text-gray-800">Your Cart</h2>
        </div>
        <div className="border-b border-gray-300 mb-6 pb-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg text-gray-800">Premium Access</span>
            <span className="text-lg text-gray-600">1200 BDT</span>
          </div>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span className="text-gray-600">Secure payment guaranteed</span>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-md mb-6">
          <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
          <p className="text-gray-600">
            You are purchasing premium access for vaccination services.
          </p>
          <p className="font-semibold text-gray-500">
            Total Payable amount:{" "}
            <span className="font-bold text-black">1200 bdt</span>
          </p>
        </div>
        <button
          onClick={handlePayment}
          className="bg-pink-600 text-white hover:bg-pink-500 py-2 px-6 rounded-md transition duration-300 w-full shadow-lg transform hover:scale-105"
        >
          Complete Payment
        </button>
        <p className="text-center text-gray-500 mt-4">
          By clicking Complete Payment, you agree to our terms and conditions.
        </p>
      </div>
    </div>
  );
};

export default ConfirmPayment;
