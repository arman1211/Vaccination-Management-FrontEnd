import { FaTimesCircle } from "react-icons/fa";

const CanceledPayment = () => {
  return (
    <div className="flex min-h-[540px] justify-center m-auto">
      <div className="flex items-center m-auto space-x-3 h-32 bg-gray-100 text-gray-700 px-4 py-3 rounded-lg shadow-md">
        <FaTimesCircle className="text-gray-500" size={24} />
        <div>
          <h3 className="font-semibold text-lg">Payment Canceled</h3>
          <p className="text-sm">
            You canceled this payment. No charges were made.
          </p>
        </div>
        <a href="/" className="btn btn-sm btn-secondary">
          return to home
        </a>
      </div>
    </div>
  );
};

export default CanceledPayment;
