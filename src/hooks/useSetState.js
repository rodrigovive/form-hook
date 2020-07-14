import React from "react";
import moment from "moment";
import trim from "lodash/trim";
import isEmpty from "lodash/isEmpty";

const initialUser = {
  firstname: {
    value: "",
    error: "",
  },
  lastname: {
    value: "",
    error: "",
  },
  birth: {
    value: "",
    error: "",
  },
};

const reducer = (state, next) => {
  return {
    ...state,
    ...next,
  };
};

const useSetState = (initial = initialUser) => {
  const [state, dispatch] = React.useReducer(reducer, initial);
  const setState = (newState) => dispatch(newState);
  return [state, setState];
};

const getUser = (user) => ({
  firstname: trim(user.firstname.value),
  lastname: trim(user.lastname.value),
  birth: moment(user.birth.value).format("dddd, MMMM Do YYYY"),
});

const validateBirth = (value) => {
  const date = moment(value);
  const now = moment();
  if (now > date) {
    return "";
  } else {
    return "Invalid date";
  }
};

const validate = ({ name, value }) => {
  if (name === "birth") {
    return validateBirth(value);
  }
  if (isEmpty(value)) {
    return `Field invalid`;
  }
  return "";
};

const isValid = (user) => {
  return Object.keys(user).every((key) => {
    return user[key].value && !user[key].error;
  });
};

export { useSetState, initialUser, getUser, validate, isValid };
