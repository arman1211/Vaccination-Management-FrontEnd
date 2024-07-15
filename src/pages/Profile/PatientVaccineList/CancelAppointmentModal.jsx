

const CancelAppointmentModal = ({ onClose, setDeletePermission }) => {
  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <button
          className="btn btn-sm btn-circle absolute right-2 top-2"
          onClick={onClose}
        >
          ✕
        </button>
        <h3 className="text-3xl  font-bold text-pink-500 text-center">
          Are you sure want to cancel the appointment
        </h3>
        <div className="button-container flex justify-around mt-24">
          <button
            className="btn btn-warning bg-green-600 hover:bg-green-500 text-white font-bold text-xl p-2 px-8"
            onClick={onClose}
          >
            No
          </button>
          <button
            className="btn btn-warning bg-red-600 hover:bg-red-500 text-white font-bold text-xl p-2 px-8"
            onClick={() => setDeletePermission(true)}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};

export default CancelAppointmentModal;
