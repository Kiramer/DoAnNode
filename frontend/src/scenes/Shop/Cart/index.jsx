import React, { useContext, useState } from "react";
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
import ShopHeader from "../../../components/ShopHeader/ShopHeader";
import Footer from "../../../components/Footer/Footer";
import { CartContext } from "../../../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  console.log("🚀 ~ Cart ~ cart:", cart);

  const calculateTotalPrice = (unitPrice, quantity) => {
    return unitPrice * quantity;
  };

  const calculateGrandTotal = () => {
    return cart.reduce(
      (total, item) =>
        item ? total + calculateTotalPrice(item.price, item.quantity) : total,
      0
    );
  };
  const handleIncrease = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: item,
    });
  };
  const handleDecrease = (item) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: item,
    });
  };
  const handleDelete = (item) => {
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: JSON.parse(item),
    });
  };

  return (
    <>
      <ShopHeader />
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
                <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                  Sản phẩm
                </TableCell>
                <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                  Giá sản phẩm
                </TableCell>
                <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                  Số lượng
                </TableCell>
                <TableCell style={{ textAlign: "center", fontWeight: "bold" }}>
                  Tổng
                </TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
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
                    {item.price}VNĐ
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <IconButton onClick={() => handleDecrease(item)}>
                      <RemoveIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton onClick={() => handleIncrease(item)}>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {calculateTotalPrice(item.price, item.quantity)}VNĐ
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
            Tổng Tiền: {calculateGrandTotal()}VNĐ
          </Typography>
          <Button variant="contained" color="primary">
            Thanh Toán
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
