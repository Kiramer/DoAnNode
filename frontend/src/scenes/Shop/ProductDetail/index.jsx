import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  IconButton,
  Divider,
  Avatar,
  Link,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ProductDetail = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (increment) => {
    setQuantity((prevQuantity) =>
      increment ? prevQuantity + 1 : prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  const product = {
    name: "Quạt Tích Điện Gấp Gọn Super",
    price: 42.7,
    originalPrice: 44.99,
    discount: 3,
    description:
      "A high-quality electric fan with adjustable speeds and a modern design.",
    details: {
      origin: "Đài Loan",
      type: "Quạt AC",
      category: "Quạt bàn",
      material: "Nhựa ABS",
      dimensions: "17x8.5x36 cm",
      voltage: "5VDC",
      power: "2W",
      stock: 5183,
      location: "Lạng Sơn",
    },
    images: [
      "https://down-vn.img.susercontent.com/file/07287c75ffe1caad1e69e5f286925e16",
      "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-lj2of14a4pg2dd",
      "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    ],
    shipping: "Free Shipping",
    location: "Phường 5, Quận Gò Vấp",
    returnPolicy: "15-day return policy",
  };

  const seller = {
    name: "LiangShan",
    rating: 87,
    sales: 216700,
    products: 1400,
    followers: 67200,
    joinDate: "5 years ago",
    responseTime: "a few hours",
    avatar:
      "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
  };

  return (
    <Box p={3}>
      <Paper elevation={3} sx={{ padding: 3, backgroundColor: "#f5f5f5" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2 }}>
              <img src={product.images[0]} alt={product.name} width="100%" />
            </Box>
            <Grid container spacing={1}>
              {product.images.map((image, index) => (
                <Grid item xs={4} key={index}>
                  <img
                    src={image}
                    alt={`${product.name} ${index}`}
                    width="100%"
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ padding: 2 }}>
              <Typography variant="h4" gutterBottom>
                {product.name}
              </Typography>
              <Box display="flex" alignItems="center" mb={1}>
                <Typography variant="h5" color="primary" mr={1}>
                  ${product.price}
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ textDecoration: "line-through" }}
                >
                  ${product.originalPrice}
                </Typography>
                <Chip
                  label={`${product.discount}% OFF`}
                  color="secondary"
                  sx={{ ml: 1 }}
                />
              </Box>
              <Typography variant="body2" gutterBottom>
                {product.description}
              </Typography>
              <Divider />
              <Typography variant="body2" gutterBottom mt={2}>
                Shipping: <LocalShippingIcon /> {product.shipping}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Location: <LocationOnIcon /> {product.location}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Return Policy: <VerifiedUserIcon /> {product.returnPolicy}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2" gutterBottom>
                Origin: {product.details.origin}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Type: {product.details.type}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Category: {product.details.category}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Material: {product.details.material}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Dimensions: {product.details.dimensions}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Voltage: {product.details.voltage}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Power: {product.details.power}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Stock: {product.details.stock}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Warehouse Location: {product.details.location}
              </Typography>
              <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                <Typography variant="body1" sx={{ marginRight: 2 }}>
                  Quantity:
                </Typography>
                <IconButton
                  onClick={() => handleQuantityChange(false)}
                  disabled={quantity <= 1}
                >
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body1" sx={{ marginX: 2 }}>
                  {quantity}
                </Typography>
                <IconButton onClick={() => handleQuantityChange(true)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddShoppingCartIcon />}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<FavoriteBorderIcon />}
                >
                  Add to Wishlist
                </Button>
              </Box>
              <Divider sx={{ my: 3 }} />
              <Box display="flex" alignItems="center">
                <Avatar src={seller.avatar} alt={seller.name} />
                <Box ml={2}>
                  <Typography variant="body1" color="textPrimary">
                    {seller.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Joined: {seller.joinDate}
                  </Typography>
                  <Link href="#" variant="body2">
                    <Typography variant="body2" color="primary">
                      View Shop
                    </Typography>
                  </Link>
                </Box>
              </Box>
              <Box mt={2}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Rating
                      </TableCell>
                      <TableCell>
                        {seller.rating}%{" "}
                        <StarIcon fontSize="small" sx={{ color: "gold" }} />
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Sales
                      </TableCell>
                      <TableCell>{seller.sales}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Products
                      </TableCell>
                      <TableCell>{seller.products}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Followers
                      </TableCell>
                      <TableCell>{seller.followers}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell component="th" scope="row">
                        Response Time
                      </TableCell>
                      <TableCell>{seller.responseTime}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default ProductDetail;
