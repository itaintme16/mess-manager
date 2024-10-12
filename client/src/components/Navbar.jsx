import React, { useState } from "react";
import {
    Box,
    Typography,
    Menu,
    MenuItem,
    AppBar,
    Button,
    Toolbar,
    IconButton,
    useTheme,
} from "@mui/material";
import {
    Menu as MenuIcon,
    LightModeOutlined,
    DarkModeOutlined,
    ArrowDropDownOutlined,
} from "@mui/icons-material";

import { setLogout, setMode } from "state";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useDispatch();
    const { firstName, lastName } = useSelector((state) => state.user);
    const fullname = firstName + " " + lastName;

    const [anchorEl, setAnchorEl] = useState(null);
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        dispatch(setLogout());
        navigate("/");
    };

    return (
        <AppBar
            sx={{
                position: "static",
                background: "none",
                boxShadow: "none",
            }}
        >
            <Toolbar sx={{ justifyContent: "space-between" }}>
                {/* LEFT SIDE */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IconButton
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Box>

                {/* RIGHT SUDE */}
                <Box
                    gap="1.5rem"
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <IconButton onClick={() => dispatch(setMode())}>
                        {theme.palette.mode === "dark" ? (
                            <DarkModeOutlined />
                        ) : (
                            <LightModeOutlined />
                        )}
                    </IconButton>
                    <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Button
                            onClick={handleClick}
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                gap: "1rem",
                            }}
                        >
                            <Box textAlign={"left"}>
                                <Typography
                                    fontWeight={"bold"}
                                    fontSize={"0.8rem"}
                                    // sx={{ color: "primary" }}
                                >
                                    {fullname}
                                </Typography>
                            </Box>
                            <ArrowDropDownOutlined
                                sx={{
                                    color: "primary",
                                    fontSize: "25px",
                                }}
                            />
                        </Button>
                        <Menu
                            anchorEl={anchorEl}
                            open={isOpen}
                            onClose={handleClose}
                            anchorOrigin={{
                                verticle: "bottom",
                                horizontal: "center",
                            }}
                        >
                            <MenuItem onClick={handleLogout}>LOG OUT</MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
