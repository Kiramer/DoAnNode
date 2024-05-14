import React, { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const recommendations = [
  {
    id: 1,
    image:
      "https://bizweb.dktcdn.net/thumb/grande/100/378/162/products/chi-dinh-vi.jpg?v=1620898947143",
    name: "Recommended Product 1",
    price: 15.5,
  },
  {
    id: 2,
    image:
      "https://caybutthan.vn/wp-content/uploads/2021/01/but-bi-nhua-gia-re-oz2020-13-1024x1024.jpg",
    name: "Recommended Product 2",
    price: 1,
  },
  {
    id: 3,
    image:
      "https://bizweb.dktcdn.net/thumb/grande/100/378/162/products/chi-dinh-vi.jpg?v=1620898947143",
    name: "Recommended Product 1",
    price: 15.5,
  },
  {
    id: 4,
    image:
      "https://caybutthan.vn/wp-content/uploads/2021/01/but-bi-nhua-gia-re-oz2020-13-1024x1024.jpg",
    name: "Recommended Product 2",
    price: 1,
  },
  {
    id: 5,
    image:
      "https://bizweb.dktcdn.net/thumb/grande/100/378/162/products/chi-dinh-vi.jpg?v=1620898947143",
    name: "Recommended Product 1",
    price: 15.5,
  },
  {
    id: 6,
    image:
      "https://caybutthan.vn/wp-content/uploads/2021/01/but-bi-nhua-gia-re-oz2020-13-1024x1024.jpg",
    name: "Recommended Product 2",
    price: 1,
  },
  {
    id: 7,
    image:
      "https://bizweb.dktcdn.net/thumb/grande/100/378/162/products/chi-dinh-vi.jpg?v=1620898947143",
    name: "Recommended Product 1",
    price: 15.5,
  },
];

const Recommendations = () => {
  return (
    <Box mt={4}>
      <Typography
        style={{ fontWeight: "bold", color: "#053023" }}
        variant="h5"
        gutterBottom
      >
        You May Also Like
      </Typography>
      <Box display="flex" flexWrap="wrap" justifyContent="space-around">
        {recommendations.map((item) => (
          <Box
            key={item.id}
            p={2}
            m={1}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              textAlign: "center",
              width: "150px",
            }}
          >
            <img src={item.image} alt={item.name} width={100} height={100} />
            <Typography variant="body1">{item.name}</Typography>
            <Typography variant="body2" color="textSecondary">
              ${item.price}
            </Typography>
            <Button variant="contained" color="primary" size="small">
              Add to Cart
            </Button>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      image:
        "https://bizweb.dktcdn.net/thumb/grande/100/378/162/products/chi-dinh-vi.jpg?v=1620898947143",
      name: "Product 1",
      unitPrice: 10,
      quantity: 2,
      checked: false,
    },
    {
      id: 2,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/but-bi-nhua-gia-re-oz2020-13-1024x1024.jpg",
      name: "Product 2",
      unitPrice: 20,
      quantity: 1,
      checked: false,
    },
    {
      id: 3,
      image:
        "https://bizweb.dktcdn.net/thumb/grande/100/378/162/products/chi-dinh-vi.jpg?v=1620898947143",
      name: "Product 3",
      unitPrice: 10,
      quantity: 2,
      checked: false,
    },
    {
      id: 4,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/but-bi-nhua-gia-re-oz2020-13-1024x1024.jpg",
      name: "Product 4",
      unitPrice: 20,
      quantity: 1,
      checked: false,
    },
  ]);

  const calculateTotalPrice = (unitPrice, quantity) => {
    return unitPrice * quantity;
  };

  const calculateGrandTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        item.checked
          ? total + calculateTotalPrice(item.unitPrice, item.quantity)
          : total,
      0
    );
  };

  const handleCheckboxChange = (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (id, increment) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity + (increment ? 1 : -1) }
        : item
    );
    setCartItems(updatedCart);
  };

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  return (
    <Box p={3}>
      <Typography
        style={{ fontWeight: "bold", color: "#053023" }}
        variant="h4"
        gutterBottom
      >
        Shopping Cart
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#17b8d1" }}>
              <TableCell
                style={{ textAlign: "center", fontWeight: "bold" }}
              ></TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                Product
              </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                Unit Price
              </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                Quantity
              </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                Total Price
              </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cartItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell style={{ textAlign: "center" }}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={item.checked}
                        onChange={() => handleCheckboxChange(item.id)}
                      />
                    }
                  />
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <img
                    src={item.image}
                    alt={item.name}
                    width={50}
                    height={50}
                  />
                  <Typography>{item.name}</Typography>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  ${item.unitPrice}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <IconButton
                    disabled={item.quantity <= 1}
                    onClick={() => handleQuantityChange(item.id, false)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  {item.quantity}
                  <IconButton
                    onClick={() => handleQuantityChange(item.id, true)}
                  >
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  ${calculateTotalPrice(item.unitPrice, item.quantity)}
                </TableCell>
                <TableCell style={{ textAlign: "center" }}>
                  <IconButton onClick={() => handleDelete(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        mt={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography variant="h6">
          Grand Total: ${calculateGrandTotal()}
        </Typography>
        <Button variant="contained" color="primary">
          Checkout
        </Button>
      </Box>
      <Recommendations />
    </Box>
  );
};

export default Cart;
