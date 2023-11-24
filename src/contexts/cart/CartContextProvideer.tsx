import React, { createContext, useContext, useState } from "react";
import { IAuth } from "../auth/auth.types";
import { IProduct } from "../products/products.types";
import { ICartState, ICartValues } from "./types.cart";
import { notify } from "../../components/Toastify";

const cartContext = createContext<ICartValues | null>(null);

export function useCartContext() {
  const context = useContext(cartContext);
  if (!context) {
    throw new Error("Забыли обернуть");
  }
  return context;
}

const INIT_STATE: ICartState = {
  products: [],
  totalPrice: 0,
};

function getDataFromLS(): ICartState {
  let data = JSON.parse(localStorage.getItem("cart") || "null");
  if (!data) {
    data = {
      products: [],
      totalPrice: 0,
    };
  }
  return data;
}

const CartContextProvideer = ({ children }: IAuth) => {
  const [cart, setCart] = useState(INIT_STATE);

  function getCart() {
    const data = getDataFromLS();
    setCart(data);
  }

  function addProductToCart(product: IProduct) {
    const data = getDataFromLS();
    data.products.push({ ...product, count: 1, subPrice: product.price });
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + +item.subPrice ?? 0,
      0
    );
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    notify("Successfully added to cart!");
  }

  function deleteProductFromCart(id: number) {
    const data = getDataFromLS();
    data.products = data.products.filter((item) => +item.id! !== id);
    data.totalPrice = data.products.reduce(
      (acc, item) => acc + +item.subPrice ?? 0,
      0
    );
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
    notify("Successfully renoved!");
  }

  function isAlreadyInCart(id: number) {
    const data = getDataFromLS();
    const isInCart = data.products.some((item) => +item.id! === id);
    return isInCart;
  }

  function increaseCount(id: number) {
    const data = getDataFromLS();
    data.products = data.products.map((item) => {
      if (+item.id! === id) {
        item.count = item.count + 1;
        item.subPrice = +item.subPrice + +item.price;
      }
      return item;
    });

    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function decreaseCount(id: number) {
    const data = getDataFromLS();
    data.products = data.products.map((item) => {
      if (+item.id! === id) {
        item.count = item.count - 1;
        item.subPrice = +item.subPrice - +item.price;
      }
      return item;
    });

    data.totalPrice = data.products.reduce(
      (acc, item) => acc + item.subPrice,
      0
    );
    localStorage.setItem("cart", JSON.stringify(data));
    getCart();
  }

  function clearCart() {
    localStorage.removeItem("cart");
    getCart();
  }

  return (
    <cartContext.Provider
      value={{
        addProductToCart,
        cart,
        clearCart,
        decreaseCount,
        deleteProductFromCart,
        getCart,
        increaseCount,
        isAlreadyInCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvideer;
