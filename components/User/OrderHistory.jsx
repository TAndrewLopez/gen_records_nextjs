import { useSelector } from "react-redux";
import { CartSuccess, CartFailure } from "../icons";
import {
  getLocalDateFromOrderDbCreatedDate,
  totalOrderLineItems,
} from "../helperFuncs";

const OrderHistory = () => {
  const { orders } = useSelector((state) => state.authReducer);
  return (
    <div
      id="orderHistory"
      className="w-full max-w-md p-10 bg-shade-9 rounded-lg shadow-md sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-shade-1">
          Order History
        </h5>
        <a className="text-sm font-medium text-accent hover:text-highlight hover:underline ease-in-out duration-300">
          View all
        </a>
      </div>
      <div>
        <ul className="divide-y divide-shade-6">
          {orders.map((order, i) => (
            <li className="py-3 sm:py-4" key={order.id + i}>
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  {order.complete ? (
                    <CartSuccess twClass="w-8 h-8 fill-green-600" />
                  ) : (
                    <CartFailure twClass="w-8 h-8 fill-yellow-400" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-shade-4 truncate">
                    {`Order #${order.id}`}
                    <span className="ml-2 text-xs">
                      {order.lineItems.length > 1
                        ? `(${order.lineItems.length} items)`
                        : `(${order.lineItems.length} item)`}
                    </span>
                  </p>
                  <p className="text-sm text-shade-4 truncate">
                    {getLocalDateFromOrderDbCreatedDate(order.createdAt)}
                  </p>
                </div>
                <div className="inline-flex items-center text-base font-semibold text-shade-4">
                  {totalOrderLineItems(order)}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderHistory;
