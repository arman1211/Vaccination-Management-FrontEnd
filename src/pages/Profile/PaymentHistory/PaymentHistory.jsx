import { useEffect, useState } from "react";
import axios from "axios";

const PaymentHistory = ({ patientId }) => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaymentHistory = async () => {
      const patientId = parseInt(localStorage.getItem("patient_id"));
      console.log(patientId);
      try {
        const response = await axios.get(
          `https://vaccination-management-backend-drf.vercel.app/patient/payment/details/${patientId}`
        );
        console.log(response);
        setPayments(response.data);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch payment history.");
        setLoading(false);
      }
    };

    fetchPaymentHistory();
  }, [patientId]);

  if (loading)
    return (
      <p className="text-center text-gray-500">Loading payment history...</p>
    );
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 bg-gray-50 rounded-xl shadow-lg">
      <h2 className="text-3xl font-bold text-center text-pink-700 mb-8">
        Payment History
      </h2>
      {payments.length > 0 ? (
        <div className="space-y-6">
          {payments.map((payment) => (
            <div
              key={payment.id}
              className="p-6 bg-white rounded-lg shadow hover:shadow-xl transition-shadow border-l-4 border-pink-500"
            >
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  Transaction ID:{" "}
                  <span className="text-pink-600">
                    {payment.transaction_id}
                  </span>
                </h3>
              </div>
              <div className="space-y-2 text-gray-600">
                <p>
                  <span className="font-medium text-gray-700">Amount:</span> $
                  {payment.amount}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Status:</span>{" "}
                  {payment.status}
                </p>
                <p>
                  <span className="font-medium text-gray-700">Date:</span>{" "}
                  {new Date(payment.created_at).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No payment records found.</p>
      )}
    </div>
  );
};

export default PaymentHistory;
