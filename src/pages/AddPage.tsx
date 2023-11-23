import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useState,
} from "react";
import { useProducts } from "../contexts/products/ProductsContextProvider";
import { notify } from "../components/Toastify";
import { useNavigate } from "react-router-dom";
import { API_categories, categories } from "../utils/consts";
import axios from "axios";
const AddPage = () => {
  const { addProduct, getCategories, categories,createCategory } = useProducts();
  const [category, setCategory] = useState("")
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
  });

  const handleChange = (e: any) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    console.log(product);
  };
  useEffect(()=>{
    getCategories()
  },[])
  const nav = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !product.title.trim() ||
      !product.price ||
      !product.category.trim() ||
      !product.description.trim() ||
      !product.image.trim()
    ) {
      notify("Заполните поля!");
      return;
    }
    addProduct(product);
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
      />
      <TextField
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
          <div className="continer">
            <input style={{marginLeft:"7%",}} onChange={(e:ChangeEvent<HTMLInputElement>)=>{setCategory(e.target.value)}} value={category}/>
            <button onClick={(e) => {createCategory({title:category,value:category.toLowerCase()});setCategory(" ")}}>add</button>
          </div>
        </Select>
      </FormControl>
      <TextField
        onChange={handleChange}
        id="standard-search"
        label="Description"
        type="text"
        variant="standard"
        name="description"
      />
      <TextField
        onChange={handleChange}
        id="standard-search"
        label="Image"
        type="url"
        variant="standard"
        name="image"
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
};

export default AddPage;
