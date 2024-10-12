import React from "react";
import { Box, Typography } from "@mui/material";

const Header = ({ title, subtitle }) => {
    return (
        <Box ml={"1rem"}>
            <Typography
                variant="h4"
                fontWeight={"bold"}
                sx={{
                    mb: "5px",
                }}
            >
                {title}
            </Typography>
            <Typography variant="h5">{subtitle}</Typography>
        </Box>
    );
};

export default Header;
