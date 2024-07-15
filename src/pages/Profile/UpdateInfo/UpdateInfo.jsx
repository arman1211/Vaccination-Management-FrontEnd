import axios from "axios";
import { useEffect, useState } from "react";

const UpdateInfo = ({ isOpen, patient, onClose, setPatient, setMessage }) => {
  const [formData, setFormData] = useState({
    email: "",
    address: "",
    phone: "",
    nid: "",
  });

  useEffect(() => {
    if (patient) {
      setFormData({
        email: patient.user.email,
        address: patient.address,
        phone: patient.phone,
        nid: patient.nid,
      });
    }
  }, [patient]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    const data = {
      user: {
        email: formData.email,
      },
      address: formData.address,
      phone: formData.phone,
      nid: formData.nid,
    };
    const response = await axios.put(
      `https://vaccination-management-backend-drf.onrender.com/patient/update-patient/${patient.id}`,
      data
    );
    console.log(response);
    if (response.data) {
      setMessage("Successfully Updated Your information");
      patient.user.email = data.user.email;
      patient.address = data.address;
      patient.phone = data.phone;
      patient.nid = data.nid;
      setPatient(patient);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-center text-pink-600">
          Update Info
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">NID</label>
            <input
              type="text"
              name="nid"
              value={formData.nid}
              onChange={handleChange}
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

export default UpdateInfo;
