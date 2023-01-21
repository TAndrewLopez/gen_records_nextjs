import { useState } from "react";
import {
  AdminSearchField,
  Drawer,
  FormDropDown,
  ArtistForm,
  LineItemForm,
  OrderForm,
  TrackForm,
  UserForm,
  VinylForm,
} from "../../components";

const AdminSubHeader = () => {
  const [edit, setEdit] = useState(false);
  const [formID, setFormID] = useState(0);
  const formComponents = [
    { id: 1, formName: "Add Artist Form", element: <ArtistForm /> },
    { id: 2, formName: "Add Line Item Form", element: <LineItemForm /> },
    { id: 3, formName: "Add Order Form", element: <OrderForm /> },
    { id: 4, formName: "Add Track Form", element: <TrackForm /> },
    { id: 5, formName: "Add User Form", element: <UserForm /> },
    { id: 6, formName: "Add Vinyl Form", element: <VinylForm /> },
  ];

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
