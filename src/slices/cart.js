import { createSlice } from "@reduxjs/toolkit";

const cart = createSlice({
  initialState: {
    counter: 0,
    cartItem: [],
  },
  name: "cart",
  reducers: {
    updateCartCounter: (state, { payload }) => {
      state.counter += payload;
    },
    addCartItems: (state, { payload }) => {
      if (!state.cartItem.find((item) => item.id === payload.id))
        state.cartItem.push(payload);
    },
    updateCartItems: (state, { payload }) => {
      const targetItem = state.cartItem.find((item) => item.id === payload.id);
      if (targetItem) targetItem.quantity = payload.counter;
    },
    removeCartItem: () => {
      state.cartItem.pop();
    },
  },
});

export const {
  updateCartCounter,
  addCartItems,
  removeCartItem,
  updateCartItems,
} = cart.actions;
export default cart.reducer;
