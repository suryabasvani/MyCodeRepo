import * as React from "react";
import { DoctorsData } from "./utils/data/doctors_data";
import { NursesData } from "./utils/data/nurses_data";
import { pharmacyData } from "./utils/data/pharmacy_data";

export const AppContext = React.createContext();

const appRdducer = (state, action) => {
  switch (action.type) {
    case "CREATE_DOCTOR":
      return { ...state, doctors: action.payload };
    case "SEARCH_NURSE":
      return { ...state, Nurses: action.payload };
    case "CREATE_PATIENT_FORM":
      return console.log(
        "INSIDE REDUCER CREATE_PATIENT_FORM : ",
        action.payload
      );
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};

const initialState = {
  default_user_state: "Active",
  doctors: DoctorsData,
  Nurses: NursesData,
  Pharmacy: pharmacyData,
  cart: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(appRdducer, initialState);
  const value = { state, dispatch };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
