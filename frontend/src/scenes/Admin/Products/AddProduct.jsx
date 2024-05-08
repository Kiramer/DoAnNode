import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header/Header";
import { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { getBase64 } from "../../../utils/base64";
import { BASE_URL } from "../../../config";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const AddForm = ({ createProduct }) => {
  const [base64Image, setBase64Image] = useState("");

  const checkoutSchema = yup.object().shape({
    title: yup.string().required("required"),
    description: yup.string().email("invalid email").required("required"),
    price: yup.string().required("Access level is required"),
    category: yup.string().required("required"),
    brand: yup.string().required("required"),
    quantity: yup.string().required("required"),
    image: yup.string().required("required"),
  });
  
  const initialValues = {
    title: "",
    description: "",
    price: "",
    category: "",
    brand: "",
    quantity: "",
    image: "",
  };
  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    try {
      const base64 = await getBase64(file);
      setBase64Image(base64);
    } catch (error) {
      console.error(error);
      setBase64Image("");
    }
  };
  return (
    <Box m={2}>
      <Header title="CREATE PRODUCT" subtitle="Create New Product" />
      <Formik
        onSubmit={(values) => {
          values.image = base64Image;
          createProduct(values);
        }}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {() => (
          <Form style={{ width: "500px" }}>
            <Box display="flex" flexDirection={"column"} m={2} gap={2}>
              <Field
                as={TextField}
                fullWidth
                label="Title"
                name="title"
                variant="outlined"
              />
              <Field
                as={TextField}
                fullWidth
                label="Discription"
                name="discription"
                variant="outlined"
              />
              <Field
                as={TextField}
                fullWidth
                label="Price"
                name="price"
                variant="outlined"
              />
              <Field
                as={TextField}
                fullWidth
                label="Quantity"
                name="quantity"
                variant="outlined"
              />
              <Field
                as={TextField}
                fullWidth
                label="Address"
                name="address"
                variant="outlined"
              />
              <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                <InputLabel id="access-label">Role</InputLabel>
                <Field
                  as={Select}
                  labelId="access-label"
                  label="Role"
                  name="role"
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="user">User</MenuItem>
                </Field>
              </FormControl>
              <InputLabel id="image-label">Image:</InputLabel>
              <img
                src={base64Image}
                style={{ width: "60px", borderRadius: "50%" }}
                alt=""
              />
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                onChange={handleImageUpload}
              >
                Upload file
                <VisuallyHiddenInput
                  name="image"
                  labelId="image-label"
                  type="file"
                />
              </Button>
            </Box>

            <Box display="flex" justifyContent="end" mt={2}>
              <Button type="submit" color="secondary" variant="contained">
                Create User
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddForm;
