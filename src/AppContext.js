import * as React from "react";
import { DoctorsData } from "./utils/data/doctors_data";
import { NursesData } from "./utils/data/nurses_data";
import { pharmacyData } from "./utils/data/pharmacy_data";

import { appRdducer, productReducer } from "./Reducers";

export const AppContext = React.createContext();

const initialState = {
  default_user_state: "Active",
  doctors: DoctorsData,
  Nurses: NursesData,
  Pharmacy: pharmacyData,
  cart: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appRdducer, initialState);

  const [productState, productDispatch] = React.useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  const value = { state, dispatch, productState, productDispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
