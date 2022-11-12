import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import CryptoContext from "./CryptoContext";


import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CryptoContext>
      <App />
    </CryptoContext>
    </BrowserRouter>
  </React.StrictMode>
);

