import React from "react";

const reducer = (state, next) => {
  return {
    ...state,
    ...next,
  };
};

const useSetState = (initial) => {
  const [state, dispatch] = React.useReducer(reducer, initial);
  const setState = (newState) => dispatch(newState);
  return [state, setState];
};

export default useSetState;
