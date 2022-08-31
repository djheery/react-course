import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const getCartData = () => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Getting Previous Cart...",
        message: "Getting Previous Cart Data",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-bf88b-default-rtdb.firebaseio.com/cart.json"
      );

      if (!res.ok) throw new Error("Something went Wrong");

      const resData = await res.json();
      return resData;
    };

    try {
      const resData = await sendRequest();
      dispatch(cartActions.replaceCart(resData));
      dispatch(
        uiActions.showNotification({
          status: "Success",
          title: "Cart Populated",
          message: "Big boi has a cart full of poo",
        })
      );
    } catch (err) {
      console.log(err);
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Error you mad man",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: "pending",
        title: "Sending...",
        message: "Sending Cart Data!",
      })
    );

    const sendRequest = async () => {
      const res = await fetch(
        "https://react-http-bf88b-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );

      if (!res.ok) throw new Error("Something went Wrong");
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotification({
          status: "success",
          title: "Success!",
          message: "Cart Successfully Sent!",
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error",
          message: "Error you mad man",
        })
      );
    }
  };
};
