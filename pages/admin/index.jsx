import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Footer,
  AdminSubHeader,
  AdminAccordion,
  AdminVinylTable,
  AdminUserTable,
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
        <AdminSubHeader />
        {isLoading ? (
          <div className="flex flex-1 items-center justify-center">
            <SpinnerLoader />
          </div>
        ) : (
          <div className="flex-1 m-5 space-y-3">
            <AdminAccordion
              name="Vinyls"
              element={<AdminVinylTable vinyls={vinyls} />}
            />
            <AdminAccordion
              name="Users"
              element={<AdminUserTable users={users} />}
            />
            {/* <AdminAccordion data={users} />
            <AdminAccordion data={orders} />
            <AdminAccordion data={artists} /> */}
          </div>
        )}
      </div>
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
    </div>
  );
};

export default Admin;
