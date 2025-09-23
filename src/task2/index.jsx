import React, { useState, useEffect, useMemo, useCallback, memo } from "react";
import { getApiData, url } from "./data.js";
import { BookDetails } from "./components/BookDetails.jsx";

export const SecondTask = () => {
  const [bookData, setBookData] = useState([]);

  async function fetchData() {
    const response = await getApiData(url);
    console.log(response.data.data);
    setBookData(response.data.data);
  }
  const cachedFn = useCallback(fetchData, [bookData]);

  useEffect(() => {
    cachedFn();
  }, []);

  const publiclyAvailable = useMemo(
    () => bookData.filter((book) => book.accessInfo.embeddable === false),
    [bookData]
  );

  return (
    <>
      <div className="p-2 font-bold text-lg">Second Task</div>
      <div>
        {bookData &&
          bookData.map((book, i) => {
            return <BookDetails key={book.id} book={book} />;
          })}
        <div className="p-2 font-bold text-lg">Other Embeddable books</div>
        {bookData &&
          publiclyAvailable.map((book, i) => {
            return <BookDetails key={book.id} book={book} />;
          })}
      </div>
    </>
  );
};
