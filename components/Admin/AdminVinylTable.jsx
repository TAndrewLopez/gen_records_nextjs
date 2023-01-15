import Link from "next/link";
import { useState } from "react";
import { formatToUSD } from "../helperFuncs";
import { AdminDeleteModal } from "../../components";
import { TrashIcon } from "../assets";

const AdminVinylTable = ({ vinyls }) => {
  const [showModal, setShowModal] = useState(false);
  const [delID, setDelID] = useState(-1);
  const selection = vinyls.find((item) => item.id === delID);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-shade-1 uppercase bg-shade-9">
          <tr>
            <th scope="col" className="px-6 py-3">
              ID
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
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {vinyls.map((vinyl, i) => {
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr className={`${color}`} key={vinyl.id}>
                <td className="px-6 py-4 text-shade-8">{vinyl.id}</td>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-shade-9 whitespace-nowrap">
                  <Link className="hover:text-sec" href={`/shop/${vinyl.id}`}>
                    {vinyl.name}
                  </Link>
                </th>
                <td className="px-6 py-4 text-shade-8">{vinyl.artist.name}</td>
                <td className="px-6 py-4 text-shade-8">{`$${formatToUSD(
                  vinyl.price
                )}`}</td>
                <td className="px-6 py-4 text-shade-8">{vinyl.stock}</td>
                <td
                  onClick={() => {
                    setDelID(vinyl.id);
                    setShowModal(true);
                  }}
                  className="px-6 py-4 text-shade-8 text-center group hover:cursor-pointer">
                  <button>
                    <TrashIcon twClass="w-4 fill-shade-9 group-hover:fill-errorRed" />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal ? (
        <AdminDeleteModal vinyl={selection} setShowModal={setShowModal} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdminVinylTable;
