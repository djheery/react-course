import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.itemsInCart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.length === 0 && <p>There are no Items in your cart</p>}
        {cartItems.length > 0 &&
          cartItems.map((ci) => (
            <CartItem
              item={{
                id: ci.id,
                title: ci.title,
                quantity: ci.quantity,
                total: ci.total,
                price: ci.price,
              }}
            />
          ))}
      </ul>
    </Card>
  );
};

export default Cart;
