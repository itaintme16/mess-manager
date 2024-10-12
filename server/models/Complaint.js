import mongoose from "mongoose";

const ComplaintSchema = mongoose.Schema(
    {
        fullName: String,
        email: String,
        hostel: String,
        room: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        picturePath: {
            type: String,
            default: "",
        },
        upvotes: {
            type: Number,
            default: 0,
        },
        downvotes: {
            type: Number,
            default: 0,
        },
        resolved: {
            type: Boolean,
            default: false,
        },
    },
    { timestaps: true }
);

const Complaint = mongoose.model("Complaint", ComplaintSchema);

export default Complaint;
