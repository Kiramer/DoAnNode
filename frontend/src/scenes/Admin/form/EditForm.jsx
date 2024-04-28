import { Box, Button, TextField, MenuItem, FormControl, InputLabel, Select } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import Header from "../../../components/Header/Header";

const EditForm = ({ userData, updateUser }) => {
    const isNonMobile = useMediaQuery("(min-width:600px)");

    const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const userSchema = yup.object().shape({
        id: yup.string().required("ID is required"),
        name: yup.string().required("Full name is required"),
        age: yup.number().required("Age is required").positive().integer(),
        phone: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required"),
        email: yup.string().email("Invalid email").required("Email is required"),
        access: yup.string().required("Access level is required"),
    });

    const handleFormSubmit = (values) => {
        console.log(values);
        updateUser(values);
    }

    return (
        <Box m="20px">
            <Header title="EDIT USER" subtitle="Edit User Profile"/>
            <Formik
                initialValues={userData}
                validationSchema={userSchema}
                onSubmit={handleFormSubmit}
            >
                {({ values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue }) => (
                    <form onSubmit={handleSubmit}>
                        <Box display="grid" gap="30px" gridTemplateColumns="repeat(4, minmax(0, 1fr))" sx={{"& > div": { gridColumn: isNonMobile ? undefined : "span 4" }}}>
                            <TextField
                                fullWidth
                                variant="filled"
                                label="ID"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.id}
                                name="id"
                                error={!!touched.id && !!errors.id}
                                helperText={touched.id && errors.id}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Full Name"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.name}
                                name="name"
                                error={!!touched.name && !!errors.name}
                                helperText={touched.name && errors.name}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Age"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.age}
                                name="age"
                                error={!!touched.age && !!errors.age}
                                helperText={touched.age && errors.age}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Phone Number"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.phone}
                                name="phone"
                                error={!!touched.phone && !!errors.phone}
                                helperText={touched.phone && errors.phone}
                                sx={{ gridColumn: "span 2" }}
                            />
                            <TextField
                                fullWidth
                                variant="filled"
                                label="Email"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                value={values.email}
                                name="email"
                                error={!!touched.email && !!errors.email}
                                helperText={touched.email && errors.email}
                                sx={{ gridColumn: "span 4" }}
                            />
                            <FormControl fullWidth sx={{ gridColumn: "span 4" }}>
                                <InputLabel id="access-label">Access Level</InputLabel>
                                <Select
                                    labelId="access-label"
                                    value={values.access}
                                    label="Access Level"
                                    onChange={e => setFieldValue('access', e.target.value)}
                                    onBlur={handleBlur}
                                >
                                    <MenuItem value="admin">Admin</MenuItem>
                                    <MenuItem value="manager">Manager</MenuItem>
                                    <MenuItem value="user">User</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <Box display="flex" justifyContent="end" mt="20px">
                            <Button type="submit" color="secondary" variant="contained">
                                Update User
                            </Button>
                        </Box>
                    </form>
                )}
            </Formik>
        </Box>   
    );
};

export default EditForm;
