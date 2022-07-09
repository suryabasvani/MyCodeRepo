import * as React from "react";
import { doctorsData } from "./utils/data/doctors_data";

export const AppContext = React.createContext();

const appRdducer = (state, action) => {
  switch (action.type) {
    case "CREATE_DOCTOR":
      return { ...state, doctors: action.payload };
  }
};

const initialState = {
  default_user_state: "Active",
  doctors: doctorsData,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appRdducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
