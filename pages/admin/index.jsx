import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Header,
  Footer,
  AdminVinylTable,
  AdminUserTable,
  SubHeader,
} from "../../components";
import { SpinnerLoader } from "../../components/assets";
import { getAdminContent } from "../../redux/features/adminSlice";

const Admin = () => {
  const dispatch = useDispatch();
  const { users, vinyls, artists, isLoading } = useSelector(
    (state) => state.adminReducer
  );

  useEffect(() => {
    if (!users.length || !vinyls.length || artists.length) {
      dispatch(getAdminContent());
    }
  }, []);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 flex flex-col justify-center bg-shade-7">
        <SubHeader />
        {isLoading ? (
          <div className="flex flex-1 items-center justify-center">
            <SpinnerLoader />
          </div>
        ) : (
          <div className="m-5">
            <AdminVinylTable vinyls={vinyls} />
          </div>
        )}
      </div>
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
    </div>
  );
};

export default Admin;
