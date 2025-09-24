import React from "react";
import { debounce } from "./debounce.js";

export const SeventhTask = () => {
  const fetchData = () => {
    console.log(value);
    console.log("Debounced API Called ");
  };
  const debouncedSearch = debounce(fetchData, 1000);
  const handleInputChange = (e) => {
    const value = e.target.value;
    console.log(value);
    debouncedSearch(value);
  };
  return (
    <>
      <h2 className="mx-4 font-bold text-lg">Search Debounced Input:</h2>
      <form className="max-w-md m-4">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search Input ..."
            required
            onChange={handleInputChange}
          />
        </div>
      </form>
    </>
  );
};
