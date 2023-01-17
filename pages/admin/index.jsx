import { useEffect } from "react";
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
} from "../../components";

import { SpinnerLoader } from "../../components/assets";
import { getAdminContent } from "../../redux/features/adminSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const { users, vinyls, artists, orders, isLoading } = useSelector(
    (state) => state.adminReducer
  );

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
              element={<ArtistsTable artists={artists} />}
            />
            <Accordion name="Line Items" element={<LineItemsTable />} />
            <Accordion
              name="Orders"
              element={<OrdersTable orders={orders} />}
            />
            <Accordion name="Tracks" element={<TracksTable />} />
            <Accordion name="Users" element={<UsersTable users={users} />} />
            <Accordion
              name="Vinyls"
              element={<VinylsTable vinyls={vinyls} />}
            />
            {/* <Accordion data={users} />
            <Accordion data={orders} />
            <Accordion data={artists} /> */}
          </div>
        )}
      </div>
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
    </div>
  );
};

export default Admin;
