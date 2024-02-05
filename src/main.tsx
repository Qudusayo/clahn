import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/montserrat";
import "@fontsource/dm-sans";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
