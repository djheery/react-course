import React from "react";
import { useReducer } from 'react'
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === 'ADD_ITEM') {
    const newTotalAmount = state.totalAmount + action.item.price * action.item.amount;

    const existingCardItemIndex = state.items.findIndex(item => item.id === action.item.id);

    const existingCartItem = state.items[existingCardItemIndex];
    let updatedItems;
    
    if(existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem
    } else {
      updatedItems = state.items.concat(action.item)
    }

    return {
      items: updatedItems,
      totalAmount: newTotalAmount
    }
  } 

  if(action.type === 'REMOVE_ITEM') {
    const existingCardItemIndex = state.items.findIndex(item => item.id === action.item);
    
    const existingItem = state.items[existingCardItemIndex];
    const updatedTotalAmount = (state.totalAmount - existingItem.price) < 0 ? 0 : state.totalAmount - existingItem.price;
    let updatedItems;
    if(existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.item);
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1}
      updatedItems = [...state.items];
      updatedItems[existingCardItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    }
  }

  return defaultCartState
}

const CartProvider = props => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({type: 'ADD_ITEM', item: item});
  }

  const removeItemFromCartHandler = id => {
    dispatchCartAction({type: 'REMOVE_ITEM', item: id})
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler 
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;