import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNotifs } from "state";
import Notif from "./Notif";
import { Box, Typography, useTheme } from "@mui/material";

const Notification = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const notifs = useSelector((state) => state.notifs);
    const { role } = useSelector((state) => state.user);
    const isAdmin = role === "admin";

    const getNotifs = async () => {
        const response = await fetch("http://localhost:3001/student/notifs", {
            method: "GET",
        });
        const data = await response.json();
        dispatch(setNotifs({ notifs: data }));
    };

    useEffect(() => {
        getNotifs();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <Box
            border={"1px solid"}
            borderRadius={"1rem"}
            overflow={"scroll"}
            sx={{
                "&::-webkit-scrollbar": {
                    width: 1,
                },
                "&::-webkit-scrollbar-track": {
                    backgroundColor: "primary",
                },
                "&::-webkit-scrollbar-thumb": {
                    borderRadius: 10,
                    backgroundColor: "primary",
                },
                backgroundColor: theme.palette.background.secondary,
            }}
        >
            <Typography
                variant="h6"
                margin={"1rem 1rem 1rem 1rem"}
                sx={{
                    textDecoration: "underline",
                }}
            >
                NOTIFICATIONS
            </Typography>
            {notifs.map(({ _id, description }) => (
                <Notif
                    key={_id}
                    notifId={_id}
                    description={description}
                    isAdmin={isAdmin}
                />
            ))}
        </Box>
    );
};

export default Notification;
