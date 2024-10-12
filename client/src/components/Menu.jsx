import React, { useState } from "react";
import { Typography, Divider, Box, TextField, IconButton } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { setUpdateMessMenu } from "state";

const Menu = ({ menuId, day, breakfast, lunch, snack, dinner, isEditable }) => {
    const dispatch = useDispatch();

    const dayA = day.toUpperCase();
    const breakfastA = breakfast.toUpperCase();
    const lunchA = lunch.toUpperCase();
    const snackA = snack.toUpperCase();
    const dinnerA = dinner.toUpperCase();

    const [isEditBreakfast, setIsEditBreakfast] = useState("false");
    const [isEditLunch, setIsEditLunch] = useState("false");
    const [isEditSnack, setIsEditSnack] = useState("false");
    const [isEditDinner, setIsEditDinner] = useState("false");

    const [editedBreakValue, setEditedBreakValue] = useState(breakfastA);
    const [editedLunchValue, setEditedLunchValue] = useState(lunchA);
    const [editedSnackValue, setEditedSnackValue] = useState(snackA);
    const [editedDinnerValue, setEditedDinnerValue] = useState(dinnerA);

    const handleBreakfastClick = () => {
        if (isEditable) {
            setIsEditBreakfast(true);
        }
    };
    const handleLunchClick = () => {
        if (isEditable) {
            setIsEditLunch(true);
        }
    };
    const handleSnackClick = () => {
        if (isEditable) {
            setIsEditSnack(true);
        }
    };
    const handleDinnerClick = () => {
        if (isEditable) {
            setIsEditDinner(true);
        }
    };

    const handleBreakChange = (e) => {
        setEditedBreakValue(e.target.value);
    };
    const handleLunchChange = (e) => {
        setEditedLunchValue(e.target.value);
    };
    const handleSnackChange = (e) => {
        setEditedSnackValue(e.target.value);
    };
    const handleDinnerChange = (e) => {
        setEditedDinnerValue(e.target.value);
    };

    const handleBreakfastEdit = async () => {
        const response = await fetch(
            `http://localhost:3001/admin/menu/update/${menuId}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "breakfast",
                    field: editedBreakValue,
                }),
            }
        );
        const updatedMenu = await response.json();
        dispatch(setUpdateMessMenu({ menu: updatedMenu }));
        setIsEditBreakfast(false);
    };
    const handleLunchEdit = async () => {
        const response = await fetch(
            `http://localhost:3001/admin/menu/update/${menuId}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "lunch",
                    field: editedLunchValue,
                }),
            }
        );
        const updatedMenu = await response.json();
        dispatch(setUpdateMessMenu({ menu: updatedMenu }));
        setIsEditLunch(false);
    };
    const handleSnackEdit = async () => {
        const response = await fetch(
            `http://localhost:3001/admin/menu/update/${menuId}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "snack",
                    field: editedSnackValue,
                }),
            }
        );
        const updatedMenu = await response.json();
        dispatch(setUpdateMessMenu({ menu: updatedMenu }));
        setIsEditSnack(false);
    };
    const handleDinnerEdit = async () => {
        const response = await fetch(
            `http://localhost:3001/admin/menu/update/${menuId}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    type: "dinner",
                    field: editedDinnerValue,
                }),
            }
        );
        const updatedMenu = await response.json();
        dispatch(setUpdateMessMenu({ menu: updatedMenu }));
        setIsEditDinner(false);
    };

    return (
        <Box
            border={"1px solid"}
            borderRadius={"1rem"}
            margin={"1rem 1rem 1rem 1rem"}
        >
            <Typography
                variant="h4"
                margin={"1rem 1rem 1rem 1rem"}
                padding={"1rem 1rem 1rem 1rem"}
            >
                {dayA}
            </Typography>
            <Box
                width={"100%"}
                // display={"flex"}
                // flexDirection={"column"}
                // justifyContent={"space-around"}
                // alignItems={"center"}
            >
                <Divider textAlign="left">Breakfast</Divider>
                <Box
                    onHover
                    onClick={handleBreakfastClick}
                    sx={{
                        m: "1rem 1rem",
                        transition: "transform 0.2s", // Add a smooth transition effect
                        ...(isEditable && {
                            "&:hover": {
                                transform: "scale(1.1)", // Increase the scale on hover
                            },
                        }),
                    }}
                >
                    <>{breakfastA}</>
                    {/* {isEditBreakfast ? (
                        <>
                            <TextField
                                value={editedBreakValue}
                                onChange={handleBreakChange}
                                // onBlur={handleTextFieldBlur}
                                autoFocus // Autofocus on the TextField when in editing mode
                            />
                            <IconButton onClick={handleBreakfastEdit}>
                                <CheckCircle />
                            </IconButton>
                        </>
                    ) : (
                    )} */}
                </Box>
                <Divider textAlign="left">Lunch</Divider>
                <Box
                    onHover
                    onClick={handleLunchClick}
                    sx={{
                        m: "1rem 1rem",
                        transition: "transform 0.2s", // Add a smooth transition effect
                        ...(isEditable && {
                            "&:hover": {
                                transform: "scale(1.1)", // Increase the scale on hover
                            },
                        }),
                    }}
                >
                    <>{lunchA}</>
                    {/* {isEditLunch ? (
                        <>
                            <TextField
                                value={editedLunchValue}
                                onChange={handleLunchChange}
                                // onBlur={handleTextFieldBlur}
                                autoFocus // Autofocus on the TextField when in editing mode
                            />
                            <IconButton onClick={handleLunchEdit}>
                                <CheckCircle />
                            </IconButton>
                        </>
                    ) : (
                    )} */}
                </Box>
                <Divider textAlign="left">Snack</Divider>
                <Box
                    onHover
                    onClick={handleSnackClick}
                    sx={{
                        m: "1rem 1rem",
                        transition: "transform 0.2s", // Add a smooth transition effect
                        ...(isEditable && {
                            "&:hover": {
                                transform: "scale(1.1)", // Increase the scale on hover
                            },
                        }),
                    }}
                >
                    <>{snackA}</>
                    {/* {isEditSnack ? (
                        <>
                            <TextField
                                value={editedSnackValue}
                                onChange={handleSnackChange}
                                // onBlur={handleTextFieldBlur}
                                autoFocus // Autofocus on the TextField when in editing mode
                            />
                            <IconButton onClick={handleSnackEdit}>
                                <CheckCircle />
                            </IconButton>
                        </>
                    ) : (
                    )} */}
                </Box>
                <Divider textAlign="left">Dinner</Divider>
                <Box
                    onHover
                    onClick={handleDinnerClick}
                    sx={{
                        m: "1rem 1rem",
                        transition: "transform 0.2s", // Add a smooth transition effect
                        ...(isEditable && {
                            "&:hover": {
                                transform: "scale(1.1)", // Increase the scale on hover
                            },
                        }),
                    }}
                >
                    <>{dinnerA}</>
                    {/* {isEditDinner ? (
                        <>
                            <TextField
                                value={editedDinnerValue}
                                onChange={handleDinnerChange}
                                // onBlur={handleTextFieldBlur}
                                autoFocus // Autofocus on the TextField when in editing mode
                            />
                            <IconButton onClick={handleDinnerEdit}>
                                <CheckCircle />
                            </IconButton>
                        </>
                    ) : (
                    )} */}
                </Box>
            </Box>
        </Box>
    );
};

export default Menu;
