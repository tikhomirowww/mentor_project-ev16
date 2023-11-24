import {
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useCartContext } from "../contexts/cart/CartContextProvideer";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, deleteProductFromCart, getCart, decreaseCount, increaseCount } =
    useCartContext();

  useEffect(() => getCart(), []);

  if (cart.products.length < 1) {
    return (
      <Box
        sx={{
          width: "fit-content",
          margin: "100px auto",
          textAlign: "center",
        }}
      >
        <Typography variant="h4">Cart is empty</Typography>
        <Button component={Link} to="/">
          Go to products
        </Button>
      </Box>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="right">Image</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">SubPrice</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.products.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">
                <img width={70} src={row.image} />
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.subPrice}</TableCell>
              <TableCell>
                <IconButton
                  onClick={() => {
                    if (row.count <= 1) {
                      deleteProductFromCart(+row.id!);
                    } else {
                      decreaseCount(+row.id!);
                    }
                  }}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography component={"span"} variant="h6">
                  {row.count}
                </Typography>
                <IconButton onClick={() => increaseCount(+row.id!)}>
                  <AddIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box>
        <Typography variant="h4">Total price: {cart.totalPrice}$</Typography>
        <Button variant="contained" component={Link} to="/success">
          Order
        </Button>
      </Box>
    </TableContainer>
  );
};

export default CartPage;
