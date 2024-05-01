import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  useMediaQuery,
  MenuItem,
} from "@mui/material";
import { Formik, Field, Form } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header/Header";

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const userSchema = yup.object().shape({
  name: yup.string().required("Full name is required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  role: yup.string().required("Access level is required"),
});

const EditForm = ({ userData, updateUser }) => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  return (
    <Box m="20px">
      <Header title="EDIT USER" subtitle="Edit User Profile" />
      <Formik
        initialValues={userData}
        validationSchema={userSchema}
        onSubmit={updateUser}
      >
        <Form>
          <Box
            display="grid"
            gap="30px"
            gridTemplateColumns="repeat(4, minmax(0, 1fr))"
            sx={{
              "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
            }}
          >
            <Field
              as={TextField}
              fullWidth
              variant="filled"
              label="ID"
              name="_id"
              sx={{ gridColumn: "span 4" }}
              disabled
            />
            <Field
              as={TextField}
              fullWidth
              variant="filled"
              label="Full Name"
              name="name"
              sx={{ gridColumn: "span 2" }}
            />
            <Field
              as={TextField}
              fullWidth
              variant="filled"
              label="Phone Number"
              name="phone"
              sx={{ gridColumn: "span 2" }}
            />
            <Field
              as={TextField}
              fullWidth
              variant="filled"
              label="Email"
              name="email"
              sx={{ gridColumn: "span 4" }}
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
          </Box>
          <Box display="flex" justifyContent="end" mt="20px">
            <Button type="submit" color="secondary" variant="contained">
              Update User
            </Button>
          </Box>
        </Form>
      </Formik>
    </Box>
  );
};

export default EditForm;
