import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Footer,
  AdminSubHeader,
  Accordion,
  ArtistsTable,
  LineItemsTable,
  VinylsTable,
  UsersTable,
  OrdersTable,
  TracksTable,
  Drawer,
} from "../../components";

import { SpinnerLoader } from "../../components/assets";
import { getAdminContent } from "../../redux/features/adminSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const { artists, lineItems, orders, tracks, users, vinyls, isLoading } =
    useSelector((state) => state.adminReducer);

  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (!users.length || !vinyls.length || !artists.length || !orders.length) {
      dispatch(getAdminContent());
    }
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 flex flex-col justify-center bg-shade-7">
        {/* <AdminSubHeader /> */}
        {isLoading ? (
          <div className="flex flex-1 items-center justify-center">
            <SpinnerLoader />
          </div>
        ) : (
          <div className="flex-1 m-5 space-y-3">
            <Accordion
              name="Artists"
              amount={artists.length}
              element={<ArtistsTable artists={artists} edit={setEdit} />}
            />
            <Accordion
              name="Line Items"
              amount={lineItems.length}
              element={<LineItemsTable lineItems={lineItems} />}
            />
            <Accordion
              name="Orders"
              amount={orders.length}
              element={<OrdersTable orders={orders} />}
            />
            <Accordion
              name="Tracks"
              amount={tracks.length}
              element={<TracksTable tracks={tracks} />}
            />
            <Accordion
              name="Users"
              amount={users.length}
              element={<UsersTable users={users} />}
            />
            <Accordion
              name="Vinyls"
              amount={vinyls.length}
              element={<VinylsTable vinyls={vinyls} />}
            />
          </div>
        )}
      </div>
      <Drawer edit={edit} setEdit={setEdit} />
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
    </div>
  );
};

export default Admin;
