import Header from "components/Header";
import Form from "./Form";
import { Box, useMediaQuery } from "@mui/material";

const ComplaintPage = () => {
    const isDesktop = useMediaQuery("(min-width: 1000px)");
    return (
        <Box>
            <Box
                // width="100%"
                // backgroundColor={primary}
                p="1rem 6%"
                textAlign="center"
            >
                <Header title="REGISTER COMPLAINT" />
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

export default ComplaintPage;
