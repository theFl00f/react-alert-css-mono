import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
  palette: [],
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
