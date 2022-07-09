import React from "react";
import "./App.css";

import AppRoute from "./AppRoute";
import AppProvider from "./AppContext";

function App() {
  return (
    <AppProvider>
      <AppRoute />
    </AppProvider>
  );
}

export default App;
