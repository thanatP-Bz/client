import React from "react";
import ReactDOM from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App";
<<<<<<< HEAD
import { AppProvider } from "./context/AppContext";
=======
import { AppProvider } from "./context/appContext";
>>>>>>> 103911dbfb12a9c2ac7f0a06ee9df531e605be41

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
