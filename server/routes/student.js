import express from "express";
import {
    downvoteComplaint,
    getComplaints,
    getMessMenu,
    getNotifs,
    upvoteComplaint,
} from "../controllers/student.js";

const router = express.Router();

// get notifications
router.get("/notifs", getNotifs);

// get complaints
router.get("/complaints", getComplaints);

// upvote a complaint and update
router.patch("/complaint/upvote/:id", upvoteComplaint);

//downvote a complaint
router.patch("/complaint/downvote/:id", downvoteComplaint);

// get mess menu
router.get("/menu", getMessMenu);

export default router;
