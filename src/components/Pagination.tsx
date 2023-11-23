import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";

export default function PaginationOutlined() {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
      <Pagination count={10} variant="outlined" />
      <Pagination count={10} variant="outlined" color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} variant="outlined" disabled />
    </Box>
  );
}
