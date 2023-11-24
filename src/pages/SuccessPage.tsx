import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useCartContext } from "../contexts/cart/CartContextProvideer";
import { useNavigate } from "react-router-dom";

const SuccessPage = () => {
  const { clearCart } = useCartContext();
  const nav = useNavigate();
  useEffect(() => {
    clearCart();
    setTimeout(() => {
      nav("/");
    }, 2000);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h2">Thank you for your order!</Typography>
    </Box>
  );
};

export default SuccessPage;
