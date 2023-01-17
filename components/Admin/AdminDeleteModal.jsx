import { ExclamationIcon } from "../assets";
import { useDispatch } from "react-redux";
import { deleteVinyl } from "../../redux/features/adminSlice";

const AdminDeleteModal = ({ setShowModal, message }) => {
  const dispatch = useDispatch();
  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className="fixed top-0 left-0 right-0 z-50 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div className="relative left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md md:h-auto">
        <div className="relative bg-shade-9 rounded-lg shadow">
          <button
            onClick={() => setShowModal(false)}
            type="button"
            className="absolute top-3 right-2.5 text-shade-5 bg-transparent hover:bg-highlight hover:text-shade-9 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center ease-in-out duration-300"
            data-modal-hide="popup-modal">
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"></path>
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-6 text-center">
            <ExclamationIcon twClass="mx-auto mb-4 w-14 h-14 fill-shade-2" />
            <h3 className="mb-3 text-lg font-normal text-shade-5">
              Are you sure you want to delete your selection?
            </h3>
            <p className="mb-5 text-md font-normal text-highlight">{message}</p>

            <button
              onClick={() => {
                dispatch(deleteVinyl(vinyl.id));
                setShowModal(false);
              }}
              data-modal-hide="popup-modal"
              type="button"
              className="text-shade-1 bg-red-600 hover:bg-highlight hover:text-shade-9 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2 ease-in-out duration-300">
              Yes, I'm sure
            </button>
            <button
              onClick={() => setShowModal(false)}
              data-modal-hide="popup-modal"
              type="button"
              className="text-shade-9 bg-white hover:bg-highlight focus:ring-4 focus:outline-none rounded-lg text-sm font-medium px-5 py-2.5 focus:z-10 ease-in-out duration-300">
              No, cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDeleteModal;
