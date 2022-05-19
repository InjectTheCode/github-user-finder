import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GithubProvider from "./Context/GithubContext/GithubContext";
import { AlertProvider } from "./Context/AlertContext/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GithubProvider>
    <AlertProvider>
      <App />
    </AlertProvider>
  </GithubProvider>
);
