import { Formik } from "formik";
import {
    Button,
    Paper,
    TextField,
    useMediaQuery,
    // useTheme;
} from "@mui/material";
import { useDispatch } from "react-redux";

import * as yup from "yup";
import { addExpense } from "state";

const complaintSchema = yup.object().shape({
    item: yup.string().required("Required"),
    rate: yup.number().required("Required"),
    units: yup.number().required("Required"),
});

const initialComplaintValues = {
    item: "",
    rate: "",
    units: "",
};

const Form = () => {
    const dispatch = useDispatch();

    const isDesktop = useMediaQuery("(min-width:600px)");

    const registerComplaint = async (values, onSubmitProps) => {
        const formData = new FormData();
        for (let value in values) {
            formData.append(value, values[value]);
        }
        // for (const pair of formData.entries()) {
        //     console.log(pair[0] + ", " + pair[1]);
        // }

        const savedUserResponse = await fetch(
            "http://localhost:3001/admin/expenses/add",
            {
                method: "POST",
                body: formData,
            }
        );
        // console.log(savedUserResponse);
        const savedExpense = await savedUserResponse.json();

        onSubmitProps.resetForm();
        if (savedExpense) {
            dispatch(addExpense(savedExpense));
        }
    };

    const handleFormSubmit = async (values, onSubmitProps) => {
        registerComplaint(values, onSubmitProps);
    };

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialComplaintValues}
            validationSchema={complaintSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Paper
                        sx={{
                            // width: "inherit",
                            position: "fixed",
                            bottom: 10,
                            // left: 3,
                            right: 0,
                            padding: "16px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                        elevation={3}
                        // border={"1px solid"}
                        // borderRadius={"1rem"}
                        // display="flex"
                        // gap="20px"
                        // m={"0rem 6rem 0rem 6rem"}

                        // sx={{
                        //     "& > div": {
                        //         gridColumn: isDesktop ? undefined : "span 4",
                        //     },
                        // }}
                    >
                        <TextField
                            label="Name of the Item"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.item}
                            name="item"
                            error={
                                Boolean(touched.item) && Boolean(errors.item)
                            }
                            helperText={touched.item && errors.item}
                        />
                        <TextField
                            label="Rate per Unit"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.rate}
                            name="rate"
                            error={
                                Boolean(touched.rate) && Boolean(errors.rate)
                            }
                            helperText={touched.rate && errors.rate}
                        />
                        <TextField
                            label="Number of Units"
                            onBlur={handleBlur}
                            onChange={handleChange}
                            value={values.units}
                            name="units"
                            error={
                                Boolean(touched.units) && Boolean(errors.units)
                            }
                            helperText={touched.units && errors.units}
                        />
                        <Button
                            fullwidth="true"
                            type="submit"
                            sx={{
                                // backgroundColor={primary}
                                color: "primary",
                                "&:hover": { color: "secondary" },
                            }}
                            disabled={
                                !(values.item && values.rate && values.units)
                            }
                        >
                            ADD
                        </Button>
                    </Paper>
                </form>
            )}
        </Formik>
    );
};

export default Form;
