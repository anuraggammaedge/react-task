import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./task10/reduxSlice/cartSlice";
import { loadState, saveState } from "./task10/localStorage";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  saveState(store.getState());
});
