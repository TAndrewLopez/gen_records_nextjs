import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateArtist } from "../../../redux/features/adminSlice";

const ArtistForm = ({ artist, setEdit }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    id: "",
    name: "",
    spotifyId: "",
    genre: "",
  });

  useEffect(() => {
    if (artist) {
      setForm({
        id: artist.id,
        name: artist.name,
        spotifyId: artist.spotifyId,
        genre: artist.genre,
      });
    }
  }, [artist]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateArtist(form));
    setEdit(false);
    setForm({
      id: "",
      name: "",
      spotifyId: "",
      genre: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-6">
        <label
          htmlFor="artist_name"
          className="block mb-2 text-sm font-medium text-shade-5">
          Name
        </label>
        <input
          id="artist_name"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Name"
          required
          value={form.name}
          onChange={(evt) => {
            setForm({ ...form, name: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="spotify_id"
          className="block mb-2 text-sm font-medium text-shade-5">
          Spotify ID
        </label>
        <input
          id="spotify_id"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Spotify ID"
          required
          value={form.spotifyId}
          onChange={(evt) => {
            setForm({ ...form, spotifyId: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="genre"
          className="block mb-2 text-sm font-medium text-shade-5">
          Genre
        </label>
        <input
          id="genre"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Genre"
          value={form.genre}
          onChange={(evt) => {
            setForm({ ...form, genre: evt.target.value });
          }}
        />
      </div>

      <button
        type="submit"
        className="text-shade-1 bg-accent hover:bg-highlight hover:text-shade-9 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block ease-in-out duration-300">
        {artist ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default ArtistForm;
