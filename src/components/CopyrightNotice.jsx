import React from 'react'
import Box from '@mui/material/Box';

function CopyrightNotice() {
    return (
        <Box
            className="font-size-md lato-light"
            sx={{
                marginTop: "96px",
                textAlign: "center",
                display: { lg: 'none', md: 'none', sm: 'block', xs: 'block' }
            }}
        >
            &copy; 2024 &nbsp; Aman Shinde. &nbsp; All rights reserved.
        </Box>
    )
}

export default CopyrightNotice
