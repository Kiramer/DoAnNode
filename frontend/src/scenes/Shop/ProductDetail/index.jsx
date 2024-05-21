import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Grid,
  Paper,
  IconButton,
  Divider,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../config";
import ShopHeader from "../../../components/ShopHeader/ShopHeader";
import Footer from "../../../components/Footer/Footer";

const ProductDetail = () => {
  const [data, setData] = useState([]);
  console.log("🚀 ~ ProductDetail ~ data:", data);
  const id = useParams();
  console.log("🚀 ~ ProductDetail ~ id:", id);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${BASE_URL}/products/singleProduct/${id.id}`);
      const data = await result.json();
      setData(data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <ShopHeader />
      <Box p={3}>
        <Paper elevation={3} sx={{ padding: 3, backgroundColor: "#f5f5f5" }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: 2 }}>
                <img src={data.images} alt={data.title} width="100%" />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ padding: 2 }}>
                <Typography variant="h4" gutterBottom>
                  {data.title}
                </Typography>
                <Box display="flex" alignItems="center" mb={1}>
                  <Typography variant="h5" color="primary" mr={1}>
                    {data.price} VNĐ
                  </Typography>
                </Box>
                <Typography variant="body2" gutterBottom>
                  {data.description}
                </Typography>
                <Divider />
                <Typography variant="body2" gutterBottom>
                  Thương hiệu: {data.brand}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Danh mục: {data.category}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Số lượng còn: {data.quantity}
                </Typography>
                <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                  {/* <Typography variant="body1" sx={{ marginRight: 2 }}>
                  Quantity: 1
                </Typography> */}
                  {/* <IconButton
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
                </IconButton> */}
                </Box>
                <Box sx={{ mt: 2, display: "flex", gap: 2 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddShoppingCartIcon />}
                  >
                    Add to Cart
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
