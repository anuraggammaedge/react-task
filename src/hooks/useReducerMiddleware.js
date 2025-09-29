import { useCallback, useEffect, useReducer, useRef } from "react";

export const useReducerMiddleware = (reducer, initialState, middleware) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const dispatchWithMiddleware = (action) => {
    middleware(action, state);
    dispatch(action);
  };

  return [state, dispatchWithMiddleware];
};

export const useReducerWithMultiMiddleware = (
  reducer,
  initialState,
  middlewares = []
) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);

  const dispatchWithMiddleware = useCallback(
    (action) => {
      const composedDispatch = middlewares.reduceRight(
        (next, middleware) => middleware(next, stateRef.current),
        dispatch
      );
      composedDispatch(action);
    },
    [middlewares, dispatch]
  );

  return [state, dispatchWithMiddleware];
};
