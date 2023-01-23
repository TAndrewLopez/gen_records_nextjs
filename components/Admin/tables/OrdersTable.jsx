import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModal, Drawer, OrderForm } from "../../../components";
import { deleteOrder } from "../../../redux/features/adminSlice";
import { EditIcon, TrashIcon, SpinnerLoader } from "../../icons";

const OrdersTable = ({ orders }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.adminReducer);

  //DELETE MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = orders.find((order) => order.id === selID);
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
                Complete Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => {
              const color =
                i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
              return (
                <tr className={`${color}`} key={order.id}>
                  <th className="px-6 py-4 text-shade-8">{order.id}</th>
                  <td className="px-6 py-4 text-shade-8">{`${order.complete}`}</td>
                  <td className="px-6 py-4 text-shade-8">{order.createdAt}</td>
                  <td className="px-6 py-4 text-shade-8">
                    {order.user?.username || "guest"}
                  </td>
                  <td className="text-center text-shade-8">
                    <button
                      onClick={() => {
                        setSelID(order.id);
                        setEdit(!edit);
                      }}
                      className="p-3 group ">
                      <EditIcon twClass="w-4 fill-shade-7 group-hover:fill-highlight" />
                    </button>
                    <button
                      onClick={() => {
                        setSelID(order.id);
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
          message={`Order ID #${selection.id} for ${
            selection.user?.username || "guest account"
          }`}
          delItem={() => dispatch(deleteOrder(selection.id))}
        />
      )}
      <Drawer
        formName={"Order Form"}
        edit={edit}
        setEdit={setEdit}
        element={<OrderForm setEdit={setEdit} order={selection} />}
      />
    </div>
  );
};

export default OrdersTable;
