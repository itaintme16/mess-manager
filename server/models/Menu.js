import mongoose from "mongoose";

const MenuSchema = mongoose.Schema({
    day: {
        type: String,
        required: true,
    },
    breakfast: String,
    lunch: String,
    snack: String,
    dinner: String,
});

const Menu = mongoose.model("Menu", MenuSchema);
export default Menu;
