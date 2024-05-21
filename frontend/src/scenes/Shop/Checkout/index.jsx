import React, { useState, useContext } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import ShopHeader from "../../../components/ShopHeader/ShopHeader";
import Footer from "../../../components/Footer/Footer";
import "./Checkout.css";
import { BASE_URL } from "../../../config";
import { authContext } from "../../../context/AuthContext";
const Checkout = () => {
  const { cart, dispatch } = useContext(CartContext);
  const { user } = useContext(authContext);
  console.log("🚀 ~ Checkout ~ user:", user);
  const calculateTotal = () => {
    const subtotal = cart.reduce(
      (total, item) => (item ? total + item.price * item.quantity : total),
      0
    );
    return subtotal ;
  };
  const [form, setForm] = useState({
    name: user.name,
    phone: user.phone,
    address: user.address,
    cart: cart,
    totalPrice: calculateTotal(),
  });

  const calculateTotalPrice = (unitPrice, quantity) => {
    return unitPrice * quantity;
  };
  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(form);
    const res = await fetch(`${BASE_URL}/orders/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    const result = await res.json();

    if (!res.ok) {
      throw new Error(result.message);
    }
  };
  return (
    <>
      <ShopHeader />

      <Box p={3} className="cart-container">
        <Typography variant="h4" gutterBottom style={{ fontWeight: 700 }}>
          Thanh Toán
        </Typography>
        <div>
          <div>
            <Typography variant="h5">Danh sách sản phẩm</Typography>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow className="table-header">
                    <TableCell>Tên Sản phẩm</TableCell>
                    <TableCell>Giá</TableCell>
                    <TableCell>Số lượng</TableCell>
                    <TableCell>Thành tiền</TableCell>
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
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        {calculateTotalPrice(item.price, item.quantity)} VNĐ
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Typography variant="h5" gutterBottom>
              Tổng tiền: {calculateTotal()} VND
            </Typography>
          </div>
          <div style={{ marginTop: "30px", width: "50%" }}>
            <Typography variant="h5" gutterBottom>
              Thông tin người nhận
            </Typography>
            <form>
              <div>
                <input
                  type="text"
                  value={form.name}
                  name="name"
                  placeholder="Họ tên"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  value={form.phone}
                  name="phone"
                  placeholder="Số điện thoại"
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  value={form.address}
                  name="address"
                  placeholder="Địa chỉ"
                  onChange={handleChange}
                  required={true}
                />
              </div>
              <button
                className="checkout-button"
                type="submit"
                onClick={handleSubmit}
              >
                Đặt hàng
              </button>
            </form>
          </div>
        </div>
      </Box>
      <Footer />
    </>
  );
};

export default Checkout;
