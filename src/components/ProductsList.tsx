import React, { useEffect } from "react";
import { useProducts } from "../contexts/products/ProductsContextProvider";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import PaginationOutlined from "../components/Pagination";
import { CircleLoader } from "react-spinners";
import { useAuth } from "../contexts/auth/AuthContextsProvider";
import { useCartContext } from "../contexts/cart/CartContextProvideer";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

const ProductsList = () => {
  const { getProducts, products, deleteProduct } = useProducts();

  const { isAdmin, user } = useAuth();

  const { isAlreadyInCart, deleteProductFromCart, addProductToCart } =
    useCartContext();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <Box
      sx={{
        marginTop: "20px",
        width: "90%",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      {products.length > 0 ? (
        products.map((card) => (
          <Card key={card.id} sx={{ maxWidth: 345, width: "30%" }}>
            <CardMedia
              sx={{ height: 140 }}
              image={card.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {card.title}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Price: {card.price} $
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Category: {card.category}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
            </CardContent>
            {user && (
              <div>
                {isAlreadyInCart(+card.id!) ? (
                  <div onClick={() => deleteProductFromCart(+card.id!)}>
                    <RemoveShoppingCartIcon color="error" />
                  </div>
                ) : (
                  <div onClick={() => addProductToCart(card)}>
                    <AddShoppingCartIcon />
                  </div>
                )}
              </div>
            )}
            {isAdmin() && (
              <CardActions>
                <Link to={`/edit/${card.id}`}>
                  <Button variant="contained" color="info" size="small">
                    Update
                  </Button>
                </Link>
                <Button
                  onClick={() => deleteProduct(card.id!)}
                  variant="contained"
                  color="error"
                  size="small"
                >
                  Delete
                </Button>
              </CardActions>
            )}
          </Card>
        ))
      ) : (
        <CircleLoader color="#36d7b7" />
      )}
    </Box>
  );
};

export default ProductsList;
