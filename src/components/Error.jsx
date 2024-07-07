import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Error = () => {
    return (
        <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: {lg: '100%', md: '100%', sm: 'calc(100vh - 100px)', xs: 'calc(100vh - 100px)'}, 
            textAlign: 'center' 
        }}>
            <ErrorOutlineIcon sx={{ fontSize: 60, color: 'red', marginBottom: 2 }} />
            <Typography variant="h4" className="lato-black font-size-xl font-size-xl-res" sx={{ marginBottom: 2 }}>
                Oops! Something went wrong.
            </Typography>
        </Box>
    );
};

export default Error;
