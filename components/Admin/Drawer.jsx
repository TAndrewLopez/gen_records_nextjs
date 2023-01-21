import {
  ArtistForm,
  LineItemForm,
  OrderForm,
  TrackForm,
  UserForm,
  VinylForm,
} from "../../components";

const Drawer = ({ edit, setEdit, element, formName, formID }) => {
  const formComponents = [
    { id: 1, formName: "Add Artist Form", element: <ArtistForm /> },
    { id: 2, formName: "Add Line Item Form", element: <LineItemForm /> },
    { id: 3, formName: "Add Order Form", element: <OrderForm /> },
    { id: 4, formName: "Add Track Form", element: <TrackForm /> },
    { id: 5, formName: "Add User Form", element: <UserForm /> },
    { id: 6, formName: "Add Vinyl Form", element: <VinylForm /> },
  ];
  return (
    <div
      className={`
      fixed w-full sm:w-80 h-full z-40
    bg-shade-9 p-4
      overflow-y-auto
      transition-transform left-0 top-0 
      ${edit ? "" : "-translate-x-full"}
      `}>
      <h5 className="inline-flex items-center mb-6 text-2xl font-semibold text-shade-1 uppercase">
        <svg
          className="w-5 h-5 mr-2"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
            clipRule="evenodd"></path>
        </svg>
        {formName}
        {formID &&
          formComponents
            .filter((item) => item.id === formID)
            .map((item) => item.formName)}
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-contact"
        aria-controls="drawer-contact"
        className="text-shade-1 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center ease-in-out duration-300">
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setEdit(false)}>
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      {element}
      {formID &&
        formComponents
          .filter((item) => item.id === formID)
          .map((item) => item.element)}
    </div>
  );
};

export default Drawer;
