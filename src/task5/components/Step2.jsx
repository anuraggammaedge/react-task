import React from "react";

export const Step2 = ({ formState, handleTextChange }) => {
  return (
    <>
      <form action="post" className="flex flex-col gap-4 py-2">
        <div>
          <label htmlFor="email" className="text-sm font-semibold ml-1 py-1">
            Email Id *
          </label>
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            className="border border-gray-500 focus:border-gray-500 focus:outline focus:outline-gray-500 p-2 rounded-xl w-full "
            value={formState.email}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div>
          <label
            htmlFor="phonenumber"
            className="text-sm font-semibold ml-1 py-1"
          >
            Phone number *
          </label>
          <input
            type="number"
            name="phonenumber"
            placeholder="Enter Your Phone Number"
            className="border border-gray-500 focus:border-gray-500 focus:outline focus:outline-gray-500 p-2 rounded-xl w-full "
            value={formState.phonenumber}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      </form>
    </>
  );
};
