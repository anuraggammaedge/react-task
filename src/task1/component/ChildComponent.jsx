import React from "react";

export const ChildComponent = () => {
  const data = {
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vero.",
  };
  return (
    <div className="p-4 border border-gray-400 m-4 w-1/2 rounded-xl">
      <h2 className="font-bold">Child Component :</h2>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};
