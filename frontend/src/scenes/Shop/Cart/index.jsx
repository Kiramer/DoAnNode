import React, { useContext } from "react";
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
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShopHeader from "../../../components/ShopHeader/ShopHeader";
import Footer from "../../../components/Footer/Footer";
import { CartContext } from "../../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, dispatch } = useContext(CartContext);

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
      payload: item,
    });
  };

  return (
    <>
      <ShopHeader />
      <Box p={3} className="cart-container">
        <Typography variant="h4" gutterBottom className="cart-heading">
          Shopping Cart
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow className="table-header">
                <TableCell>Tên Sản phẩm</TableCell>
                <TableCell>Giá</TableCell>
                <TableCell>Số lượng</TableCell>
                <TableCell>Thành tiền</TableCell>
                <TableCell></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="product-image"
                    />
                    <Typography>{item.name}</Typography>
                  </TableCell>
                  <TableCell>{item.price} VNĐ</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDecrease(item)}>
                      <RemoveIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton onClick={() => handleIncrease(item)}>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    {calculateTotalPrice(item.price, item.quantity)} VNĐ
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleDelete(item)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box className="total-checkout-container">
          <Typography variant="h6" className="grand-total">
            Tổng tiền: {calculateGrandTotal()} VNĐ
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="checkout-button"
            onClick={() => navigate("/checkout")}
          >
            Check Out
          </Button>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
