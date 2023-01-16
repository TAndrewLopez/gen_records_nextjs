const AdminSelections = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="text-shade-1 font-semibold mb-2 sm:mb-0 sm:mr-5 text-center">
        <h4>Filter Options:</h4>
      </div>
      <div className="flex">
        <div className="flex items-center mr-4">
          <input
            id="inline-checked-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded focus:ring-accent ring-offset-gray-800 focus:ring-2 bg-shade-9 border-gray-600"
          />
          <label
            htmlFor="inline-checked-checkbox"
            className="ml-2 text-sm font-medium text-gray-300">
            Orders
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded focus:ring-accent ring-offset-gray-800 focus:ring-2 bg-shade-9 border-gray-600"
          />
          <label
            htmlFor="inline-checkbox"
            className="ml-2 text-sm font-medium text-gray-300">
            Users
          </label>
        </div>
        <div className="flex items-center mr-4">
          <input
            id="inline-2-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 rounded focus:ring-accent ring-offset-gray-800 focus:ring-2 bg-shade-9 border-gray-600"
          />
          <label
            htmlFor="inline-2-checkbox"
            className="ml-2 text-sm font-medium text-gray-300">
            Vinyls
          </label>
        </div>
      </div>
    </div>
  );
};

export default AdminSelections;
