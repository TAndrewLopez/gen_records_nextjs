import { useState, useEffect } from "react";

const UserForm = ({ user }) => {
  const [form, setForm] = useState({
    id: "",
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    img: "",
    isAdmin: "",
  });

  useEffect(() => {
    if (user) {
      setForm({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        username: user.username,
        email: user.email,
        img: user.img || "",
        isAdmin: user.isAdmin,
      });
    }
  }, [user]);

  return (
    <form action="#" className="mb-6">
      <div className="mb-6">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-shade-5">
          First Name
        </label>
        <input
          id="first_name"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="First Name"
          required
          value={form.firstName}
          onChange={(evt) => {
            setForm({ ...form, firstName: evt.target.value });
          }}
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-shade-5">
          Last Name
        </label>
        <input
          id="first_name"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Last Name"
          required
          value={form.lastName}
          onChange={(evt) => {
            setForm({ ...form, lastName: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="username"
          className="block mb-2 text-sm font-medium text-shade-5">
          Username
        </label>
        <input
          id="username"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Username"
          required
          value={form.username}
          onChange={(evt) => {
            setForm({ ...form, username: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-shade-5">
          Email
        </label>
        <input
          id="email"
          type="email"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Email"
          required
          value={form.email}
          onChange={(evt) => {
            setForm({ ...form, email: evt.target.value });
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
          htmlFor="privileges"
          className="block mb-2 text-sm font-medium text-shade-5">
          Image URL
        </label>
        <select
          id="privileges"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={form.isAdmin}
          onChange={(evt) => {
            setForm({ ...form, isAdmin: evt.target.value });
          }}>
          <option value={null}>Choose Privilege</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <button
        type="submit"
        className="text-shade-1 bg-accent hover:bg-highlight hover:text-shade-9 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block ease-in-out duration-300">
        {user ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default UserForm;
