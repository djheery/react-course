import React from "react";
import classes from "./CartButton.module.css";
import { uiActions } from "../../store/ui-slice";
import { useSelector, useDispatch } from "react-redux";

const CartButton = (props) => {
  const badgeNum = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  };

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{badgeNum}</span>
    </button>
  );
};

export default CartButton;
