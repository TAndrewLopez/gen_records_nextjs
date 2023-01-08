import "@stripe/stripe-js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  me,
  getUserOrders,
  getLocalOrder,
} from "../../redux/features/authSlice";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.authReducer);

  useEffect(() => {
    const authorization = localStorage.getItem("authorization");
    if (authorization) {
      dispatch(me(authorization));
    } else {
      dispatch(getLocalOrder());
    }
  }, []);

  // FIXME: LINE ITEMS AREN'T ASSOCIATED?
  useEffect(() => {
    if (id) {
      dispatch(getUserOrders(id));
    }
  }, [id]);

  return <div>{children}</div>;
};

export default Layout;
