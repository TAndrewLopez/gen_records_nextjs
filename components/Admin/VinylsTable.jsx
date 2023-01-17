import Link from "next/link";
import { useState } from "react";
import { AdminDeleteModal } from "..";
import { TrashIcon } from "../assets";
import { formatToUSD } from "../helperFuncs";

const VinylsTable = ({ vinyls }) => {
  const [showModal, setShowModal] = useState(false);
  const [delID, setDelID] = useState(-1);
  const selection = vinyls.find((item) => item.id === delID);

  return (
    <div className="relative overflow-x-auto shadow-md border-t border-shade-6">
      <table className="w-full text-sm text-left">
        <thead className="text-sm text-shade-1 uppercase bg-shade-9">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Artist
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Stock
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {vinyls.map((vinyl, i) => {
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr
                onClick={() => console.log(vinyl)}
                className={`${color}`}
                key={vinyl.id}>
                <th className="px-6 py-4 text-shade-8">{vinyl.id}</th>
                <td
                  scope="row"
                  className="px-6 py-4 text-shade-8 whitespace-nowrap">
                  <Link className="hover:text-sec" href={`/admin/${vinyl.id}`}>
                    {vinyl.name}
                  </Link>
                </td>
                <td className="px-6 py-4 text-shade-8">{vinyl.artist.name}</td>
                <td className="px-6 py-4 text-shade-8">
                  {`$${formatToUSD(vinyl.price)}`}
                </td>
                <td className="px-6 py-4 text-shade-8">{vinyl.stock}</td>
                <td
                  onClick={() => {
                    setDelID(vinyl.id);
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

export default VinylsTable;

/*


          {users.map((user, i) => {
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr
                onClick={() => console.log(user)}
                className={`${color}`}
                key={user.id}>
                <td className="px-6 py-4 font-bold text-shade-8">{user.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-normal text-shade-9 whitespace-nowrap">
                  <Link className="hover:text-sec" href={`/admin/${user.id}`}>
                    <span className="font-bold">Name:</span>{" "}
                    {`${user.firstName} ${user.lastName}`}
                    {" / "}
                    <span className="font-bold">Username:</span>{" "}
                    {`${user.username}`}
                  </Link>
                </th>
                <td className="px-6 py-4 text-shade-8">User</td>
                <td
                  onClick={() => {
                    setDelID(user.id);
                    setShowModal(true);
                  }}
                  className="text-center text-shade-8">
                  <button className="p-3 group">
                    <TrashIcon twClass="w-4 fill-errorRed group-hover:fill-highlight" />
                  </button>
                </td>
              </tr>
            );
          })}
*/
