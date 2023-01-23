import Head from "next/head";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import {
  Header,
  Footer,
  DetailedVinylCard,
  TrackList,
  ToastNotification,
  Layout,
} from "../../components";
import { SpinnerLoader } from "../../components/icons";
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
    <Layout>
      <Head>
        <title>Shop</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Single Vinyl view for Generational Records"
        />
      </Head>
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
    </Layout>
  );
};

export default SingleVinylPage;
