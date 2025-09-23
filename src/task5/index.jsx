import { useState, useReducer } from "react";
import { Step1 } from "./components/step1";
import { Step2 } from "./components/Step2";
import { Step3 } from "./components/Step3";
import { formReducer, initialFormState } from "./reducer.js";

export const FifthTask = () => {
  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep((s) => s + 1);
  };
  const handlePrev = () => {
    if (step > 0) {
      setStep((s) => s - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    console.log("Form submitted");
  };
  const handleTextChange = (e) => {
    dispatch({
      type: "HANDLE INPUT TEXT",
      field: e.target.name,
      payload: e.target.value,
    });
  };
  return (
    <div className="border border-gray-400 rounded-xl m-4 p-4 w-1/2">
      {step === 1 && (
        <Step1 formState={formState} handleTextChange={handleTextChange} />
      )}
      {step === 2 && (
        <Step2 formState={formState} handleTextChange={handleTextChange} />
      )}
      {step === 3 && (
        <Step3 formState={formState} handleTextChange={handleTextChange} />
      )}

      <div className="flex gap-2 pt-4 justify-end">
        <button
          disabled={step === 1}
          onClick={handlePrev}
          className="disabled:border-gray-500 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed cursor-pointer text-gray-900 border border-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Prev
        </button>
        {step === 3 ? (
          <button
            onClick={handleSubmit}
            className="w-40 cursor-pointer text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="w-40 cursor-pointer text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
