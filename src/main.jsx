import './index.css'
import React from "react";
import ReactDom from "react-dom/client";

import App from "./App.jsx";

import { BrowserRouter } from "react-router";

ReactDom.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
)