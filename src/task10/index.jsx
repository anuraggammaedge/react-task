import { useSelector } from "react-redux";
import {
  addItemToCart,
  removeItemFromCart,
  increment,
  decrement,
} from "./reduxSlice/cartSlice";
import { Products } from "./components/Products";
import { productData } from "./data.js";
import { Cart } from "./components/Cart.jsx";

const Tenthtask = () => {
  let cart = useSelector((state) => state.cart);

  return (
    <div>
      <Products
        productData={productData}
        addItemTocart={addItemToCart}
        removeItemFromCart={removeItemFromCart}
      />
      <Cart
        cartData={cart}
        removeItemFromCart={removeItemFromCart}
        increment={increment}
        decrement={decrement}
      />
    </div>
  );
};

export default Tenthtask;
