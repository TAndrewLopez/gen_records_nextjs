import { useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import { formatToUSD } from "../helperFuncs";

const StripeCheckoutForm = ({ cart, paid }) => {
  // const stripe = useStripe();
  // const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsProcessing(true);
    paid(true);
    console.log("process payment");
    setIsProcessing(false);
  };

  return (
    <form
      className="text-shade-9 mb-5"
      id="payment-form"
      onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        className={`sm:px-5 px-3 py-2 rounded w-full mt-5 ease-in-out duration-300 cursor-pointer ${
          false
            ? "bg-shade-8 text-accent cursor-default disabled"
            : "bg-accent text-shade-1 hover:bg-highlight hover:text-shade-9"
        }`}
        disabled={isProcessing}
        id="submit">
        {isProcessing
          ? "Processing"
          : `Pay $${formatToUSD(
              cart.reduce(
                (acc, lineItem) => (acc += lineItem.vinyl.price * lineItem.qty),
                0
              )
            )}`}
      </button>
    </form>
  );
};

export default StripeCheckoutForm;

/*
STRIPE CHECKOUT
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!stripe || !elements) {
  //     return;
  //   }
  //   setIsProcessing(true);
  //   const { error } = await stripe.confirmPayment({
  //     elements,
  //     confirmParams: {
  //       return_url: `${window.location.origin}/shop`,
  //     },
  //   });

  //   if (error) {
  //     setMessage(error.message);
  //   }
  //   setIsProcessing(false);
  // };
*/
