import React from "react";
import {
  useReducerMiddleware,
  useReducerWithMultiMiddleware,
} from "./useReducerMiddleware";
import { useReducerLoggerMiddleware } from "./useReducerLoggerMiddleware";

const loggerMiddleware = (action, state) => {
  console.log("Action dispatched:", action);
  console.log("Previous state:", state);
};
const logger = (next, state) => (action) => {
  console.log("Action dispatched:", action);
  console.log("Previous state:", state);
  return next(action);  
};

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const initialState = { count: 0 };

export const HooksTesting = () => {
  // const [state, dispatch] = useReducerMiddleware(
  //   counterReducer,
  //   initialState,
  //   loggerMiddleware
  // );
  // const [state, dispatch] = useReducerLoggerMiddleware(
  //   counterReducer,
  //   initialState
  // );

  const [state, dispatch] = useReducerWithMultiMiddleware(
    counterReducer,
    initialState,
    [logger]
  );
  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};
