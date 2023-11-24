import React, { useEffect } from "react";
import { useProducts } from "../contexts/products/ProductsContextProvider";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PaginationOutlined from "../components/Pagination";
import ProductsList from "../components/ProductsList";
import Filter from "../components/Filter";

const ProductsPage = () => {
  return (
    <>
      <Filter />
      <ProductsList />
      <PaginationOutlined />
    </>
  );
};

export default ProductsPage;
