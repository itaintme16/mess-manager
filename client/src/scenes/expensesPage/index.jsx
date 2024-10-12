import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import Form from "./Form";
import { useDispatch, useSelector } from "react-redux";
import { setExpenses } from "state";
import Header from "components/Header";

const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "item",
        headerName: "Item name",
        width: 150,
        editable: true,
    },
    {
        field: "rate",
        headerName: "Rate of item",
        type: "number",
        width: 150,
        editable: true,
    },
    {
        field: "units",
        headerName: "Units ordered",
        type: "number",
        width: 150,
        editable: true,
    },
    {
        field: "totalPrice",
        headerName: "Total Price",
        type: "number",
        width: 150,
        editable: true,
    },
];

const Expenses = () => {
    const dispatch = useDispatch();

    const getExpenses = async () => {
        const response = await fetch("http://localhost:3001/admin/expenses", {
            method: "GET",
        });
        const data = await response.json();
        if (data) {
            dispatch(setExpenses({ expenses: data }));
        }
    };

    useEffect(() => {
        getExpenses();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const expenses = useSelector((state) => state.expenses);

    const formattedExpenses = expenses.map((obj, id) => {
        return { ...obj, id: id, totalPrice: obj.rate * obj.units };
    });

    return (
        <>
            <Header title=" Details of expenses" />
            <Box
                sx={{
                    height: 600,
                    width: "100%",
                }}
            >
                <DataGrid
                    rows={formattedExpenses}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 8,
                            },
                        },
                    }}
                    pageSizeOptions={[5]}
                    checkboxSelection
                    disableRowSelectionOnClick
                />
            </Box>
            <Box>
                <Header title="Add orders" />
                <Form />
            </Box>
        </>
    );
};

export default Expenses;
