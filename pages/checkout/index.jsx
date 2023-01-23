import Head from "next/head";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import {
  Header,
  Footer,
  UserCart,
  StripePayment,
  StripeSuccess,
  Layout,
} from "../../components";
import { SpinnerLoader } from "../../components/icons";
import { clearToast } from "../../redux/features/authSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart, orders, message, loading } = useSelector(
    (state) => state.authReducer
  );
  const [paid, setPaid] = useState(false);
  useEffect(() => {
    if (message) {
      dispatch(clearToast());
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Checkout</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Checkout page for Generational Records"
        />
      </Head>
      <div className="h-screen w-full flex flex-col">
        <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
        <div className="flex-1 bg-shade-7">
          <h1 className="text-center text-5xl my-5 text-shade-1 whitespace-nowrap after:content=[''] after:block after:h-1 after:mt-2 after:m-auto after:max-w-xs after:bg-accent">
            Checkout
          </h1>

          {loading ? (
            <div className="flex flex-1 items-center justify-center">
              <SpinnerLoader />
            </div>
          ) : (
            <>
              {cart.length && !paid ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-0">
                  <div className="rounded m-5 p-5">
                    <UserCart orders={orders} cart={cart} controls images />
                  </div>
                  <div className="bg-shade-2 rounded m-5 p-5">
                    <StripePayment cart={cart} paid={setPaid} />
                  </div>
                </div>
              ) : (
                ""
              )}
              {!cart.length && !paid ? (
                <div className="text-shade-1 text-xl flex flex-col justify-center items-center">
                  <span className="h-3"></span>
                  <p>Cart is empty. </p>
                  <span className="h-5"></span>
                  <div>
                    <Link
                      href={"/shop"}
                      className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-shade-1 bg-accent rounded-lg hover:bg-highlight hover:text-shade-9 focus:ring-4 focus:ring-blue-300 ease-in-out duration-300">
                      Explore Vinyls
                      <svg
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              ) : (
                ""
              )}

              {paid && <StripeSuccess />}
            </>
          )}
        </div>
        <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />
      </div>
    </Layout>
  );
};

export default Checkout;
