import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SuccessPage = () => {
  const { tranId } = useParams();
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      try {
        const response = await axios.get(
          `https://vaccination-management-backend-drf.vercel.app/patient/payment/detail/${tranId}`
        );
        setPaymentData(response.data);
      } catch (err) {
        console.error("Error fetching payment details:", err);
        setError("Failed to load payment details.");
      }
    };

    fetchPaymentDetails();
  }, [tranId]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {error ? (
        <div className="text-red-500">{error}</div>
      ) : paymentData ? (
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-xl p-8 my-4 border border-gray-200">
          <div className="flex justify-between">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Payment Confirmation
            </h2>
            <a className="btn btn-sm btn-secondary" href="/profile">
              Go to profile
            </a>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-600">
                Transaction ID
              </span>
              <span className="text-gray-800 font-medium">
                {paymentData.transaction_id}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-600">Amount</span>
              <span className="text-green-500 font-medium">
                ${paymentData.amount}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-600">Status</span>
              <span
                className={`font-medium ${
                  paymentData.status === "Completed"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {paymentData.status}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-600">Patient ID</span>
              <span className="text-gray-800 font-medium">
                {paymentData.patient}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-600">Created At</span>
              <span className="text-gray-800 font-medium">
                {new Date(paymentData.created_at).toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-gray-600">Updated At</span>
              <span className="text-gray-800 font-medium">
                {new Date(paymentData.updated_at).toLocaleString()}
              </span>
            </div>
          </div>
          <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center shadow-md">
            <p className="font-bold text-lg">Payment Successful!</p>
            <p className="text-sm">
              Thank you for your payment. Your transaction is complete.
            </p>
          </div>
        </div>
      ) : (
        <div>Loading payment details...</div>
      )}
    </div>
  );
};

export default SuccessPage;
