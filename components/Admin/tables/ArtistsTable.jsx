import { useState } from "react";
import { useDispatch } from "react-redux";
import { DeleteModal } from "../../../components";
import { EditIcon, TrashIcon } from "../../assets";
import { deleteArtist } from "../../../redux/features/adminSlice";

const ArtistsTable = ({ artists, edit }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = artists.find((artist) => artist.id === selID);

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
            const color = i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
            return (
              <tr className={`${color}`} key={artist.id}>
                <th className="px-6 py-4 text-shade-8">{artist.id}</th>
                <td className="px-6 py-4 text-shade-8">{`${artist.name}`}</td>
                <td className="px-6 py-4 text-shade-8">{artist.genre}</td>
                <td className="px-6 py-4 text-shade-8">{artist.spotifyId}</td>
                <td className="text-center text-shade-8">
                  <button
                    onClick={() => {
                      edit(true);
                      console.log(artist);
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

      {showModal && (
        <DeleteModal
          setShowModal={setShowModal}
          message={`Artist ID #${selection.id} named ${selection.name}`}
          delItem={() => dispatch(deleteArtist(selection.id))}
        />
      )}
    </div>
  );
};

export default ArtistsTable;
