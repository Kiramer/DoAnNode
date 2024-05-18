import React, { useState } from 'react';
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
    Slider,
} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import './ShopCategory.css'; // Import CSS
import ShopHeader from '../../../components/ShopHeader/ShopHeader';
import Footer from '../../../components/Footer/Footer';

const ShopCategory = () => {
    const [filters, setFilters] = useState({
      priceRange: [10000, 500000]
    });
    const [sortOption, setSortOption] = useState('featured');
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 12;
  
    const handlePriceChange = (event, newValue) => {
      setFilters({...filters, priceRange: newValue});
    };
  
    const handleSortChange = (event) => {
      setSortOption(event.target.value);
    };
  
    const handleSearchChange = (event) => {
      setSearchQuery(event.target.value);
    };
  
    const formatValue = (value) => {
      return `${value.toLocaleString('vi-VN')}₫`;
    };

  const products = [
    {
        id: 1,
        name: "Product 1",
        category: "Category A",
        price: 100000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 2,
        name: "Product 2",
        category: "Category B",
        price: 15000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 3,
        name: "Product 3",
        category: "Category A",
        price: 20000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 4,
        name: "Product 1",
        category: "Category A",
        price: 10000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 5,
        name: "Product 2",
        category: "Category B",
        price: 15000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 6,
        name: "Product 3",
        category: "Category A",
        price: 20000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 7,
        name: "Product 1",
        category: "Category A",
        price: 10000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 8,
        name: "Product 2",
        category: "Category B",
        price: 15000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 9,
        name: "Product 3",
        category: "Category A",
        price: 20000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 10,
        name: "Product 1",
        category: "Category A",
        price: 10000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 11,
        name: "Product 2",
        category: "Category B",
        price: 15000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 12,
        name: "Product 3",
        category: "Category A",
        price: 20000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 13,
        name: "Product 1",
        category: "Category A",
        price: 10000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 14,
        name: "Product 2",
        category: "Category B",
        price: 15000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 15,
        name: "Product 3",
        category: "Category A",
        price: 20000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 16,
        name: "Product 1",
        category: "Category A",
        price: 10000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 17,
        name: "Product 2",
        category: "Category B",
        price: 15000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 18,
        name: "Product 3",
        category: "Category A",
        price: 20000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
      {
        id: 19,
        name: "Product 3",
        category: "Category A",
        price: 20000,
        image:
          "https://caybutthan.vn/wp-content/uploads/2021/01/in-but-bi-nhua-bp2173-moi-3.jpg",
      },
  ];

  const filteredProducts = products.filter(
    (product) =>
      (filters.category === 'All' || product.category === filters.category) &&
      (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]) &&
      (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );
  const sortedAndFilteredProducts = products
  .filter(product =>
    (product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]) &&
    (searchQuery === '' || product.name.toLowerCase().includes(searchQuery.toLowerCase()))
  )
  .sort((a, b) => {
    switch (sortOption) {
      case 'name-asc': return a.name.localeCompare(b.name);
      case 'name-desc': return b.name.localeCompare(a.name);
      case 'price-asc': return a.price - b.price;
      case 'price-desc': return b.price - a.price;
      default: return a.id - b.id; // Assuming 'featured' sorts by 'id' or another default metric
    }
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <>
      <ShopHeader />
      <Box p={3}>
        <Box mb={2} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <FormControl variant="outlined" sx={{ minWidth: 120, mr: 2 }}>
            <InputLabel id="sort-label">Xếp theo</InputLabel>
            <Select
              labelId="sort-label"
              value={sortOption}
              onChange={handleSortChange}
              label="Xếp theo"
            >
              <MenuItem value="featured">Nổi bật</MenuItem>
              <MenuItem value="name-asc">Tên từ A-Z</MenuItem>
              <MenuItem value="name-desc">Tên từ Z-A</MenuItem>
              <MenuItem value="price-asc">Giá tăng dần</MenuItem>
              <MenuItem value="price-desc">Giá giảm dần</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ width: 200, ml: 2, mr: 2 }}>
            <Typography id="range-slider" gutterBottom>
              Giá từ:
            </Typography>
            <Slider
              value={filters.priceRange}
              onChange={handlePriceChange}
              valueLabelDisplay="auto"
              min={5000}
              max={200000}
              getAriaLabel={() => 'Price range'}
              valueLabelFormat={formatValue}
            />
          </Box>
          <TextField
            label="Search"
            variant="outlined"
            size="small"
            value={searchQuery}
            onChange={handleSearchChange}
            sx={{ ml: 2, flexGrow: 1 }}
          />
          <IconButton>
            <SearchIcon />
          </IconButton>
        </Box>
        <Grid container spacing={2}>
          {sortedAndFilteredProducts
            .slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage)
            .map((product) => (
              <Grid item xs={12} sm={4} md={3} key={product.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.image}
                    alt={product.name}
                  />
                  <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ textAlign: 'left' }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            Giá: {formatValue(product.price)}
                        </Typography>
                    </Box>
                    <IconButton color="primary" aria-label="add to shopping cart" sx={{ marginLeft: 'auto' }}>
                        <ShoppingCartIcon />
                    </IconButton>
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
              color={currentPage === index + 1 ? 'primary' : 'inherit'}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Button>
          ))}
        </Box>
      </Box>
      <Footer/>
    </>
  );
};

export default ShopCategory;
