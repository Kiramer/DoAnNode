import { useEffect, useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataTeam } from "../../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../../components/Header/Header";
import EditProductForm from "../productsForm/EditProductForm";
import { BASE_URL } from "../../../config";
import AddForm from "./AddProduct";
const Products = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState(mockDataTeam);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [deleteId, setDeleteId] = useState(null);
  const [change, setChange] = useState(false);
  const category = fetch(`${BASE_URL}/procategories/all`);
  useEffect(() => {
    const fetchCategory = async () => {
      const result = await fetch(`${BASE_URL}/procategories/all`);
      const data = await result.json();
      setData(data.data);
    };
    fetchCategory();
  }, []);
  console.log("🚀 ~ AddForm ~ category:", category);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`${BASE_URL}/products/all`);
      const data = await result.json();
      setData(data.data);
    };
    fetchData();
  }, [change]);
  const handleUpdate = (updatedItem) => {
    handleCloseEditDialog();
  };

  const handleDelete = () => {
    handleCloseDeleteDialog();
  };

  const handleClickOpenEditDialog = (item) => {
    setEditItem(item);
    setOpenEditDialog(true);
  };
  const handleClickOpenCreateDialog = () => {
    setOpenCreateDialog(true);
  };
  const handleClickOpenDeleteDialog = (id) => {
    setDeleteId(id);
    setOpenDeleteDialog(true);
  };
  const handleCloseCreateDialog = () => {
    setOpenCreateDialog(false);
  };
  const handleCloseEditDialog = () => {
    setOpenEditDialog(false);
  };

  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };
  const handleAddProduct = (data) => {
    console.log("add product");
    setOpenCreateDialog(false);
  };

  const columns = [
    { field: "productId", headerName: "Product ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "category",
      headerName: "Category",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    { field: "description", headerName: "Description", flex: 2 },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton
            onClick={() => handleClickOpenEditDialog(params.row)}
            color="primary"
          >
            <EditIcon />
          </IconButton>
          <IconButton
            onClick={() => handleClickOpenDeleteDialog(params.id)}
            color="secondary"
          >
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header title="PRODUCTS" subtitle="Managing Products" />
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpenCreateDialog}
        sx={{
          mt: 2,
          mb: 4,
          backgroundColor: "secondary.main",
        }}
      >
        Add New Product
      </Button>
      <Box
        m="10px 0 0 0"
        height="100vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid rows={""} columns={columns} />
      </Box>
      <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
        <DialogContent>
          <EditProductForm userData={editItem} updateUser={handleUpdate} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Close</Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openCreateDialog} onClose={handleCloseCreateDialog}>
        <DialogContent>
          <AddForm createProduct={handleAddProduct} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEditDialog}>Close</Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={openDeleteDialog}
        onClose={handleClickOpenDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Có chắc là muốn xoá không???!!!??
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDeleteDialog} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="secondary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Products;
