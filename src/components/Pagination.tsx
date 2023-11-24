import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import { useProducts } from "../contexts/products/ProductsContextProvider";
import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../utils/consts";

export default function PaginationOutlined() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { page, setPage, pageTotalCount, getProducts } = useProducts();
  React.useEffect(() => {
    getProducts();
  }, [searchParams]);

  React.useEffect(() => {
    const currentParams = Object.fromEntries([...searchParams]);
    setSearchParams({
      ...currentParams,
      _page: page.toString(),
      _limit: LIMIT.toString(),
    });
  }, [page]);
  return (
    <Box
      sx={{ width: "fit-content", margin: "30px auto", marginBottom: "200px" }}
      display="flex"
      flexDirection="column"
      alignItems="center"
      mt={2}
    >
      <Pagination
        page={+page}
        onChange={(e, val) => setPage(val)}
        count={pageTotalCount}
        variant="outlined"
      />
    </Box>
  );
}
