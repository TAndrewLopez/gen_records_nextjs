import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModal, Drawer, ArtistForm } from "../../../components";
import { EditIcon, TrashIcon, SpinnerLoader } from "../../assets";
import { deleteArtist } from "../../../redux/features/adminSlice";

const ArtistsTable = ({ artists }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.adminReducer);

  //DELETE MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = artists.find((artist) => artist.id === selID);
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
                Genre
              </th>
              <th scope="col" className="px-6 py-3">
                Spotify ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {artists.map((artist, i) => {
              const color =
                i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
              return (
                <tr className={`${color}`} key={artist.id}>
                  <th className="px-6 py-4 text-shade-8">{artist.id}</th>
                  <td className="px-6 py-4 text-shade-8">{`${artist.name}`}</td>
                  <td className="px-6 py-4 text-shade-8">{artist.genre}</td>
                  <td className="px-6 py-4 text-shade-8">{artist.spotifyId}</td>
                  <td className="text-center text-shade-8">
                    <button
                      onClick={() => {
                        setSelID(artist.id);
                        setEdit(!edit);
                      }}
                      className="p-3 group ">
                      <EditIcon twClass="w-4 fill-shade-7 group-hover:fill-highlight" />
                    </button>
                    <button
                      onClick={() => {
                        setSelID(artist.id);
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
          message={`Artist ID #${selection.id} named ${selection.name}`}
          delItem={() => dispatch(deleteArtist(selection.id))}
        />
      )}

      <Drawer
        formName={"Artist Form"}
        edit={edit}
        setEdit={setEdit}
        element={<ArtistForm setEdit={setEdit} artist={selection} />}
      />
    </div>
  );
};

export default ArtistsTable;
