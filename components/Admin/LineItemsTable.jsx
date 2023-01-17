import { useState } from "react";
import { AdminDeleteModal } from "..";
import { TrashIcon } from "../assets";

const LineItemsTable = ({ lineItems }) => {
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = lineItems?.find((artist) => artist.id === selID);

  return (
    <div className="relative overflow-x-auto shadow-md border-t border-shade-6">
      <table className="w-full text-sm text-left">
        <thead className="text-sm text-shade-1 uppercase bg-shade-9">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {lineItems?.map((artist, i) => {
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr
                onClick={() => console.log(artist)}
                className={`${color}`}
                key={artist.id}>
                <th className="px-6 py-4 text-shade-8">{artist.id}</th>
                <td className="px-6 py-4 text-shade-8">{`${artist.name}`}</td>
                <td className="px-6 py-4 text-shade-8">{artist.genre}</td>
                <td className="px-6 py-4 text-shade-8">{artist.spotifyId}</td>
                <td
                  onClick={() => {
                    setSelID(artist.id);
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
          message={`${selection.id}`}
        />
      )}
    </div>
  );
};

export default LineItemsTable;
