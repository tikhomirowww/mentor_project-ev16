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

const ProductsPage = () => {
  const { getProducts, products, deleteProduct } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {products.map((card) => (
        <Card sx={{ maxWidth: 345 }}>
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
            <Typography variant="body2" color="text.secondary">
              {card.description}
            </Typography>
          </CardContent>
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
        </Card>
      ))}
    </div>
  );
};

export default ProductsPage;
