import {
  AdminSearchField,
  AdminDropDown,
  AdminSelections,
} from "../../components";

const AdminSubHeader = () => {
  return (
    <ul className="p-3 flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center bg-shade-8">
      <li>
        <AdminSearchField />
      </li>
      {/* <li>
        <AdminSelections />
      </li> */}
      {/* <li>
        <AdminDropDown />
      </li> */}
    </ul>
  );
};

export default AdminSubHeader;
