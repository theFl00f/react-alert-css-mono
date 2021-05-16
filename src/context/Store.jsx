import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";
import Reducer from "./Reducer";

const initialState = {
  palette: [],
  theme: "analogous",
  alertBorderColor: "",
  alertBackgroundColor: "",
  buttonBorderColor: "",
  buttonBackgroundColor: "",
  textColor: "",
  buttonTextColor: "",
  message: "",
  buttonText: "Close",
  alertWidth: 24,
  alertHeight: 14,
  alertBorderRadius: 0,
  alertBorderWidth: 0,
  error: null,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);
export default Store;

Store.propTypes = {
  children: PropTypes.element.isRequired,
};
