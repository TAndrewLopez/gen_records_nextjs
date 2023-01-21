import { useState } from "react";
import { AdminSearchField, Drawer, FormDropDown } from "../../components";

const AdminSubHeader = () => {
  const [edit, setEdit] = useState(false);
  const [form, setForm] = useState("");
  const forms = ["artist", "lineItem", "order", "track", "user", "vinyl"];

  return (
    <>
      <ul className="p-3 flex flex-col gap-5 sm:gap-0 sm:flex-row justify-between items-center bg-shade-8">
        <li>
          <AdminSearchField />
        </li>
        <li>
          <FormDropDown setEdit={setEdit} />
        </li>
      </ul>
      <Drawer
        formName={"Add Something"}
        edit={edit}
        setEdit={setEdit}
        element={null}
      />
    </>
  );
};

export default AdminSubHeader;
