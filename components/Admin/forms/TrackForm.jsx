import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTrack, createTrack } from "../../../redux/features/adminSlice";

const TrackForm = ({ track, setEdit }) => {
  const dispatch = useDispatch();
  const { vinyls } = useSelector((state) => state.adminReducer);

  const [form, setForm] = useState({
    id: "",
    name: "",
    spotifyId: "",
    explicit: "",
    preview: "",
    vinylId: "",
  });

  useEffect(() => {
    if (track) {
      setForm({
        id: track.id,
        name: track.name,
        spotifyId: track.spotifyId,
        explicit: track.explicit,
        preview: track.preview || "",
        vinylId: track.vinylId,
      });
    }
  }, [track]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (track) {
      dispatch(updateTrack(form));
    } else {
      delete form.id;
      dispatch(createTrack(form));
    }
    setEdit(false);
    setForm({
      id: "",
      name: "",
      spotifyId: "",
      explicit: "",
      preview: "",
      vinylId: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-6">
        <label
          htmlFor="track_name"
          className="block mb-2 text-sm font-medium text-shade-5">
          Track Name
        </label>
        <input
          id="track_name"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Track Name"
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
          htmlFor="explicit"
          className="block mb-2 text-sm font-medium text-shade-5">
          Explicit
        </label>
        <select
          id="explicit"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={form.explicit}
          onChange={(evt) => {
            setForm({ ...form, explicit: evt.target.value });
          }}>
          <option value={null}>Choose status</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="preview_url"
          className="block mb-2 text-sm font-medium text-shade-5">
          Preview URL <span className="text-xs">{`(optional)`}</span>
        </label>
        <input
          id="preview_url"
          type="url"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Preview URL"
          value={form.preview}
          onChange={(evt) => {
            setForm({ ...form, preview: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="explicit"
          className="block mb-2 text-sm font-medium text-shade-5">
          Vinyl ID
        </label>
        <select
          id="explicit"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={form.vinylId}
          onChange={(evt) => {
            setForm({ ...form, vinylId: evt.target.value });
          }}>
          <option value={null}>Choose Vinyl</option>
          {vinyls.map((vinyl) => (
            <option value={vinyl.id} key={vinyl.id}>
              {`${vinyl.id}. ${vinyl.name}`}
            </option>
          ))}
        </select>
      </div>
      <div className="flex">
        <button
          type="submit"
          className="text-shade-1 bg-accent hover:bg-highlight hover:text-shade-9 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block ease-in-out duration-300">
          {track ? "Update" : "Add"}
        </button>
        <button
          type="button"
          className="text-shade-9 bg-shade-1 hover:bg-sec hover:text-shade-1 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block ease-in-out duration-300"
          onClick={() => setEdit(false)}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TrackForm;
