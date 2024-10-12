import Menu from "../models/Menu.js";
import Notifs from "../models/Notifs.js";
import Complaint from "../models/Complaint.js";
import Expenses from "../models/Expenses.js";

//create New notification
export const postNotifs = async (req, res) => {
    try {
        const { description } = req.body;
        const newNotice = new Notifs({
            description,
        });
        await newNotice.save();

        res.status(201).json(newNotice);
    } catch (err) {
        res.status(409).json({ message: err.message });
    }
};

//delete Notifications
export const deleteNotifs = async (req, res) => {
    try {
        const { id } = req.params;

        const result = await Notifs.findOneAndDelete({ _id: id });

        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// patch resolved complaint status
export const resolveComplaint = async (req, res) => {
    try {
        const { resolved } = req.body;
        const { id } = req.params;

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            id,
            { resolved: resolved },
            { new: true }
        );

        res.status(200).json(updatedComplaint);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Update mess menu
export const updateMenu = async (req, res) => {
    try {
        const { id } = req.params;
        const { type, field } = req.body;
        let updatedMenu = {};
        if (type === "breakfast") {
            updatedMenu = await Menu.findByIdAndUpdate(
                id,
                { breakfast: field },
                { new: true }
            );
        }
        if (type === "lunch") {
            updatedMenu = await Menu.findByIdAndUpdate(
                id,
                { lunch: field },
                { new: true }
            );
        }
        if (type === "snack") {
            updatedMenu = await Menu.findByIdAndUpdate(
                id,
                { snack: field },
                { new: true }
            );
        }
        if (type === "dinner") {
            updatedMenu = await Menu.findByIdAndUpdate(
                id,
                { dinner: field },
                { new: true }
            );
        }

        res.status(200).json(updateMenu);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

//Add daily expenses
export const postExpenses = async (req, res) => {
    try {
        const { item, rate, units } = req.body;

        const newAddedExpense = new Expenses({
            item,
            rate,
            units,
        });

        const resp = await newAddedExpense.save();
        res.status(200).json(resp);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get expenses data
export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expenses.find();

        res.status(201).json(expenses);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
