import React from 'react';
import { Box } from '@mui/material';

const Loader = () => {
    const loaderStyles = {
        width: '50px',
        margin: 'calc(50vh - 25px) auto',
        aspectRatio: '.75',
        '--c': 'no-repeat linear-gradient(#000 0 0)',
        background: `var(--c) 0% 50%, var(--c) 50% 50%, var(--c) 100% 50%`,
        animation: 'loader 1s infinite linear alternate',
    };

    return (
        <Box sx={loaderStyles}>

        </Box>
    );
};

export default Loader;
