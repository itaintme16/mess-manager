import express from "express";
import {
    getExpenses,
    resolveComplaint,
    updateMenu,
} from "../controllers/admin.js";
import { deleteNotifs } from "../controllers/admin.js";

const router = express.Router();

router.delete("/notifs/:id", deleteNotifs);

router.patch("/complaint/resolved/:id", resolveComplaint);

router.patch("/menu/update/:id", updateMenu);

router.get("/expenses", getExpenses);

export default router;
