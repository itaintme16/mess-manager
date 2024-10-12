import mongoose from "mongoose";

const NotifsSchema = new mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Notifs = mongoose.model("Notifs", NotifsSchema);

export default Notifs;
