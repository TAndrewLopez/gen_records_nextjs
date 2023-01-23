import Head from "next/head";
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
  ToastNotification,
} from "../../components";

import { getAdminContent, clearToast } from "../../redux/features/adminSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const { artists, lineItems, orders, tracks, users, vinyls, error, message } =
    useSelector((state) => state.adminReducer);

  useEffect(() => {
    if (message) {
      dispatch(clearToast());
    }
    dispatch(getAdminContent());
  }, []);

  return (
    <>
      <Head>
        <title>Admin Panel</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen w-full flex flex-col">
        <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
        <div className="flex-1 flex flex-col justify-center bg-shade-7">
          <AdminSubHeader />
          <div className="flex-1 m-5 space-y-3">
            <Accordion
              name="Artists"
              amount={artists.length}
              element={<ArtistsTable artists={artists} />}
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
        </div>
        {message && (
          <ToastNotification
            type={"success"}
            toastMessage={message}
            clear={() => dispatch(clearToast())}
          />
        )}
        {error && message && (
          <ToastNotification
            clear={() => dispatch(clearToast())}
            type="error"
            toastMessage={message}
          />
        )}
        <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
      </div>
    </>
  );
};

export default Admin;
