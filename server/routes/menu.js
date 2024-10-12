import express from "express";

import {
    viewMenu,
    addItemToMenu,
    viewDayMenu,
    deleteMenu,
    deleteDayMenu,
} from "../controllers/MenuCtrl.js";
const Router = express.Router();

//get(View) Whole Menu
Router.get("/admin/getmenu", viewMenu);

// create a menu
Router.post("/setmenu", addItemToMenu);

//to see Menu of a Day (we use the params(day) of our request)
Router.get("/admin/getMenu/:Day", viewDayMenu);

//Delete Menu(All Days)
Router.delete("admin/deleteMenu", deleteMenu);

//Delete single day menu
Router.delete("admin/deleteDayMenu/:Day", deleteDayMenu);

export default Router;
