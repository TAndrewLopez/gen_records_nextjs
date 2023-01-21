import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModal, Drawer, TrackForm } from "../../../components";
import { deleteTrack } from "../../../redux/features/adminSlice";
import { EditIcon, TrashIcon, SpinnerLoader } from "../../assets";

const TracksTable = ({ tracks }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.adminReducer);

  //DELETE MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = tracks?.find((track) => track.id === selID);
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
              const color =
                i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
              return (
                <tr className={`${color}`} key={track.id}>
                  <th className="px-6 py-4 text-shade-8">{track.id}</th>
                  <td className="px-6 py-4 text-shade-8">{track.name}</td>
                  <td className="px-6 py-4 text-shade-8">
                    {track.vinyl?.name}
                  </td>
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

                  <td className="text-center text-shade-8">
                    <button
                      onClick={() => {
                        setSelID(track.id);
                        setEdit(true);
                      }}
                      className="p-3 group ">
                      <EditIcon twClass="w-4 fill-shade-7 group-hover:fill-highlight" />
                    </button>
                    <button
                      onClick={() => {
                        setSelID(track.id);
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
          message={`Track ID #${selection.id} on Album ${selection.vinyl?.name}`}
          delItem={() => dispatch(deleteTrack(selection.id))}
        />
      )}

      <Drawer
        formName={"Track Form"}
        edit={edit}
        setEdit={setEdit}
        element={<TrackForm setEdit={setEdit} track={selection} />}
      />
    </div>
  );
};

export default TracksTable;
