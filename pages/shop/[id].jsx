import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
//COMPONENTS
import {
  Header,
  Footer,
  DetailedVinylCard,
  TrackList,
  ToastNotification,
} from "../../components";
import { SpinnerLoader } from "../../components/assets";
import { getSingleVinyl } from "../../redux/features/shopSlice";
import { clearToast } from "../../redux/features/authSlice";

const SingleVinylPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  const {
    shopReducer: { singleVinyl },
    authReducer: { cart, error, message },
  } = useSelector((state) => state);

  useEffect(() => {
    if (id) {
      dispatch(getSingleVinyl(id));
    }
  }, [id]);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />

      <div className="flex-1 flex flex-col justify-center bg-shade-7 ">
        {singleVinyl?.id ? (
          <>
            <DetailedVinylCard singleVinyl={singleVinyl} cart={cart} />
            <TrackList vinyl={singleVinyl} />
          </>
        ) : (
          <div className="flex flex-1 items-center justify-center">
            <SpinnerLoader />
          </div>
        )}
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
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />
    </div>
  );
};

export default SingleVinylPage;
