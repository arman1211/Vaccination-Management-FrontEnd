import axios from "axios";
import { useState } from "react";

const UpdadePassword = ({ onClose, doctor, setMessage }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const userId = doctor.doctor.id;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      new_password: password,
      confirm_password: confirmPassword,
    };
    if (password !== confirmPassword) {
      setError("Password didnt match");
    }
    const response = await axios.put(
      `https://vaccination-management-backend-drf.onrender.com/update-password/${userId}`,
      data
    );
    if (response.data) {
      setMessage("Password Updated successfully");
      onClose();
    }
  };
  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>

        {error && (
          <div role="alert" className="alert alert-warning bg-red-300">
            <span>{error}</span>
          </div>
        )}
        <h2 className="text-2xl font-semibold mb-4 text-center text-pink-600">
          Change Password {userId}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              New Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              name="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              className="btn py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500  hover:bg-pink-500 hover:text-white text-md"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent ml-2 text-white text-md mr-4 hover:bg-pink-400"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdadePassword;
