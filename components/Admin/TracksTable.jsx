import { useState } from "react";
import { AdminDeleteModal } from "..";
import { TrashIcon } from "../assets";

const TracksTable = ({ tracks }) => {
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = tracks?.find((track) => track.id === selID);

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
              Vinyl Name
            </th>
            <th scope="col" className="px-6 py-3">
              Preview
            </th>
            <th scope="col" className="px-6 py-3">
              Explicit
            </th>
            <th scope="col" className="px-6 py-3 text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks?.map((track, i) => {
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr
                onClick={() => console.log(track)}
                className={`${color}`}
                key={track.id}>
                <th className="px-6 py-4 text-shade-8">{track.id}</th>
                <td className="px-6 py-4 text-shade-8">{track.name}</td>
                <td className="px-6 py-4 text-shade-8">{track.vinyl.name}</td>
                <td className="px-6 py-4 text-shade-8">
                  {track.preview ? "Yes" : "N/A"}
                </td>
                <td className="px-6 py-4 text-shade-8">
                  {track.explicit && (
                    <span className="px-2 py-px ml-2 text-sm text-shade-9 rounded border border-errorRed">
                      Explicit
                    </span>
                  )}
                </td>

                <td
                  onClick={() => {
                    setSelID(track.id);
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

export default TracksTable;
