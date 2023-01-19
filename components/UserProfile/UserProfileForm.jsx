import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/features/authSlice";

const UserProfileForm = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirm: "",
    img: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (form.password !== form.confirm) {
      console.error("passwords don't match");
      return;
    }
    dispatch(updateUser(form));
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
      confirm: "",
      img: "",
    });
  };

  return (
    <div className="w-full max-w-md p-10 bg-shade-9 rounded-lg shadow-md sm:p-8">
      <h5 className="text-xl font-semibold leading-none text-shade-1 mb-5">
        Update Profile Information:
      </h5>
      <form onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={(evt) =>
                setForm({ ...form, firstName: evt.target.value })
              }
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.firstName}
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              First name
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={(evt) =>
                setForm({ ...form, lastName: evt.target.value })
              }
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.lastName}
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Last name
            </label>
          </div>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(evt) => setForm({ ...form, email: evt.target.value })}
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
            value={form.email}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Email address
          </label>
        </div>
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(evt) => setForm({ ...form, username: evt.target.value })}
            name="floating_username"
            id="floating_username"
            className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
            value={form.username}
          />
          <label
            htmlFor="floating_username"
            className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Username
          </label>
        </div>
        {/* <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={(evt) =>
                setForm({ ...form, password: evt.target.value })
              }
              name="floating_password"
              id="floating_password"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.password}
            />
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Password
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              onChange={(evt) =>
                setForm({ ...form, confirm: evt.target.value })
              }
              name="floating_confirm"
              id="floating_confirm"
              className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
              placeholder=" "
              value={form.confirm}
            />
            <label
              htmlFor="floating_confirm"
              className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
              Confirm password
            </label>
          </div>
        </div> */}
        <div className="relative z-0 mb-6 w-full group">
          <input
            onChange={(evt) => setForm({ ...form, img: evt.target.value })}
            name="floating_img_url"
            id="floating_img_url"
            className="block py-2.5 px-0 w-full text-sm text-shade-1 bg-transparent border-0 border-b-2 border-shade-1 appearance-none focus:outline-none focus:ring-0 focus:border-accent peer"
            placeholder=" "
            value={form.img}
          />
          <label
            htmlFor="floating_img_url"
            className="peer-focus:font-medium absolute text-sm text-shade-5 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Image Url
          </label>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-accent rounded-lg hover:text-shade-9 hover:bg-highlight focus:ring-4 focus:outline-none focus:ring-blue-300 ease-in-out duration-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserProfileForm;
