import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const LineItemForm = ({ lineItem }) => {
  const { vinyls, orders } = useSelector((state) => state.adminReducer);

  const [form, setForm] = useState({
    id: "",
    qty: "",
    orderId: "",
    vinylId: "",
  });

  useEffect(() => {
    if (lineItem) {
      setForm({
        id: lineItem.id,
        qty: lineItem.qty,
        orderId: lineItem.orderId,
        vinylId: lineItem.vinylId,
      });
    }
  }, [lineItem]);

  return (
    <form action="#" className="mb-6">
      <div className="mb-6">
        <label
          htmlFor="quantity"
          className="block mb-2 text-sm font-medium text-shade-5">
          Quantity
        </label>
        <input
          id="quantity"
          className="bg-shade-1 border border-shade-5 text-shade-9 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Quantity"
          required
          value={form.qty}
          onChange={(evt) => {
            setForm({ ...form, qty: evt.target.value });
          }}
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="order_id"
          className="block mb-2 text-sm font-medium text-shade-5">
          Order ID
        </label>
        <select
          id="order_id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={form.vinylId}
          onChange={(evt) => {
            setForm({ ...form, orderId: evt.target.value });
          }}>
          <option value={null}>Choose Order</option>
          {orders.map((order) => (
            <option
              value={order.id}
              key={order.id}>{`${order.id}. ${order.user.username}`}</option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label
          htmlFor="vinyl_id"
          className="block mb-2 text-sm font-medium text-shade-5">
          Vinyl ID
        </label>
        <select
          id="vinyl_id"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          value={form.vinylId}
          onChange={(evt) => {
            setForm({ ...form, vinylId: evt.target.value });
          }}>
          <option value={null}>Choose vinyl</option>
          {vinyls.map((vinyl) => (
            <option
              value={vinyl.id}
              key={vinyl.id}>{`${vinyl.id}. ${vinyl.name}`}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="text-shade-1 bg-accent hover:bg-highlight hover:text-shade-9 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none block ease-in-out duration-300">
        {lineItem ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default LineItemForm;
