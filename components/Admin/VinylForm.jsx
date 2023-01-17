import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAdminContent, updateVinyl } from "../../redux/features/adminSlice";

const AdminVinylForm = ({ vinyl }) => {
  const dispatch = useDispatch();
  const { artists } = useSelector((state) => state.adminReducer);

  const [form, setForm] = useState({
    id: "",
    name: "",
    price: "",
    stock: "",
    popularity: "",
    releaseDate: "",
    label: "",
    img: "",
    artistId: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { name, releaseDate, label, img, artistId } = form;
    if (!name || !releaseDate || !label || !img || !artistId) {
      console.log("validation error");
      return;
    }
    dispatch(updateVinyl(form));
  };

  useEffect(() => {
    if (!artists.length) {
      dispatch(getAdminContent());
    }
  }, []);

  useEffect(() => {
    if (vinyl) {
      setForm({
        id: vinyl.id,
        name: vinyl.name,
        price: vinyl.price,
        stock: vinyl.stock,
        popularity: vinyl.popularity,
        releaseDate: vinyl.releaseDate,
        label: vinyl.label,
        img: vinyl.img,
        artistId: vinyl.artistId,
      });
    }
  }, [vinyl]);

  return (
    <div className="w-full max-w-md p-10 bg-shade-9 rounded-lg shadow-md sm:p-8">
      <h5 className="text-xl font-semibold leading-none text-shade-1 mb-5">
        Update Vinyl Information:
      </h5>
      <form onSubmit={handleSubmit}>
        <div className="relative z-0 mb-6 w-full group">
          <input
            name="name"
            id="name"
            className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
            value={form.name}
            onChange={(evt) => setForm({ ...form, name: evt.target.value })}
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Vinyl Name
          </label>
        </div>
        <div className="grid md:grid-cols-3 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              name="price"
              id="price"
              type="number"
              min="0"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.price}
              onChange={(evt) =>
                setForm({ ...form, price: Number(evt.target.value) })
              }
            />
            <label
              htmlFor="price"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Price
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              name="stock"
              id="stock"
              type="number"
              min={1}
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.stock}
              onChange={(evt) =>
                setForm({ ...form, stock: Number(evt.target.value) })
              }
            />
            <label
              htmlFor="stock"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Stock
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              name="popularity"
              id="popularity"
              type="number"
              min={0}
              max={100}
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.popularity}
              onChange={(evt) =>
                setForm({ ...form, popularity: Number(evt.target.value) })
              }
            />
            <label
              htmlFor="popularity"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Popularity
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              name="releaseDate"
              id="releaseDate"
              type="date"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.releaseDate}
              onChange={(evt) =>
                setForm({ ...form, releaseDate: evt.target.value })
              }
            />
            <label
              htmlFor="releaseDate"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Release Date
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              name="label"
              id="label"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.label}
              onChange={(evt) => setForm({ ...form, label: evt.target.value })}
            />
            <label
              htmlFor="label"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Label
            </label>
          </div>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              name="img"
              id="img"
              type="url"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.img}
              onChange={(evt) => setForm({ ...form, img: evt.target.value })}
            />
            <label
              htmlFor="img"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Image Url
            </label>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <select
              value={form.artistId}
              onChange={(evt) =>
                setForm({ ...form, artistId: Number(evt.target.value) })
              }
              id="artistId"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer">
              <option value={null}>Select Artist</option>
              {artists.map((artist) => (
                <option key={artist.id} value={artist.id}>
                  {artist.name}
                </option>
              ))}
            </select>
            <label
              htmlFor="artistId"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Artist
            </label>
          </div>
        </div>
        <div className="flex justify-evenly">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-shade-1 bg-accent rounded-lg hover:text-shade-9 hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 ease-in-out duration-300">
            Submit
          </button>
          <button
            onClick={() =>
              setForm({
                name: "",
                price: "",
                stock: "",
                popularity: "",
                releaseDate: "",
                label: "",
                img: "",
                artistId: "",
              })
            }
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-shade-1 bg-sec rounded-lg hover:text-shade-9 hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 ease-in-out duration-300">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminVinylForm;
