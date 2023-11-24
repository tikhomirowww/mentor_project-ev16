import { TextField, ThemeProvider, createTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../contexts/products/ProductsContextProvider";
import { setEmitFlags } from "typescript";

const searchTheme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input": {
            color: "white",
          },
        },
      },
    },
  },
});

const Livesearch = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  const [searchVal, setSearchVal] = useState(searchParams.get("q") || "");

  const { getProducts, setPage } = useProducts();

  useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setsearchParams({
      ...currentParams,
      q: searchVal,
    });
    getProducts();
    setPage(1);
  }, [searchVal]);
  return (
    <ThemeProvider theme={searchTheme}>
      <div style={{ border: "2px solid white" }}>
        <TextField
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: "white" }} />,
          }}
          onChange={(e) => setSearchVal(e.target.value)}
          placeholder="Search..."
          sx={{ color: "white" }}
          id="outlined-basic"
          variant="outlined"
        />
      </div>
    </ThemeProvider>
  );
};

export default Livesearch;
