import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";
const initialState = {
  itemsInCart: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart_state",
  initialState: initialState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItem(state, action) {
      console.log(action.payload);
      const item = action.payload;
      const existingItem = state.itemsInCart.find((i) => i.id === item.id);
      state.totalQuantity++;
      console.log(existingItem);
      if (existingItem) {
        existingItem.total = existingItem.total + item.price;
        existingItem.quantity++;
      } else {
        state.itemsInCart.push({
          id: item.id,
          price: item.price,
          quantity: 1,
          total: item.price,
          title: item.title,
        });
      }
    },
    removeItem(state, action) {
      const id = action.payload;
      const existingItem = state.itemsInCart.find((i) => i.id === id);
      state.totalQuantity--;
      if (existingItem.quantity === 1) {
        state.itemsInCart = state.itemsInCart.filter((item) => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.total = existingItem.total - existingItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
