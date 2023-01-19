import { useState } from "react";
import { DeleteModal } from "../../../components";
import { EditIcon, TrashIcon } from "../../assets";
import { formatToUSD } from "../../helperFuncs";

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
              <tr className={`${color}`} key={vinyl.id}>
                <th className="px-6 py-4 text-shade-8">{vinyl.id}</th>
                <td
                  scope="row"
                  className="px-6 py-4 text-shade-8 whitespace-nowrap">
                  {vinyl.name}
                </td>
                <td className="px-6 py-4 text-shade-8">{vinyl.artist?.name}</td>
                <td className="px-6 py-4 text-shade-8">
                  {`$${formatToUSD(vinyl.price)}`}
                </td>
                <td className="px-6 py-4 text-shade-8">{vinyl.stock}</td>
                <td className="text-center text-shade-8">
                  <button
                    onClick={() => console.log(vinyl)}
                    className="p-3 group ">
                    <EditIcon twClass="w-4 fill-shade-7 group-hover:fill-highlight" />
                  </button>
                  <button
                    onClick={() => {
                      setDelID(vinyl.id);
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
          selection={selection}
          setShowModal={setShowModal}
          message={`Vinyl ID #${selection.id} ${selection.name} by ${selection.artist?.name}`}
        />
      )}
    </div>
  );
};

export default VinylsTable;
