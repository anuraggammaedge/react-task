import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const cartValue = { ...action.payload, quantity: 1 };
      const isExisited = state.some((p) => p.productId === cartValue.productId);
      if (isExisited) {
        return state.map((e) => {
          if (e.productId === cartValue.productId) {
            return { ...e, quantity: e.quantity + 1 };
          }
          return { ...e };
        });
      } else {
        state.push(cartValue);
      }
    },
    removeItemFromCart: (state, action) => {
      return state.filter((p) => p.productId !== action.payload);
    },

    increment: (state, action) => {
      const isExisited = state.some((p) => p.productId === action.payload);
      if (isExisited) {
        return state.map((e) => {
          if (e.productId === action.payload) {
            return { ...e, quantity: e.quantity + 1 };
          }
          return { ...e };
        });
      }
    },
    decrement: (state, action) => {
      const isExisited = state.some((p) => p.productId === action.payload);
      if (isExisited) {
        return state.map((e) => {
          if (e.productId === action.payload) {
            return { ...e, quantity: e.quantity - 1 };
          }
          return { ...e };
        });
      }
    },
  },
});

export const { addItemToCart, removeItemFromCart, increment, decrement } =
  cartSlice.actions;

export default cartSlice.reducer;
