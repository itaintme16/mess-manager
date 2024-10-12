import React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { useSelector } from "react-redux";
import { PieChart } from "@mui/x-charts";
import { Box } from "@mui/material";
import Header from "components/Header";

const chartSettings = {
    xAxis: [
        {
            label: "Total Price (INR)",
        },
    ],
    width: 1000,
    height: 500,
};

const Analysis = () => {
    // const dispatch = useDispatch();
    const expenses = useSelector((state) => state.expenses);
    // const [expenses, setExpenses] = useState();

    // const getExpenses = async () => {
    //     const response = await fetch("http://localhost:3001/admin/expenses", {
    //         method: "GET",
    //     });
    //     const data = await response.json();
    //     if (data) {
    //         setExpenses(data);
    //     }
    // };

    // useEffect(() => {
    //     getExpenses();
    // }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const dataset = expenses.map((obj) => {
        return { item: obj.item, totalPrice: obj.rate * obj.units };
    });
    const pieData = expenses.map((obj, id) => {
        return { label: obj.item, value: obj.rate * obj.units, id: id };
    });

    return (
        <>
            <Header title="Analysis of Expenses" />
            <Box
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <BarChart
                    dataset={dataset}
                    yAxis={[{ scaleType: "band", dataKey: "item" }]}
                    series={[{ dataKey: "totalPrice" }]}
                    layout="horizontal"
                    {...chartSettings}
                />
                <PieChart
                    series={[{ data: pieData }]}
                    width={1000}
                    height={500}
                    sx={{ mt: "3rem" }}
                />
            </Box>
        </>
    );
};

export default Analysis;
