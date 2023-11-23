import React, { createContext, useContext, useReducer } from "react";
import { IAuth } from "../auth/auth.types";
import { ACTION, IProduct, IProductsValues, STATE } from "./products.types";
import axios from "axios";
import { API, API_categories } from "../../utils/consts";
import { ICategory } from "./products.types";
export const productsContext = createContext<IProductsValues | null>(null);

const INIT_STATE: STATE = {
  products: [],
  oneProduct: null,
  categories: [],
};

function reducer(state = INIT_STATE, action: ACTION): STATE {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    case "GET_CATEGORIES":
      return {...state, categories: action.payload}
    default:
      return state;
  }
}

export function useProducts() {
  const context = useContext(productsContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const ProductsContextProvider = ({ children }: IAuth) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    const { data } = await axios.get(API);
    dispatch({
      type: "GET_PRODUCTS",
      payload: data,
    });
  }

  async function addProduct(newProduct: IProduct) {
    await axios.post(API, newProduct);
  }

  async function getOneProduct(id: string) {
    const { data } = await axios.get(API + "/" + id);
    dispatch({
      type: "GET_ONE_PRODUCT",
      payload: data,
    });
  }
  async function getCategories(){
    const { data } = await axios.get(API_categories);
    dispatch({
      type: "GET_CATEGORIES",
      payload: data,
    });
}

  async function editProduct(id: string, editedProduct: IProduct) {
    await axios.patch(API + "/" + id, editedProduct);
    getProducts();
  }

  async function deleteProduct(id: string) {
    await axios.delete(API + "/" + id);
    getProducts();
  }
  async function createCategory(obj:ICategory){
    await axios.post(API_categories,obj)
  }
  return (
    <productsContext.Provider
      value={{
        addProduct,
        getProducts,
        products: state.products,
        getOneProduct,
        editProduct,
        oneProduct: state.oneProduct,
        deleteProduct,
        getCategories,
        categories: state.categories,
        createCategory,
      }}
    >
      {children}
    </productsContext.Provider>
  );
};

export default ProductsContextProvider;
