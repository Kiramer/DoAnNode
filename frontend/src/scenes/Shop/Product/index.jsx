import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  IconButton,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search"; // Import icon tìm kiếm

const Product = () => {
  const [filters, setFilters] = useState({
    category: "All",
    price: "All",
  });

  const [searchQuery, setSearchQuery] = useState(""); // State để lưu giá trị trường tìm kiếm

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.value,
    });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const products = [
    {
      id: 1,
      name: "Product 1",
      category: "Category A",
      price: 10,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category B",
      price: 15,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 3,
      name: "Product 3",
      category: "Category A",
      price: 20,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 4,
      name: "Product 1",
      category: "Category A",
      price: 10,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 5,
      name: "Product 2",
      category: "Category B",
      price: 15,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 6,
      name: "Product 3",
      category: "Category A",
      price: 20,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 7,
      name: "Product 1",
      category: "Category A",
      price: 10,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 8,
      name: "Product 2",
      category: "Category B",
      price: 15,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 9,
      name: "Product 3",
      category: "Category A",
      price: 20,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 10,
      name: "Product 1",
      category: "Category A",
      price: 10,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 11,
      name: "Product 2",
      category: "Category B",
      price: 15,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 12,
      name: "Product 3",
      category: "Category A",
      price: 20,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 13,
      name: "Product 1",
      category: "Category A",
      price: 10,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 14,
      name: "Product 2",
      category: "Category B",
      price: 15,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 15,
      name: "Product 3",
      category: "Category A",
      price: 20,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 16,
      name: "Product 1",
      category: "Category A",
      price: 10,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 17,
      name: "Product 2",
      category: "Category B",
      price: 15,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 18,
      name: "Product 3",
      category: "Category A",
      price: 20,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
    {
      id: 19,
      name: "Product 3",
      category: "Category A",
      price: 20,
      image:
        "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
    },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (filters.category === "All" || product.category === filters.category) &&
      (filters.price === "All" ||
        (filters.price === "10" && product.price <= 10) ||
        (filters.price === "15" && product.price <= 15) ||
        (filters.price === "20" && product.price <= 20)) &&
      (searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase())) // Lọc sản phẩm theo từ khóa tìm kiếm
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <Box p={3}>
      <Box mb={2} display="flex" alignItems="center">
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <Typography variant="h6">Filters:</Typography>
        <FormControl variant="outlined" sx={{ ml: 2 }}>
          <InputLabel>Category</InputLabel>
          <Select
            defaultValue={filters.category}
            onChange={handleFilterChange}
            label="Category"
            name="category"
            style={{ minWidth: "120px" }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Category A">Category A</MenuItem>
            <MenuItem value="Category B">Category B</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="outlined" sx={{ ml: 2 }}>
          <InputLabel>Price</InputLabel>
          <Select
            defaultValue={filters.price}
            onChange={handleFilterChange}
            label="Price"
            name="price"
            style={{ minWidth: "120px" }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="10">$10 or less</MenuItem>
            <MenuItem value="15">$15 or less</MenuItem>
            <MenuItem value="20">$20 or less</MenuItem>
          </Select>
        </FormControl>
        <TextField // Thêm trường tìm kiếm
          label="Search"
          variant="outlined"
          size="small"
          value={searchQuery}
          onChange={handleSearchChange}
          sx={{ ml: 2 }}
        />
        <IconButton>
          <SearchIcon />
        </IconButton>
      </Box>
      <Grid container spacing={2}>
        {filteredProducts
          .slice(
            (currentPage - 1) * productsPerPage,
            currentPage * productsPerPage
          )
          .map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Category: {product.category}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Price: ${product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        {Array.from({ length: totalPages }, (_, index) => (
          <Button
            key={index}
            variant="contained"
            color={currentPage === index + 1 ? "primary" : "inherit"}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Product;
