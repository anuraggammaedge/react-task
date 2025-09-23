export const Step1 = ({ formState, handleTextChange }) => {
  return (
    <>
      <form action="post" className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="firstName"
            className="text-sm font-semibold ml-1 py-1"
          >
            First Name *
          </label>
          <input
            type="text"
            name="firstName"
            placeholder="Enter a First Name"
            className="border border-gray-500 focus:border-gray-500 focus:outline focus:outline-gray-500 p-2 rounded-xl w-full "
            value={formState.firstName}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-sm font-semibold ml-1 py-1">
            Last Name *
          </label>
          <input
            type="text"
            name="lastName"
            placeholder="Enter a Last Name"
            className="border border-gray-500 focus:border-gray-500 focus:outline focus:outline-gray-500 p-2 rounded-xl w-full "
            value={formState.lastName}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      </form>
    </>
  );
};
