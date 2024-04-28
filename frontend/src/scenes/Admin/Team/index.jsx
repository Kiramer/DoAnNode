import { useState } from "react";
import { Box, Typography, useTheme, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../../theme";
import { mockDataTeam} from "../../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../../../components/Header/Header";
import EditForm from "../form/EditForm";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState(mockDataTeam);
    const [openEditDialog, setOpenEditDialog] = useState(false);
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const [editItem, setEditItem] = useState(null);
    const [deleteId, setDeleteId] = useState(null);


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

    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: "name-column--cell"},
        {field: "age", headerName: "Age", type: "number", headerAlign: "left", align: "left"},
        {field: "phone", headerName: "Phone Number",flex: 1},
        {field: "email",headerName: "Email", flex: 1},
        {
            field: "access", 
            headerName: "Access Level", 
            flex: 1, 
            renderCell: ({row: {access}}) =>{
                return (
                    <Box 
                        width="60%" 
                        m="0 auto" 
                        p="5px" 
                        display="flex" 
                        justifyContent="center" 
                        backgroundColor={access === "admin" ? colors.greenAccent[600]:colors.greenAccent[700]} 
                        borderRadius="4px"
                    >
                        {access==="admin" && <AdminPanelSettingsOutlinedIcon/>}
                        {access==="manager" && <SecurityOutlinedIcon/>}
                        {access==="user" && <LockOpenOutlinedIcon/>}

                        <Typography color={colors.grey[100]} sx={{ml: "5px"}}>
                            {access}
                        </Typography>
                    </Box>
                );
            }
          },
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
            <Header title="TEAM" subtitle="Managing Team Members"/>
            <Box
                m="40px 0 0 0"
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
                      <EditForm userData={editItem} updateUser={handleUpdate} />
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

export default Team;
