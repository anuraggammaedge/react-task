import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  Profiler,
} from "react";
import { getApiData, url } from "./data.js";
import { BookDetails } from "./components/BookDetails.jsx";

export default function SecondTask() {
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

  function onRender(id, phase, actualDuration, baseDuration, startTime) {
    console.log(
      `id : ${id}, phase : ${phase}, startTime : ${actualDuration}, baseDuration : ${baseDuration}, actualDuration : ${startTime}`
    );
  }

  return (
    <>
      <Profiler id="task2" onRender={onRender}>
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
      </Profiler>
    </>
  );
}
