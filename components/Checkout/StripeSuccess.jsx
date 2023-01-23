import { useRouter } from "next/router";
import { CheckIcon } from "../icons";

const StripeSuccess = () => {
  const router = useRouter();
  return (
    <div className="sm:max-w-xl rounded flex flex-col items-center bg-shade-2 p-5 m-auto shadow-xl text-center">
      <CheckIcon twClass={"w-12 fill-green-600"} />
      <h4 className="text-green-600 font-semibold text-2xl">
        Thank you for your payment!
      </h4>
      <span className="h-5 sm:h-10"></span>
      <p className="font-light">
        A receipt for the transaction has been sent via email for your records.
      </p>
      <span className="h-2"></span>
      <button
        onClick={() => router.push("/shop")}
        className="md:w-32 mt-2 px-6 py-2 rounded bg-accent text-shade-1 hover:bg-highlight hover:text-shade-9 duration-300 ease-in-out">
        Shop
      </button>
    </div>
  );
};

export default StripeSuccess;
