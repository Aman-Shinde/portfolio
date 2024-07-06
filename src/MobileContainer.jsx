import { Box } from '@mui/material';

import About from "./sections/About";
import Resume from "./sections/Resume";
import Experience from "./sections/Experience";
import Blog from "./sections/Blog";
import Home from "./sections/Home";


function MobileContainer() {
    return (

        // <>
        //     <About/>
        //     <Resume/>
        //     <Experience/>
        //     <Blog/>
        // </>
        <>
            <Home />
            <About />
            <Resume />
            <Experience />
            <Blog />
        </>
    )
}

export default MobileContainer
