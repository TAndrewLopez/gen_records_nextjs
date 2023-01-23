import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  Header,
  Footer,
  OrderHistory,
  UserCart,
  UserProfileCard,
  UserProfileForm,
  ToastNotification,
} from "../../components";
import { clearToast } from "../../redux/features/authSlice";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    firstName,
    lastName,
    username,
    email,
    cart,
    orders,
    img,
    error,
    message,
    loggedIn,
  } = useSelector((state) => state.authReducer);

  if (!loggedIn) {
    router.push("/auth");
  }

  useEffect(() => {
    if (message) {
      dispatch(clearToast());
    }
  }, []);

  return (
    <>
      <Head>
        <title>Profile Page</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="h-screen w-full flex flex-col">
        <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
        <div className="flex-1 bg-shade-7">
          <div className="flex-1 bg-shade-7">
            <div className="flex flex-col sm:flex-row p-5 gap-5">
              <div className="flex flex-1 flex-col items-center gap-5">
                <UserProfileCard
                  user={{ firstName, lastName, username, email, img }}
                />
                <OrderHistory />
                <UserCart orders={orders} cart={cart} controls title images />
              </div>
              <div className="flex flex-1 flex-col items-center gap-5">
                <UserProfileForm />
              </div>
            </div>
          </div>
        </div>
        <Footer twClass={"p-5 text-white flex justify-center bg-shade-9"} />{" "}
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
      </div>
    </>
  );
};

export default ProfilePage;
