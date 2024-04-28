import { useState } from "react";
import { useNavigate} from 'react-router-dom';
import { Box, Typography, useTheme, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataTeam} from "../../../data/mockData";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../../components/Header/Header";
import EditProductForm from "../productsForm/EditProductForm";

const Products = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState(mockDataTeam);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [deleteId, setDeleteId] = useState(null);
    const negative = useNavigate();

    const handleUpdate = (updatedItem) => {
      const newData = data.map(item => {
        if (item.id === updatedItem.id) {
          return updatedItem;
        }
        return item;
      });
      setData(newData);
      handleCloseEditDialog();
    };

    const handleDelete = () => {
      const newData = data.filter(item => item.id !== deleteId);
      setData(newData);
      handleCloseDeleteDialog();
      console.log('Deleted row ID:', deleteId);
    };

    const handleClickOpenEditDialog = (item) => {
      setEditItem(item);
      setOpenEditDialog(true);
    };

    const handleClickOpenDeleteDialog = (id) => {
      setDeleteId(id);
      setOpenDeleteDialog(true);
    };

    const handleCloseEditDialog = () => {
      setOpenEditDialog(false);
    };

    const handleCloseDeleteDialog = () => {
      setOpenDeleteDialog(false);
    };
    const handleAddProduct = () => {
      negative.push("/productsForm/AddProductForm"); // Corrected path according to the project structure
    };


    const columns = [
        {field: "productId", headerName: "Product ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "category", headerName: "Category", flex: 1, cellClassName: "name-column--cell"},
        {
          field: "cost", 
          headerName: "Cost", 
          flex: 1,
          renderCell:(params) =>(
              <Typography color={colors.greenAccent[500]}>
                  ${params.row.cost}
              </Typography>
          ),
        },
        {field: "description", headerName: "Description",flex: 2},
        {
          field: "actions",
          headerName: "Actions",
          sortable: false,
          width: 150,
          renderCell: (params) => (
              <>
                  <IconButton onClick={() => handleClickOpenEditDialog(params.row)} color="primary">
                      <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleClickOpenDeleteDialog(params.id)} color="secondary">
                      <DeleteIcon />
                  </IconButton>
              </>
          )
      }
    ]

    return(
        <Box m="20px">
            <Header title="PRODUCTS" subtitle="Managing Products"/>
            <Button
                variant="contained"
                color="primary"
                onClick={handleAddProduct}
                sx={{ 
                  mt: 2, 
                  mb: 4,
                  backgroundColor:'secondary.main',
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
                <DataGrid 
                    rows={data}
                    columns={columns}
                />
            </Box>
            <Dialog open={openEditDialog} onClose={handleCloseEditDialog}>
                  <DialogContent>
                      <EditProductForm userData={editItem} updateUser={handleUpdate} />
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
