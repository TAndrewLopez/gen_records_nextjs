import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DeleteModal, Drawer, LineItemForm } from "../../../components";
import { deleteLineItem } from "../../../redux/features/adminSlice";
import { EditIcon, TrashIcon, SpinnerLoader } from "../../assets";

const LineItemsTable = ({ lineItems }) => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.adminReducer);

  //DELETE MODAL STATE
  const [showModal, setShowModal] = useState(false);
  const [selID, setSelID] = useState(-1);
  const selection = lineItems?.find((item) => item.id === selID);
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
                Vinyl Name
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Order ID
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {lineItems?.map((item, i) => {
              const color =
                i % 2 ? "bg-shade-5 border-b" : "border-b bg-shade-4";
              return (
                <tr className={`${color}`} key={item.id}>
                  <th className="px-6 py-4 text-shade-8">{item.id}</th>
                  <td className="px-6 py-4 text-shade-8">{item.vinyl?.name}</td>
                  <td className="px-6 py-4 text-shade-8">{item.qty}</td>
                  <td className="px-6 py-4 text-shade-8">{item.order?.id}</td>
                  <td className="text-center text-shade-8">
                    <button
                      onClick={() => {
                        setSelID(item.id);
                        setEdit(!edit);
                      }}
                      className="p-3 group ">
                      <EditIcon twClass="w-4 fill-shade-7 group-hover:fill-highlight" />
                    </button>
                    <button
                      onClick={() => {
                        setSelID(item.id);
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
          message={`Line Item ID #${selection.id} for Order #${selection.order.id}`}
          delItem={() => dispatch(deleteLineItem(selection.id))}
        />
      )}

      <Drawer
        formName={"Line Item Form"}
        edit={edit}
        setEdit={setEdit}
        element={<LineItemForm setEdit={setEdit} lineItem={selection} />}
      />
    </div>
  );
};

export default LineItemsTable;
