import React from "react";
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme,
} from "@mui/material";
import {
    HomeOutlined,
    ChevronLeft,
    ReceiptLongOutlined,
    CalendarMonthOutlined,
    SchoolOutlined,
    FestivalOutlined,
    ShoppingCartOutlined,
    AnalyticsOutlined,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";

const Sidebar = ({
    isAdmin,
    isDesktop,
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
}) => {
    const navigate = useNavigate();
    const theme = useTheme();

    return (
        <Box component="nav">
            {isSidebarOpen && (
                <Drawer
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    variant="persistent"
                    anchor="left"
                    sx={{
                        width: drawerWidth,
                        "& .MuiDrawer-paper": {
                            color: theme.palette.primary.dark,
                            backgroundColor: theme.palette.background.alt,
                            boxSixing: "border-box",
                            borderWidth: isDesktop ? "0px" : "2px",
                            width: drawerWidth,
                        },
                    }}
                >
                    <Box width="100%">
                        <Box m="1.5rem 2rem 2rem 3rem">
                            <Box
                                display="flex"
                                justifyContent={"space-between"}
                                alignItems={"center"}
                            >
                                <Box display="flex" alignItems="center">
                                    <Typography
                                        variant="h4"
                                        fontWeight={"bold"}
                                    >
                                        MESS RELAY
                                    </Typography>
                                </Box>
                                {!isDesktop && (
                                    <IconButton
                                        onClick={() =>
                                            setIsSidebarOpen(!isSidebarOpen)
                                        }
                                    >
                                        <ChevronLeft />
                                    </IconButton>
                                )}
                            </Box>
                        </Box>
                        <Box marginTop={"6rem"}>
                            {isAdmin ? (
                                <List>
                                    <ListItem>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/home`);
                                            }}
                                        >
                                            <ListItemIcon>
                                                <HomeOutlined />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Admin Dashboard"}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/menu`);
                                            }}
                                        >
                                            <ListItemIcon>
                                                <CalendarMonthOutlined />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Mess Menu"}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/expenses`);
                                            }}
                                        >
                                            <ListItemIcon>
                                                <ShoppingCartOutlined />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Daily Expenses"}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/analysis`);
                                            }}
                                        >
                                            <ListItemIcon>
                                                <AnalyticsOutlined />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Analysis"}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            ) : (
                                <List>
                                    <ListItem>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/home`);
                                            }}
                                        >
                                            <ListItemIcon>
                                                <HomeOutlined />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Dashboard"}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/complaint`);
                                            }}
                                        >
                                            <ListItemIcon>
                                                <ReceiptLongOutlined />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Raise Complaint"}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                    <ListItem>
                                        <ListItemButton
                                            onClick={() => {
                                                navigate(`/menu`);
                                            }}
                                        >
                                            <ListItemIcon>
                                                <CalendarMonthOutlined />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={"Mess Menu"}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </List>
                            )}
                        </Box>
                    </Box>

                    {/* The common tabs */}
                    <Box position={"absolute"} width={"100%"} bottom={"2rem"}>
                        <Divider />
                        <Box marginTop={"2rem"}>
                            <ListItemButton
                                onClick={() => {
                                    window.open(
                                        "https://sac.mnnit.ac.in/codesangam",
                                        "_blank"
                                    );
                                }}
                            >
                                <ListItemIcon>
                                    <FestivalOutlined />
                                </ListItemIcon>
                                <ListItemText primary={"CodeSangam"} />
                            </ListItemButton>
                            <ListItemButton
                                onClick={() => {
                                    window.open(
                                        "https://mnnit.ac.in",
                                        "_blank"
                                    );
                                }}
                            >
                                <ListItemIcon>
                                    <SchoolOutlined />
                                </ListItemIcon>
                                <ListItemText primary={"MNNIT"} />
                            </ListItemButton>
                        </Box>
                    </Box>
                </Drawer>
            )}
        </Box>
    );
};

export default Sidebar;
