function getRandomID() {
  const min = 1000;
  const max = 9999;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export const productData = [
  {
    productId: getRandomID(),
    productTitle: "Book - 1",
    productDescription: "lorem lorem lorem",
    productPrice: 999,
  },
  {
    productId: getRandomID(),
    productTitle: "Book - 2",
    productDescription: "lorem lorem lorem",
    productPrice: 999,
  },
  {
    productId: getRandomID(),
    productTitle: "Book - 3",
    productDescription: "lorem lorem lorem",
    productPrice: 999,
  },
  {
    productId: getRandomID(),
    productTitle: "Book - 4",
    productDescription: "lorem lorem lorem",
    productPrice: 999,
  },
  {
    productId: getRandomID(),
    productTitle: "Book - 5",
    productDescription: "lorem lorem lorem",
    productPrice: 999,
  },
];
