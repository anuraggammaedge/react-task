import { useCallback, useMemo, useReducer, useRef } from "react";

export const useReducerLoggerMiddleware = (reducerFn, initialState) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const preState = useRef();
  const enableLogger = true;

  const dispatchWithLogging = useCallback((action) => {
    const actionType = typeof action === "object" ? action.type : action;

    preState.current = { ...preState, action, actionType };

    dispatch(action);
  }, []);

  const customDispatch = enableLogger ? dispatchWithLogging : dispatch;

  useMemo(
    function logStateAfterChange() {
      if (!enableLogger || !preState.current) return;

      const { actionType, action, current: previousState } = preState.current;

      console.groupCollapsed(`${actionType}`);
      console.log("Previous State ", previousState);
      console.log("Action ", action);
      console.log("current State ", state);
      console.groupEnd("End");
    },
    [state, enableLogger]
  );

  preState.current = { ...preState.current, state };

  return [state, customDispatch];
};
