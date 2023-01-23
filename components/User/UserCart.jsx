import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Pagination } from "../../components";
import { PlusIcon, MinusIcon } from "../icons";
import { formatToUSD } from "../helperFuncs";
import {
  changeLineItemQty,
  changeQuantityLocally,
  removeLineItem,
  removeItemLocally,
} from "../../redux/features/authSlice";

const UserCart = ({ cart, title, images, controls, orders }) => {
  const dispatch = useDispatch();
  //PAGINATION
  const [currPage, setCurrPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const indexOfLastPost = currPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currSlice = cart?.slice(indexOfFirstPost, indexOfLastPost);

  const adjustQty = (addOrSub, item) => {
    if (addOrSub) {
      return (
        <button
          onClick={() => {
            if (orders.length) {
              if (item.qty < item.vinyl.stock) {
                dispatch(
                  changeLineItemQty({
                    id: item.id,
                    qty: item.qty + 1,
                  })
                );
              }
            } else {
              dispatch(
                changeQuantityLocally({
                  id: item.vinyl.id,
                  qty: item.qty + 1,
                  vinyl: item.vinyl,
                })
              );
            }
          }}
          className="px-2 bg-shade-7 opacity-50 hover:opacity-100 hover:bg-accent ease-in-out duration-300 peer">
          <PlusIcon twClass="w-2 fill-shade-2" />
        </button>
      );
    }
    return (
      <button
        onClick={() => {
          if (orders.length) {
            if (item.qty - 1 < 1) {
              dispatch(removeLineItem(item.id));
            } else {
              dispatch(
                changeLineItemQty({
                  id: item.id,
                  qty: item.qty - 1,
                })
              );
            }
          } else {
            if (item.qty - 1 < 1) {
              dispatch(removeItemLocally(item.vinyl));
            } else {
              dispatch(
                changeQuantityLocally({
                  id: item.vinyl.id,
                  qty: item.qty - 1,
                  vinyl: item.vinyl,
                })
              );
            }
          }
        }}
        className="px-2 bg-shade-7 opacity-50 hover:opacity-100 hover:bg-accent ease-in-out duration-300">
        <MinusIcon twClass="w-2 fill-shade-2" />
      </button>
    );
  };

  return (
    <div
      id="userCart"
      className="w-full max-w-md p-10 bg-shade-9 rounded-lg shadow-md sm:p-8">
      {title ? (
        <h5 className="text-xl pb-5 font-bold leading-none text-shade-1">
          Your Cart
        </h5>
      ) : (
        <></>
      )}
      <ul className="w-full sm:max-w-sm divide-y-2 divide-accent divide-opacity-40">
        {currSlice?.map((item, i) => {
          return (
            <li className="py-2" key={item?.id || i}>
              <div className="flex items-center space-x-4">
                {images && (
                  <Link
                    href={`/shop/${item.vinyl.id}`}
                    className="flex-shrink-0 border-highlight border p-1 border-opacity-50 hover:border-opacity-100 rounded-full cursor-pointer ease-in-out duration-300 group">
                    <Image
                      src={item?.vinyl.img}
                      alt="vinyl-image"
                      className="w-8 h-8 rounded-full opacity-50 group-hover:opacity-100 ease-in-out duration-300"
                      width={32}
                      height={32}
                      priority
                    />
                  </Link>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-shade-1 truncate hover:text-sec ease-in-out duration-300">
                    <Link href={`/shop/${item.vinyl.id}`}>
                      {`${item?.vinyl.name} by ${item?.vinyl.artist.name}`}
                    </Link>
                  </p>

                  <div className="flex gap-3 py-1">
                    <p className="text-sm text-shade-5 truncate">
                      {`qty: ${item?.qty}`}
                    </p>
                    {controls ? (
                      <>
                        {adjustQty(0, item)}
                        {adjustQty(1, item)}
                      </>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-shade-1">
                  {`$${formatToUSD(item?.vinyl.price * item?.qty)}`}
                </div>
              </div>
            </li>
          );
        })}
        <li>
          {cart?.length ? (
            <h5 className="text-xl text-center py-5 font-bold leading-none text-shade-1">
              {currSlice?.length &&
                `Total: $${formatToUSD(
                  cart.reduce(
                    (acc, lineItem) =>
                      (acc += lineItem.vinyl.price * lineItem.qty),
                    0
                  )
                )}`}
            </h5>
          ) : (
            ""
          )}
        </li>
      </ul>

      {currSlice?.length ? (
        <Pagination
          itemsPerPage={itemsPerPage}
          total={cart.length}
          setPage={setCurrPage}
          currPage={currPage}
        />
      ) : (
        <p className="text-shade-5">Cart Empty.</p>
      )}
    </div>
  );
};

export default UserCart;
