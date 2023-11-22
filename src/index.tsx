import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextsProvider from "./contexts/auth/AuthContextsProvider";
import Toastify from "./components/Toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductsContextProvider from "./contexts/products/ProductsContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ProductsContextProvider>
    <AuthContextsProvider>
      <BrowserRouter>
        <App />
        <Toastify />
      </BrowserRouter>
    </AuthContextsProvider>
  </ProductsContextProvider>
);
