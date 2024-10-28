import { FaExclamationCircle } from "react-icons/fa";

const FailedPayment = () => {
  return (
    <div className="min-h-[540px] flex justify-center m-auto">
      <div className="flex items-center space-x-3 m-auto h-32 bg-red-100 text-red-700 px-4 py-3 rounded-lg shadow-md">
        <FaExclamationCircle className="text-red-500" size={24} />
        <div>
          <h3 className="font-semibold text-lg">Payment Failed</h3>
          <p className="text-sm">
            Your payment could not be processed. Please try again.
          </p>
        </div>
        <a href="/" className="btn btn-sm btn-secondary">
          return to home
        </a>
      </div>
    </div>
  );
};

export default FailedPayment;
