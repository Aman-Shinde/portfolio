import React from 'react'
import { Box } from '@mui/material';

function NewLayout({ children }) {

    const containerWrapperStyle = {
        position: "relative",
        padding: { lg: "48px", md: "32px", sm: "16px", xs: "16px" },
        margin: { lg: "50px 20px", md: "50px 20px", sm: "30px 30px", xs: "30px 30px" },
        height: { lg: "calc(100vh - 100px)", md: "calc(100vh - 100px)", sm: "auto", xs: "auto" },
        maxWidth: "100%"
    };

    const containerStyle = {
        width: { lg: "1100px", md: "100%", sm: "100%", xs: "100%" },
        height: "100%",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        margin: "0px auto",
        justifyContent: "space-between"
    };


    return (
        <Box sx={containerWrapperStyle}>

            <Box sx={containerStyle}>

                <Box className="main-container" sx={{ height: "100%", width: { lg: "680px", md: "400px", sm: "100%", xs: "100%" }, overflowY: "scroll", margin: "0px auto", scrollBehavior: "smooth" }}>
                    
                    {children}

                </Box>

            </Box>

        </Box>
    )
}

export default NewLayout
