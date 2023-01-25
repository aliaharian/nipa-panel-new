import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Routes/Router";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./app/utils/SnackbarUtils";

function App() {
  return (
    <div className="App">
      <SnackbarProvider>
        <SnackbarUtilsConfigurator />
        <Router />
      </SnackbarProvider>
    </div>
  );
}

export default App;
