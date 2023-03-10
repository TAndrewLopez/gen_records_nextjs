import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateOrder, createOrder } from "../../../redux/features/adminSlice";

const OrderForm = ({ order, setEdit }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.adminReducer);
  const [form, setForm] = useState({
    id: "",
    complete: "",
    userId: "",
  });

  useEffect(() => {
    if (order) {
      setForm({
        id: order.id,
        complete: order.complete,
        userId: order.userId,
      });
    }
  }, [order]);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (order) {
      dispatch(updateOrder(form));
    } else {
      delete form.id;
      dispatch(createOrder(form));
    }
    setEdit(false);
    setForm({
      id: "",
      complete: "",
      userId: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="mb-6">
        <label
          htmlFor="complete_status"
          className="block mb-2 text-sm font-medium text-shade-5">
          Complete Status
        </label>
        <select
          id="complete_status"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={form.complete}
          onChange={(evt) => {
            setForm({ ...form, complete: evt.target.value });
          }}>
          <option value={null}>Choose Status</option>
          <option value="true">True</option>
          <option value="false">False</option>
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="user_id"
          className="block mb-2 text-sm font-medium text-shade-5">
          User ID
        </label>
        <select
          id="user_id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={form.userId}
          onChange={(evt) => {
            setForm({ ...form, userId: evt.target.value });
          }}>
          <option value={null}>Choose User</option>
          {users.map((user) => (
            <option
              value={user.id}
              key={user.id}>{`${user.id}. ${user.username}`}</option>
          ))}
        </select>
      </div>
      <div className="flex">
        <button
          type="submit"
          className="text-shade-1 bg-accent hover:bg-highlight hover:text-shade-9 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block ease-in-out duration-300">
          {order ? "Update" : "Add"}
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

export default OrderForm;
