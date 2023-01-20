import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateVinyl } from "../../../redux/features/adminSlice";

const VinylForm = ({ vinyl, setEdit }) => {
  const dispatch = useDispatch();
  const { artists } = useSelector((state) => state.adminReducer);

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    popularity: "",
    img: "",
    releaseDate: "",
    label: "",
    totalTrack: "",
    spotifyId: "",
    artistId: "",
  });

  useEffect(() => {
    if (vinyl) {
      setForm({
        id: vinyl.id,
        name: vinyl.name,
        price: vinyl.price,
        stock: vinyl.stock,
        popularity: vinyl.popularity,
        img: vinyl.img,
        releaseDate: vinyl.releaseDate,
        label: vinyl.label,
        totalTrack: vinyl.totalTrack,
        spotifyId: vinyl.spotifyId,
        artistId: vinyl.artistId,
      });
    }
  }, [vinyl]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    dispatch(updateVinyl(form));
    setEdit(false);
    setForm({
      id: "",
      name: "",
      price: "",
      stock: "",
      popularity: "",
      img: "",
      releaseDate: "",
      label: "",
      totalTrack: "",
      spotifyId: "",
      artistId: "",
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
          htmlFor="price"
          className="block mb-2 text-sm font-medium text-shade-5">
          Price
        </label>
        <input
          id="price"
          type="number"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Price"
          required
          value={form.price}
          onChange={(evt) => {
            setForm({ ...form, price: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="stock"
          className="block mb-2 text-sm font-medium text-shade-5">
          Stock
        </label>
        <input
          id="stock"
          type="number"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Stock"
          required
          value={form.stock}
          onChange={(evt) => {
            setForm({ ...form, stock: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="popularity"
          className="block mb-2 text-sm font-medium text-shade-5">
          Popularity
        </label>
        <input
          id="popularity"
          type="number"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Popularity"
          required
          min={1}
          max={100}
          value={form.popularity}
          onChange={(evt) => {
            setForm({ ...form, popularity: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="img_url"
          className="block mb-2 text-sm font-medium text-shade-5">
          Image URL
        </label>
        <input
          id="img_url"
          type="url"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Image URL"
          required
          value={form.img}
          onChange={(evt) => {
            setForm({ ...form, img: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="release_date"
          className="block mb-2 text-sm font-medium text-shade-5">
          Release Date
        </label>
        <input
          id="release_date"
          type="date"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Release Date"
          required
          value={form.releaseDate}
          onChange={(evt) => {
            setForm({ ...form, releaseDate: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="label"
          className="block mb-2 text-sm font-medium text-shade-5">
          Label
        </label>
        <input
          id="label"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Label"
          required
          value={form.label}
          onChange={(evt) => {
            setForm({ ...form, label: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="total_track"
          className="block mb-2 text-sm font-medium text-shade-5">
          Total Tracks
        </label>
        <input
          id="total_track"
          type="number"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Total Tracks"
          required
          min={1}
          value={form.totalTrack}
          onChange={(evt) => {
            setForm({ ...form, totalTrack: evt.target.value });
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
          min={1}
          value={form.spotifyId}
          onChange={(evt) => {
            setForm({ ...form, spotifyId: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="artist_id"
          className="block mb-2 text-sm font-medium text-shade-5">
          Artist ID
        </label>
        <select
          id="artist_id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={form.artistId}
          onChange={(evt) => {
            setForm({ ...form, artistId: evt.target.value });
          }}>
          <option value={null}>Choose Artist</option>
          {artists.map((artist) => (
            <option
              value={artist.id}
              key={artist.id}>{`${artist.id}. ${artist.name}`}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="text-shade-1 bg-accent hover:bg-highlight hover:text-shade-9 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block ease-in-out duration-300">
        {vinyl ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default VinylForm;
