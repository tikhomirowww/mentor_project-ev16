import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { categories } from "../utils/consts";
import { notify } from "../components/Toastify";
import { useProducts } from "../contexts/products/ProductsContextProvider";
import { useNavigate, useParams } from "react-router-dom";

const EditPage = () => {
  const { oneProduct, getOneProduct, editProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
  });

  const nav = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id!);
  }, []);

  useEffect(() => {
    oneProduct && setProduct(oneProduct);
  }, [oneProduct]);

  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    console.log(product);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editProduct(id!, product);
    nav("/");
  };
  return (
    <Box
      onSubmit={handleSubmit}
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "20%",
        margin: "auto",
        marginTop: "100px",
        border: "2px solid #1976D2",
        borderRadius: "15px",
        gap: "5px",
        padding: "20px",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={handleChange}
        id="standard-search"
        label="Title"
        type="text"
        variant="standard"
        name="title"
        value={product.title}
      />
      <TextField
        value={product.price}
        onChange={handleChange}
        id="standard-search"
        label="Price"
        type="number"
        variant="standard"
        name="price"
      />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={product.category}
          label="Category"
          onChange={handleChange}
          name="category"
        >
          {categories.map((cat) => (
            <MenuItem value={cat.value}>{cat.title}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        value={product.description}
        onChange={handleChange}
        id="standard-search"
        label="Description"
        type="text"
        variant="standard"
        name="description"
      />
      <TextField
        value={product.image}
        onChange={handleChange}
        id="standard-search"
        label="Image"
        type="url"
        variant="standard"
        name="image"
      />
      <Button type="submit" variant="contained">
        Save changes
      </Button>
    </Box>
  );
};

export default EditPage;
