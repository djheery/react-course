import React, { useContext, useState } from "react";
import classes from './Cart.module.css'
import Modal from '../UI/Modal/Modal'
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [aboutToOrder, setAboutToOrder]= useState(false);
 
  const aboutToOrderHandler = () => {
    setAboutToOrder(prevState => !prevState)
  }

  const totalAmt = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItem = cartCtx.items.length > 0

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id)
  };
  const cartItemAddHandler = item => {
    cartCtx.addItem({...item, amount:1})
  };

  const orderHandler = item => {

  }

  const cartItems = (
  <ul className={classes['cart-item']}>{
    cartCtx.items.map(item => (
      <CartItem key={item.id} 
                name={item.name} 
                amount={item.amount} 
                price={item.price} 
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}</ul>);

  const modalActions =  <div className={classes.actions}>
  <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
  {hasItem && <button onClick={aboutToOrderHandler} className={classes.button}>Order</button>}
</div>

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmt}</span>
      </div>
      {aboutToOrder && <Checkout onCancel={props.onClose}/>}
      {!aboutToOrder && modalActions}
    </Modal>
  )
}

export default Cart;