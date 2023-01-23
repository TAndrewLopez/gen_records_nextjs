import { useState } from "react";
import { MagnifyingGlassIcon } from "../../icons";

const AdminSearchField = () => {
  const [search, setSearch] = useState("");

  const handleChange = (evt) => {
    if (evt.target.value) {
      setSearch(evt.target.value);
      console.log("filter things");
    } else {
      setSearch("");
      console.log("input empty");
    }
  };
  return (
    <div className="md:relative flex sm:min-w-[400px] text-shade-1">
      <label
        htmlFor="admin_search_field"
        className="flex items-center justify-center px-4 bg-shade-9 rounded-l">
        <MagnifyingGlassIcon twClass="w-4 fill-shade-1" />
      </label>
      <input
        onChange={handleChange}
        id="admin_search_field"
        className="py-2 w-full bg-shade-9 outline-none "
        name="search"
        placeholder="search orders, users, vinyls, etc."
        value={search}
      />
      <div
        onClick={() => {
          if (search) {
            setSearch("");
          }
        }}
        className={`flex items-center justify-center px-4 bg-shade-9 rounded-r group ${
          search
            ? "cursor-pointer border-l border-shade-1 border-opacity-30 hover:bg-errorRed ease-iun-out duration-300"
            : ""
        }`}>
        <svg
          aria-hidden="true"
          className={`w-4 fill-shade-1 group-hover:fill-shade-1 ${
            search ? "opacity-100" : "opacity-0"
          }`}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"></path>
        </svg>
      </div>
    </div>
  );
};

export default AdminSearchField;

const filterVinyls = (arr, searchInput) => {
  const keys = ["id", "label", "name"];
  const filteredVinyls = arr.reduce((acc, vinyl) => {}, []);
  //return results matching above
};
