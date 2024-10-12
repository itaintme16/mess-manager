import React, { useState } from "react";
import { Box, Rating, Typography } from "@mui/material";

const labels = {
    1: "Tasteless",
    2: "Poor",
    3: "Ok",
    4: "Good",
    5: "Excellent",
};

const getLabelText = (value) => {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
};

const MealRating = () => {
    const [value, setValue] = useState(2);
    const [hover, setHover] = useState(-1);

    return (
        <>
            <Typography variant="h5">Rate your last meal</Typography>
            <Box
                sx={{
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                }}
            >
                <Rating
                    name="hover-feedback"
                    value={value}
                    getLabelText={getLabelText}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover);
                    }}
                    size="large"
                />
                {value !== null && (
                    <Box sx={{ ml: 2 }}>
                        {labels[hover !== -1 ? hover : value]}
                    </Box>
                )}
            </Box>
        </>
    );
};

export default MealRating;
