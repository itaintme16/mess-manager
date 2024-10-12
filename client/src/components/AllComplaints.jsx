import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setComplaints } from "state";
import Complaint from "./Complaint";
import { Typography } from "@mui/material";

const AllComplaints = () => {
    const dispatch = useDispatch();

    const complaints = useSelector((state) => state.complaints);
    const { role } = useSelector((state) => state.user);
    const isAdmin = role === "admin";

    const getComplaints = async () => {
        const response = await fetch(
            "http://localhost:3001/student/complaints",
            {
                method: "GET",
            }
        );
        const data = await response.json();
        dispatch(setComplaints({ complaints: data }));
    };

    useEffect(() => {
        getComplaints();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
            <Typography
                variant="h6"
                // margin={"1rem 1rem 1rem 1rem"}
                sx={{
                    textDecoration: "underline",
                }}
            >
                ALL COMPLAINTS
            </Typography>
            {complaints.map(
                ({
                    _id,
                    fullName,
                    email,
                    hostel,
                    room,
                    description,
                    picturePath,
                    upvotes,
                    downvotes,
                    resolved,
                }) => (
                    <Complaint
                        key={_id}
                        complaintId={_id}
                        fullName={fullName}
                        hostel={hostel}
                        room={room}
                        description={description}
                        picturePath={picturePath}
                        upvotes={upvotes}
                        downvotes={downvotes}
                        resolved={resolved}
                        isAdmin={isAdmin}
                    />
                )
            )}
        </>
    );
};

export default AllComplaints;
