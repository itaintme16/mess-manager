import Form from "./Form";
import { Box, Typography, useMediaQuery } from "@mui/material";

const LoginPage = () => {
    const isDesktop = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Box
                width="100%"
                // backgroundColor={primary}
                p="1rem 6%"
                textAlign="center"
            >
                <Typography fontWeight="bold" fontSize="32px" color="secondary">
                    Imperial Mess relay
                </Typography>
            </Box>

            <Box
                width={isDesktop ? "50%" : "93%"}
                p="2rem"
                m="2rem auto"
                borderRadius="1.5rem"
                // backgroundColor={grey}
            >
                <Form />
            </Box>
        </Box>
    );
};

export default LoginPage;
