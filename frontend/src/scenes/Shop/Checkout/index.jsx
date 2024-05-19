import React, {useState, useContext} from 'react';
import {
  Box, 
  Button, 
  TextField, 
  Typography, 
  FormControl, 
  RadioGroup, 
  FormControlLabel, 
  Radio
} from '@mui/material';
import { CartContext } from "../../../context/CartContext";
import ShopHeader from '../../../components/ShopHeader/ShopHeader';
import Footer from '../../../components/Footer/Footer';
import "./Checkout.css";

const Checkout = () => {
    const { cart } = useContext(CartContext);
    const [discountCode, setDiscountCode] = useState('');
    const [discount, setDiscount] = useState(0);

    const calculateTotal = () => {
        const subtotal = cart.reduce((total, item) => item ? total + (item.price * item.quantity) : total, 0);
        return subtotal * (1 - discount / 100); 
    };
    const handleApplyDiscount = () => {
        // Ví dụ giảm giá 10%
        if (discountCode === 'SAVE10') {
            setDiscount(10); // Apply 10% discount
        } else {
            setDiscount(0); // No discount or invalid code
            alert('Mã giảm giá không tồn tại!');
        }
    };

    return (
        <>
        <ShopHeader />
        <Box p={3} className="cart-container">
            <Typography variant="h4" gutterBottom>
                Checkout
            </Typography>
            <TextField label="Họ Tên" fullWidth margin="normal" />
            <TextField label="Số điện thoại" fullWidth margin='normal'/>
            <TextField label="Địa chỉ" fullWidth margin="normal" />
            <TextField 
                label="Mã giảm giá" 
                fullWidth
                margin="normal" 
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                helperText="Nhập mã giảm giá nếu có"
            />
            <Button variant="outlined" color="primary" onClick={handleApplyDiscount}>
                Áp dụng
            </Button>
            <FormControl component="fieldset" margin="normal" fullWidth>
                <RadioGroup aria-label="payment method" name="payment-method">
                    <FormControlLabel value="momo" control={<Radio />} label="Momo" />
                    <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
                </RadioGroup>
            </FormControl>
            <Box className="total-checkout-container">
            <Typography variant="h6" className="grand-total">
                Tổng tiền: {calculateTotal()} VNĐ
            </Typography>
            <Button variant="contained" color="primary" className="checkout-button">
                Đặt hàng
            </Button>
            </Box>
        </Box>
        <Footer />
        </>
    );
};

export default Checkout;