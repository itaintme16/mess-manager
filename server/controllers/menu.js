import Menu from "../models/Menu.js";

// add a new item to menu
export const addItemToMenu = async (req, res) => {
    try {
        const menuItem = await Menu.create(req.body);
        // to send and save data at the backend in json form
        res.send(menuItem);
    } catch (err) {
        res.send({ msg: err.message });
    }
};

//see all days menu
export const viewMenu = async (req, res) => {
    try {
        const menus = await Menu.find();
        res.send(menus);
    } catch (err) {
        res.send({ msg: err.message });
    }
};

// see the menu of a day (one will need to enter "id" in the url)
export const viewDayMenu = async (req, res) => {
    try {
        const day = req.params.Day;
        // console.log(day);
        const dayMenu = await Menu.findOne({ Day: day });
        if (!dayMenu) {
            return res.send("Enter a correct Day");
        }
        res.send(dayMenu);
    } catch (err) {
        res.send({ msg: err.message });
    }
};

// Delete a Whole(all days)Menu
export const deleteMenu = async (req, res) => {
    try {
        // empty object to delete all
        await Menu.deletemany({});
        res.send("All Days Menu Deleted");
    } catch (err) {
        res.send({ msg: err.message });
    }
};

// Delete a single Day Menu
export const deleteDayMenu = async (req, res) => {
    try {
        const day = req.params.Day;
        console.log(day);
        await Menu.deleteOne({ Day: day });
        res.send(`Deleted menu of Day ${day}`);
    } catch (err) {
        res.send({ msg: err.message });
    }
};
