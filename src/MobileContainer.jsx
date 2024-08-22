import About from "./sections/About";
import Resume from "./sections/Resume";
import Experience from "./sections/Experience";
import Blog from "./sections/Blog";
import Home from "./sections/Home";
import CopyrightNotice from "./components/CopyrightNotice";


function MobileContainer() {
    return (
        <>
            <Home />
            <About />
            <Resume />
            <Experience />
            <Blog />
            <CopyrightNotice/>
            
        </>
    )
}

export default MobileContainer
