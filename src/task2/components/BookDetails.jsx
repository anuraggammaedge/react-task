import React, { memo } from "react";

export const BookDetails = memo(({ book }) => {
  return (
    <div className="border border-gray-300 shadow-2xs rounded-xl m-2 py-2">
      <h2 className="p-2 font-bold text-lg">
        Book: {book.volumeInfo.title} - {book.volumeInfo.subtitle}
      </h2>
      <div className="px-4">
        <img src={book.volumeInfo.imageLinks.thumbnail} alt="book Img" />
      </div>
      <p className="px-4 py-2 text-sm">{book.volumeInfo.description}</p>
      <div className="px-4">
        <a
          href={book.selfLink}
          target="_blank"
          className="underline text-blue-600 cursor-pointer hover:text-blue-500"
        >
          Buy a Book
        </a>
      </div>
    </div>
  );
});
