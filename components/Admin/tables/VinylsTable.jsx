import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModal, Drawer, VinylForm } from "../../../components";
import { deleteVinyl } from "../../../redux/features/adminSlice";
import { EditIcon, TrashIcon, SpinnerLoader } from "../../icons";
import { formatToUSD } from "../../helperFuncs";

const VinylsTable = ({ vinyls }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.adminReducer);

  //DELETE MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [delID, setDelID] = useState(-1);
  const selection = vinyls.find((item) => item.id === delID);
  const [edit, setEdit] = useState(false);

  return (
    <div className="relative overflow-x-auto shadow-md border-t border-shade-6">
      {isLoading ? (
        <div className="flex items-center justify-center bg-shade-9">
          <SpinnerLoader />
        </div>
      ) : (
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
              const color =
                i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
              return (
                <tr className={`${color}`} key={vinyl.id}>
                  <th className="px-6 py-4 text-shade-8">{vinyl.id}</th>
                  <td
                    scope="row"
                    className="px-6 py-4 text-shade-8 whitespace-nowrap">
                    {vinyl.name}
                  </td>
                  <td className="px-6 py-4 text-shade-8">
                    {vinyl.artist?.name}
                  </td>
                  <td className="px-6 py-4 text-shade-8">
                    {`$${formatToUSD(vinyl.price)}`}
                  </td>
                  <td className="px-6 py-4 text-shade-8">{vinyl.stock}</td>
                  <td className="text-center text-shade-8">
                    <button
                      onClick={() => {
                        setDelID(vinyl.id);
                        setEdit(!edit);
                      }}
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
      )}
      {showModal && (
        <DeleteModal
          setShowModal={setShowModal}
          message={`Vinyl ID #${selection.id} ${selection.name} by ${selection.artist?.name}`}
          delItem={() => dispatch(deleteVinyl(selection.id))}
        />
      )}
      <Drawer
        formName={"User Form"}
        edit={edit}
        setEdit={setEdit}
        element={<VinylForm setEdit={setEdit} vinyl={selection} />}
      />
    </div>
  );
};

export default VinylsTable;
