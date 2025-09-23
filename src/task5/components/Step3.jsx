export const Step3 = ({ formState, handleTextChange }) => {
  return (
    <>
      <form action="post" className="flex flex-col gap-4 py-2">
        <div>
          <label htmlFor="username" className="text-sm font-semibold ml-1 py-1">
            Username*
          </label>
          <input
            type="text"
            name="username"
            placeholder="Enter your Username"
            className="border border-gray-500 focus:border-gray-500 focus:outline focus:outline-gray-500 p-2 rounded-xl w-full "
            value={formState.username}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-semibold ml-1 py-1">
            password
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter Your password"
            className="border border-gray-500 focus:border-gray-500 focus:outline focus:outline-gray-500 p-2 rounded-xl w-full "
            value={formState.password}
            onChange={(e) => handleTextChange(e)}
          />
        </div>
      </form>
    </>
  );
};
