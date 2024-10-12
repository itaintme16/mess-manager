import Complaint from "../models/Complaint.js";
import Menu from "../models/Menu.js";
import Notifs from "../models/Notifs.js";

//get Notifications
export const getNotifs = async (req, res) => {
    try {
        const notifs = await Notifs.find();
        res.status(200).json(notifs);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

// get complaints
export const getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json(complaints);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

//post complaints
export const postComplaint = async (req, res) => {
    try {
        const { fullName, email, hostel, room, description, picturePath } =
            req.body;

        const newComplaint = new Complaint({
            fullName,
            email,
            hostel,
            room,
            description,
            picturePath,
        });

        const savedComplaint = await newComplaint.save();
        res.status(201).json(savedComplaint);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// update upvote complaints
export const upvoteComplaint = async (req, res) => {
    try {
        const { upvote } = req.body;
        const { id } = req.params;

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            id,
            { upvotes: upvote },
            { new: true }
        );

        res.status(200).json(updatedComplaint);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

//update downvote complaints
export const downvoteComplaint = async (req, res) => {
    try {
        const { downvote } = req.body;
        const { id } = req.params;

        const updatedComplaint = await Complaint.findByIdAndUpdate(
            id,
            { downvotes: downvote },
            { new: true }
        );

        res.status(200).json(updatedComplaint);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};

//get mess menu
export const getMessMenu = async (req, res) => {
    try {
        const messMenu = await Menu.find();
        res.status(200).json(messMenu);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
};
