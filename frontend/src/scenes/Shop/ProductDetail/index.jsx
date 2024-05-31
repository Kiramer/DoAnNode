import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Typography, Grid, Paper, Divider } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config";
import ShopHeader from "../../../components/ShopHeader/ShopHeader";
import Footer from "../../../components/Footer/Footer";
import { CartContext } from "../../../context/CartContext";

const ProductDetail = () => {
  const [data, setData] = useState([]);
  const { dispatch } = useContext(CartContext);
  const id = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${BASE_URL}/products/singleProduct/${id.id}`);
      const data = await result.json();
      setData(data.data);
    };
    fetchData();
  }, []);

  const formatValue = (value) => {
    return `${value?.toLocaleString("vi-VN")}VNĐ`;
  };
  const handleAddCart = (item) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        id: item._id,
        name: item.title,
        image: item.images,
        price: item.price,
      },
    });
  };
  return (
    <>
      <ShopHeader />
      <Box p={3}>
        <Paper elevation={3} sx={{ padding: 3, backgroundColor: "#f5f5f5" }}>
          <Grid container spacing={2}>
            <Grid item xs={10} md={5}>
              <Box sx={{ padding: 2 }}>
                <img src={data.images} alt={data.title} width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h3" gutterBottom>
                  {data.title}
                </Typography>
                <Box display="flex" alignItems="center" mb={1}>
                  <Typography variant="h4" color="primary" mr={1}>
                    {formatValue(data.price)}
                  </Typography>
                </Box>
                <Typography gutterBottom>{data.description}</Typography>
                <Divider />
                <Typography variant="h5" gutterBottom>
                  Thương hiệu: {data.brand}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Danh mục: {data.category}
                </Typography>
                <Typography variant="h5" gutterBottom>
                  Số lượng còn: {data.quantity}
                </Typography>

                <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}
                    onClick={() => handleAddCart(data)}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDetail;
