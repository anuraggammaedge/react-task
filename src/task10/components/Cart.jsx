import { useDispatch } from "react-redux";

export const Cart = ({
  cartData,
  removeItemFromCart,
  increment,
  decrement,
}) => {
  const dispatch = useDispatch();
  let priceTotal = 0;

  return (
    <div className="flex flex-col gap-2 m-4 border border-gray-400 p-4 rounded-xl">
      <h2 className="text-2xl font-bold">Cart</h2>
      {cartData.length !== 0 ? (
        <>
          {cartData.map((p, i) => {
            priceTotal += p.quantity * p.productPrice;
            return (
              <>
                <div key={p.productId} className="border-b border-gray-400">
                  <h2 className="text-lg font-bold">{p.productTitle}</h2>
                  <span className="text-md font-semibold mr-2">
                    Price: Rs.{p.productPrice}
                  </span>
                  <div className="font-semibold text-md py-2">Quantity : </div>
                  <div className="flex flex-row gap-3 items-center">
                    <button
                      disabled={p.quantity === 1}
                      onClick={() => dispatch(decrement(p.productId))}
                      className="disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed pb-1 w-8 h-8 rounded-xl flex items-center justify-center font-bold border border-gray-400 bg-gray-300 hover:bg-gray-400 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="text-md font-semibold ">{p.quantity}</span>
                    <button
                      onClick={() => dispatch(increment(p.productId))}
                      className="pb-1 w-8 h-8 rounded-xl flex items-center justify-center font-bold border border-gray-400 bg-gray-300 hover:bg-gray-400 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => dispatch(removeItemFromCart(p.productId))}
                      className=" cursor-pointer text-white bg-red-400 hover:bg-red-500 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                    >
                      Remove from Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
          <div className="py-4 font-semibold text-lg">
            Total Amount : Rs.{priceTotal}{" "}
          </div>
        </>
      ) : (
        <div className="text-lg font-semibold">
          Your Card is empty. Please add items!
        </div>
      )}
    </div>
  );
};
