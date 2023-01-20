import { useState } from "react";
import { DeleteModal, Drawer, UserForm } from "../../../components";
import { deleteUser } from "../../../redux/features/adminSlice";
import { EditIcon, TrashIcon } from "../../assets";

const UsersTable = ({ users }) => {
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = users.find((user) => user.id === selID);
  const [edit, setEdit] = useState(false);

  return (
    <div className="relative overflow-x-auto shadow-md border-t border-shade-6">
      <table className="w-full text-sm text-left">
        <thead className="text-sm text-shade-1 uppercase bg-shade-9">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              First Name
            </th>
            <th scope="col" className="px-6 py-3">
              Last Name
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Privileges
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr className={`${color}`} key={user.id}>
                <th className="px-6 py-4 text-shade-8">{user.id}</th>
                <td className="px-6 py-4 text-shade-8">{user.firstName}</td>
                <td className="px-6 py-4 text-shade-8">{user.lastName}</td>
                <td
                  scope="row"
                  className="px-6 py-4 text-shade-9 whitespace-nowrap">
                  {user.username}
                </td>
                <td className="px-6 py-4 text-shade-8">{user.email}</td>
                <td className="px-6 py-4 text-shade-8">
                  {user.isAdmin ? "Administrator" : "User"}
                </td>
                <td className="text-center text-shade-8">
                  <button
                    onClick={() => {
                      setSelID(user.id);
                      setEdit(true);
                    }}
                    className="p-3 group ">
                    <EditIcon twClass="w-4 fill-shade-7 group-hover:fill-highlight" />
                  </button>
                  <button
                    onClick={() => {
                      setSelID(user.id);
                      setShowModal(true);
                    }}
                    className="p-3 group ">
                    <TrashIcon twClass="w-4 fill-errorRed group-hover:fill-highlight" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showModal && (
        <DeleteModal
          setShowModal={setShowModal}
          message={`User ID #${selection.id} named ${selection.firstName} ${selection.lastName}`}
          delItem={() => dispatch(deleteUser(selection.id))}
        />
      )}
      <Drawer
        formName={"User Form"}
        edit={edit}
        setEdit={setEdit}
        element={<UserForm setEdit={setEdit} user={selection} />}
      />
    </div>
  );
};

export default UsersTable;
