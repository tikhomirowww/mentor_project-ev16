import { Box, Button, TextField } from "@mui/material";
import React, {
  ChangeEvent,
  ChangeEventHandler,
  FormEvent,
  useState,
} from "react";

const AddPage = () => {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    image: "",
    category: "",
    description: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    console.log(product);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
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
      <TextField
        onChange={handleChange}
        id="standard-search"
        label="Category"
        type="text"
        variant="standard"
        name="category"
      />
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
