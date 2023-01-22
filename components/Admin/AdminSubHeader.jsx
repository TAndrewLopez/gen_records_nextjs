import { useState } from "react";
import { AdminSearchField, Drawer, FormDropDown } from "../../components";

const AdminSubHeader = () => {
  const [edit, setEdit] = useState(false);
  const [formID, setFormID] = useState(0);

  return (
    <>
      <ul className="p-3 flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center bg-shade-8">
        <li>{/* <AdminSearchField /> */}</li>
        <li>
          <FormDropDown setEdit={setEdit} setFormID={setFormID} />
        </li>
      </ul>
      <Drawer edit={edit} setEdit={setEdit} formID={formID} />
    </>
  );
};

export default AdminSubHeader;
