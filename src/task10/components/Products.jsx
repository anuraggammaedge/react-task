import { useDispatch } from "react-redux";

export const Products = ({ productData, addItemTocart }) => {
  const dispatch = useDispatch();

  return (
    <>
      <h2 className="text-2xl font-bold m-4">Product Lists</h2>
      <div className="flex flex-row gap-4 w-full flex-wrap">
        {productData &&
          productData.map((p, i) => {
            return (
              <div
                key={p.productId}
                className="border border-gray-400 mx-4 p-2 rounded-xl w-56 flex flex-col items-center justify-center shadow-xl"
              >
                <h2 className="text-lg font-bold">{p.productTitle}</h2>
                <p className="text-sm font-normal py-1 text-gray-600">
                  {p.productDescription}
                </p>
                <span className="text-sm font-semibold">
                  Price: Rs.{p.productPrice}
                </span>
                <div className="py-2">
                  <button
                    onClick={() => dispatch(addItemTocart(p))}
                    className=" cursor-pointer text-white bg-blue-400 hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
