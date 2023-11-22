import React, { createContext } from "react";
import { IAuth } from "../auth/auth.types";

export const productsContext = createContext(null);

const ProductsContextProvider = ({ children }: IAuth) => {
  return (
    <productsContext.Provider value={null}>{children}</productsContext.Provider>
  );
};

export default ProductsContextProvider;
