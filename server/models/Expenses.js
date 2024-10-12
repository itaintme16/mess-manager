import mongoose from "mongoose";

const ExpensesSchema = mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    rate: {
        type: Number,
        required: true,
    },
    units: {
        type: Number,
        required: true,
    },
    orderDate: {
        type: Date,
        default: Date.now(),
    },
});

const Expenses = mongoose.model("Expenses", ExpensesSchema);

export default Expenses;
