import { AdminSearchField, AdminDropDown, AdminSelections } from "..";

const AdminSubHeader = () => {
  return (
    <ul className="p-3 flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center bg-shade-8">
      <li>
        <AdminSearchField />
      </li>
      {/* <li>
        <AdminSelections />
      </li> */}
      <li>
        <button
          className="px-6
            py-2.5
            bg-accent
            text-white
            font-medium
            text-xs
            leading-tight
            uppercase
            rounded
            shadow-md
            hover:text-shade-9
            hover:bg-highlight
            hover:shadow-lg
            focus:bg-highlight
            focus:shadow-lg 
            focus:outline-none focus:ring-0
            active:bg-highlight active:shadow-lg active:text-shade-9
            transition
            duration-300
            ease-in-out
            flex
            items-center
            whitespace-nowrap"
          type="button"
          id="dropdownMenuButton1">
          Add Item
        </button>
      </li>
    </ul>
  );
};

export default AdminSubHeader;
