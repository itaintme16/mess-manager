import { Box } from "@mui/material";
import Header from "components/Header";
import MenuComp from "components/MenuComp";
import React from "react";

const MessMenu = () => {
    return (
        <Box textAlign={"center"}>
            <Box>
                <Header title="MESS MENU" />
            </Box>
            <Box>
                <MenuComp />
            </Box>
        </Box>
    );
};

export default MessMenu;
