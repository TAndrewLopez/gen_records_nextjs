import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { Header, Footer, AdminVinylForm } from "../../components";
import { getSingleVinyl } from "../../redux/features/shopSlice";

const AdminSingleVinyl = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const {
    shopReducer: { singleVinyl },
  } = useSelector((state) => state);

  useEffect(() => {
    if (id) {
      dispatch(getSingleVinyl(id));
    }
  }, [id]);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />

      <div className="flex-1 bg-shade-7 flex flex-col sm:flex-row items-center justify-evenly">
        {singleVinyl && (
          <>
            <div className="relative m-5 flex flex-col sm:flex-row justify-evenly gap-5 sm:gap-0">
              <button
                onClick={() => {
                  router.back();
                }}
                className="absolute top-3 left-0 px-6 py-2 rounded-r text-shade-1 hover:text-shade-9 bg-shade-9 hover:bg-highlight ease-in-out duration-300">
                Back
              </button>
              <img
                className="object-cover w-full sm:max-w-lg"
                src={singleVinyl?.img}
                alt="vinyl-image"
              />
            </div>
            <div className="m-5 flex justify-evenly">
              <AdminVinylForm vinyl={singleVinyl} />
            </div>
          </>
        )}
      </div>

      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />
    </div>
  );
};

export default AdminSingleVinyl;

/*
 <div className="flex flex-1 items-center justify-center">
            <SpinnerLoader />
          </div>
*/
