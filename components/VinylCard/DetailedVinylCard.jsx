import { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { formatToUSD } from "../helperFuncs";
import { CartIcon } from "../assets";
import {
  addLineItem,
  removeLineItem,
  addItemLocally,
  removeItemLocally,
  changeLineItemQty,
  changeQuantityLocally,
} from "../../redux/features/authSlice";

const DetailedVinylCard = ({ singleVinyl, cart }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { orders } = useSelector((state) => state.authReducer);
  const [lineItem] = cart.filter((item) => item?.vinyl.id === singleVinyl?.id);
  const [userQuantity, setUserQuantity] = useState(0);

  useEffect(() => {
    if (lineItem?.qty) {
      setUserQuantity(lineItem?.qty);
    } else {
      setUserQuantity(1);
    }
  }, [lineItem]);

  const date = new Date();
  date.setDate(date.getDate() + 7);

  const AddRemoveLineItemButton = (add, id) => {
    return (
      <>
        <button
          onClick={
            add
              ? () => {
                  if (orders.length) {
                    dispatch(addLineItem(id));
                  } else {
                    dispatch(addItemLocally(singleVinyl));
                  }
                }
              : () => {
                  if (orders.length) {
                    dispatch(removeLineItem(id));
                  } else {
                    dispatch(removeItemLocally(singleVinyl));
                  }
                }
          }
          className={`flex items-center justify-center gap-5 px-6 py-2 rounded hover:text-shade-9 hover:bg-highlight group ease-in-out duration-300 cursor-pointer ${
            add ? "text-shade-1 bg-accent" : "text-accent bg-shade-8"
          }`}>
          <CartIcon
            twClass={`w-4 group-hover:fill-shade-9 ease-in-out duration-300 ${
              add ? "fill-shade-1" : "fill-accent"
            }`}
          />
          {add ? "Add to Cart" : "Remove from Cart"}
        </button>

        {add ? (
          <></>
        ) : (
          <div className="flex my-2.5">
            <div className="relative">
              <input
                type="text"
                id="floating_outlined"
                className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-shade-1 text-center rounded-lg border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 bg-shade-8 peer"
                placeholder=" "
                onChange={(evt) => setUserQuantity(Number(evt.target.value))}
                value={userQuantity}
              />
              <label
                htmlFor="floating_outlined"
                className="absolute text-sm text-accent rounded duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-shade-9 px-2 peer-focus:px-2 peer-focus:text-highlight peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                Quantity
              </label>
            </div>
            <button
              onClick={() => {
                if (orders.length) {
                  dispatch(
                    changeLineItemQty({ id: lineItem.id, qty: userQuantity })
                  );
                } else {
                  dispatch(
                    changeQuantityLocally({
                      id: singleVinyl.id,
                      qty: userQuantity,
                    })
                  );
                }
              }}
              className="flex-1 flex items-center justify-center ml-3 px-6 py-2 rounded hover:text-shade-9 hover:bg-highlight group ease-in-out duration-300 cursor-pointer text-shade-1 bg-accent">
              Update
            </button>
          </div>
        )}
      </>
    );
  };

  return (
    <div className="flex sm:gap-5 flex-col sm:flex-row mx-5 p-5 rounded-lg">
      <div className="flex-1 relative flex items-center justify-center">
        <button
          onClick={() => {
            router.back();
          }}
          className="absolute top-3 left-0 px-6 py-2 rounded-r text-shade-1 hover:text-shade-9 bg-shade-9 hover:bg-highlight ease-in-out duration-300">
          Back
        </button>
        <Image
          className="object-cover w-full sm:max-w-2xl"
          src={singleVinyl?.img}
          width={400}
          height={400}
          alt="vinyl-image"
          priority
        />
      </div>
      <div className="flex-1 flex items-center">
        <div className="w-full flex gap-2.5 flex-col">
          <h5 className="max-w-full text-xl md:text-3xl font-bold tracking-tight text-shade-1 break-words">
            {singleVinyl?.name}
          </h5>
          <h6 className="text-4xl font-normal tracking-tight text-shade-5">
            {singleVinyl?.artist.name}
          </h6>
          <p className="text-2xl font-normal text-shade-1">
            {`$${formatToUSD(singleVinyl?.price)}`}
          </p>
          {/* FIXME USE COMPONENTS AND DON'T CALL FUNCTION */}
          <p className="text-shade-1 font-light text-sm">{`Ships on ${date.toDateString()}`}</p>
          {cart?.some((item) => item?.vinyl.id === singleVinyl?.id)
            ? AddRemoveLineItemButton(false, lineItem?.id)
            : AddRemoveLineItemButton(true, singleVinyl?.id)}

          <div>
            <h6 className="text-shade-4 font-semibold">Additional Details:</h6>
            <p className="text-shade-1 font-light">{`Stock: ${singleVinyl?.stock}`}</p>
            <p className="text-shade-1 font-light">{`Release Date: ${singleVinyl?.releaseDate}`}</p>
            <p className="text-shade-1 font-light">{`Label: ${singleVinyl?.label}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedVinylCard;
