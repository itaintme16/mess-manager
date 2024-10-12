import { Box, IconButton } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessMenu } from "state";
import Menu from "./Menu";
import {
    ModeEditOutlineOutlined,
    DoneOutlineOutlined,
} from "@mui/icons-material";
import { useState } from "react";

const MenuComp = () => {
    const dispatch = useDispatch();
    const messMenu = useSelector((state) => state.messMenu);
    const { role } = useSelector((state) => state.user);
    const isAdmin = role === "admin";

    const [isEditable, setIsEditable] = useState("false");

    const getMessMenu = async () => {
        const response = await fetch("http://localhost:3001/student/menu", {
            method: "GET",
        });
        const data = await response.json();
        dispatch(setMessMenu({ messMenu: data }));
    };

    useEffect(() => {
        getMessMenu();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box>
            <Box
                display={"flex"}
                justifyContent={"space-between"}
                // alignItems={"center"}
                // flexDirection={"column"}
                borderRadius={"1rem"}
                margin={"1rem 1rem 1rem 1rem"}
                // border={"1px solid"}
                height={"35rem"}
                width={"15rem"}
            >
                {messMenu.map(
                    ({ _id, day, breakfast, lunch, snack, dinner }) => (
                        <Menu
                            key={_id}
                            menuId={_id}
                            day={day}
                            breakfast={breakfast}
                            lunch={lunch}
                            snack={snack}
                            dinner={dinner}
                            isEditable={isEditable}
                        />
                    )
                )}
            </Box>
            {isAdmin && (
                <>
                    {!isEditable ? (
                        <IconButton onClick={() => setIsEditable(!isEditable)}>
                            <Box>UPDATE MENU</Box>
                            <ModeEditOutlineOutlined />
                        </IconButton>
                    ) : (
                        <IconButton onClick={() => setIsEditable(!isEditable)}>
                            <Box>DONE</Box>
                            <DoneOutlineOutlined />
                        </IconButton>
                    )}
                </>
            )}
        </Box>
    );
};

export default MenuComp;
