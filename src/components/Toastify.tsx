import React from "react";
import { ToastContainer, ToastOptions, toast } from "react-toastify";

type status = "error" | "success";

export function notify(message: string, type: status = "success") {
  return toast(message, { type } as ToastOptions<{}>);
}

const Toastify = () => {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};

export default Toastify;
