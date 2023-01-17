import Link from "next/link";
import { useState } from "react";
import { AdminDeleteModal } from "..";
import { TrashIcon } from "../assets";

const AdminUserTable = ({ users }) => {
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = users.find((user) => user.id === selID);

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
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => {
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr
                onClick={() => console.log(user)}
                className={`${color}`}
                key={user.id}>
                <th className="px-6 py-4 text-shade-8">{user.id}</th>
                <td className="px-6 py-4 text-shade-8">{user.firstName}</td>
                <td className="px-6 py-4 text-shade-8">{user.lastName}</td>
                <td
                  scope="row"
                  className="px-6 py-4 text-shade-9 whitespace-nowrap">
                  <Link className="hover:text-sec" href={`/admin/${user.id}`}>
                    {user.username}
                  </Link>
                </td>
                <td className="px-6 py-4 text-shade-8">{user.email}</td>
                <td className="px-6 py-4 text-shade-8">
                  {user.isAdmin ? "Administrator" : "User"}
                </td>
                <td
                  onClick={() => {
                    setSelID(user.id);
                    setShowModal(true);
                  }}
                  className="text-center text-shade-8">
                  <button className="p-3 group ">
                    <TrashIcon twClass="w-4 fill-errorRed group-hover:fill-highlight" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {showModal && (
        <AdminDeleteModal
          selection={selection}
          setShowModal={setShowModal}
          message={`ID #${selection.id} ${selection.name} by ${selection.artist.name}`}
        />
      )}
    </div>
  );
};

export default AdminUserTable;
