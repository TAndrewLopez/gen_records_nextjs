import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { formatToUSD } from "../../components/helperFuncs";
import {
  Header,
  Footer,
  UserCart,
  StripePayment,
  StripeSuccess,
} from "../../components";

const Checkout = () => {
  const dispatch = useDispatch();
  const { cart, orders } = useSelector((state) => state.authReducer);
  const [paid, setPaid] = useState(false);

  return (
    <div className="h-screen w-full flex flex-col">
      <Header headerClass={"flex text-xl justify-between p-5 bg-shade-9"} />
      <div className="flex-1 bg-shade-7">
        <h1 className="text-center text-5xl my-5 text-shade-1 whitespace-nowrap after:content=[''] after:block after:h-1 after:mt-2 after:m-auto after:max-w-xs after:bg-accent">
          Checkout
        </h1>

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
        {paid ? <StripeSuccess cart={cart} /> : ""}
      </div>
      <Footer twClass={"p-5 text-white flex justify-center bg-shade-9 "} />
    </div>
  );
};

export default Checkout;
