import { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { Pagination } from "../../components";
import { PlusIcon, MinusIcon } from "../assets";
import { formatToUSD } from "../helperFuncs";
import {
  changeLineItemQty,
  changeQuantityLocally,
  removeLineItem,
  removeItemLocally,
} from "../../redux/features/authSlice";

const UserCart = () => {
  return <div>User Cart</div>;
};

export default UserCart;
