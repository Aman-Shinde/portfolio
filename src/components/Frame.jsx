import React from 'react';
import { Box, Link } from '@mui/material';

const BASE_URL = '/portfolio/';

const frameStyles = {
  frameContainer: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100vh",
    overflow: "hidden"
  },
  topBottomBar: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: { lg: "50px", md: "50px", sm: "30px", xs: "30px" },
    backgroundColor: "white"
  },
  topBar: {
    top: 0,
  },
  bottomBar: {
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'
  },
  bottomBarCopy: {
    display: { lg: "block", md: "block", sm: "none", xs: "none" }
  },
  topBottomLine: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: 'black',
    display: { lg: 'block', md: 'block', sm: 'none', xs: 'none' }
  },
  topLine: {
    top: { lg: "50px", md: "50px", sm: "30px", xs: "30px" }
  },
  bottomLine: {
    bottom: { lg: "50px", md: "50px", sm: "30px", xs: "30px" }
  },
  sideLine: {
    position: "absolute",
    top: 0,
    width: "1px",
    height: "100%",
    backgroundColor: 'black'
  },
  leftLine: {
    left: { lg: "20px", md: "20px", sm: "30px", xs: "30px" }
  },
  rightLine: {
    right: { lg: "20px", md: "20px", sm: "30px", xs: "30px" }
  },
  cornerBox: {
    position: "absolute",
    width: { lg: "20px", md: "20px", sm: "30px", xs: "30px" },
    height: "10px",
    backgroundColor: 'black'
  },
  topLeftBox: {
    left: 0,
    top: "20px"
  },
  topRightBox: {
    right: 0,
    top: "20px"
  },
  bottomLeftBox: {
    left: 0,
    bottom: "20px"
  },
  bottomRightBox: {
    right: 0,
    bottom: "20px"
  },
  verticalLinkContainer: {
    display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
    position: "absolute",
    height: "16px",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  horizontalLinkContainer: {
    display: { lg: "flex", md: "flex", sm: "none", xs: "none" },
    position: "absolute",
    height: "50px",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  leftVerticalLinkContainer: {
    width: "100vh",
    left: "4px",
    transformOrigin: "right top",
    transform: "translate(-100%) rotate(-90deg)"
  },
  rightVerticalLinkContainer: {
    width: "100vh",
    right: "4px",
    transformOrigin: "left top",
    transform: "translate(100%) rotate(90deg)"
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
  desktopLink: {
    textDecoration: "none",
    color: "black",
    padding: "0px 4px",
    borderLeft: "1px solid black",
    borderRight: "1px solid black",
    '&:hover': {
      color: "white",
      backgroundColor: "black"
    }
  }
};

function Frame({ pageType }) {

  const desktopDisplayLinks = {
    display: frameStyles.horizontalLinkContainer.display
  };

  const mobileDisplayLinks = {
    display: frameStyles.verticalLinkContainer.display
  };

  if (pageType == 'blogPage') {
    desktopDisplayLinks.display = "none !important";
    mobileDisplayLinks.display = "none !important";
  }

  return (
    <Box sx={frameStyles.frameContainer}>
      <Box sx={{ ...frameStyles.topBottomBar, ...frameStyles.topBar, ...frameStyles.horizontalLinkContainer, ...desktopDisplayLinks }}>
        <Link className="lato-regular font-size-md" href="#home" underline="none" sx={frameStyles.desktopLink}>  Home  </Link>
        <Link className="lato-regular font-size-md" href="#about" underline="none" sx={frameStyles.desktopLink}>  About  </Link>
        <Link className="lato-regular font-size-md" href="#resume" underline="none" sx={frameStyles.desktopLink}>  Resume  </Link>
        <Link className="lato-regular font-size-md" href="#work" underline="none" sx={frameStyles.desktopLink}>  Experience  </Link>
        <Link className="lato-regular font-size-md" href="#blog" underline="none" sx={frameStyles.desktopLink}>  Blogs  </Link>
      </Box>
      <Box sx={{ ...frameStyles.topBottomBar, ...frameStyles.bottomBar }}>
        <Box sx={{ ...frameStyles.bottomBarCopy }} className="font-size-md lato-light">&copy; 2024 &nbsp; Aman Shinde. &nbsp; All rights reserved.</Box>
      </Box>
      <Box sx={{ ...frameStyles.topBottomLine, ...frameStyles.topLine }}></Box>
      <Box sx={{ ...frameStyles.topBottomLine, ...frameStyles.bottomLine }}></Box>
      <Box sx={{ ...frameStyles.sideLine, ...frameStyles.leftLine }}></Box>
      <Box sx={{ ...frameStyles.sideLine, ...frameStyles.rightLine }}></Box>
      <Box sx={{ ...frameStyles.cornerBox, ...frameStyles.topLeftBox }}></Box>
      <Box sx={{ ...frameStyles.cornerBox, ...frameStyles.topRightBox }}></Box>
      <Box sx={{ ...frameStyles.cornerBox, ...frameStyles.bottomLeftBox }}></Box>
      <Box sx={{ ...frameStyles.cornerBox, ...frameStyles.bottomRightBox }}></Box>

      <Box sx={{ ...frameStyles.verticalLinkContainer, ...frameStyles.leftVerticalLinkContainer, ...mobileDisplayLinks }}>
        <Link className="lato-light font-size-md" href="#home" underline="none" sx={frameStyles.link}> &#124; Home &#124; </Link>
        <Link className="lato-light font-size-md" href="#about" underline="none" sx={frameStyles.link}> &#124; About &#124; </Link>
        <Link className="lato-light font-size-md" href="#resume" underline="none" sx={frameStyles.link}> &#124; Resume &#124; </Link>
      </Box>

      <Box sx={{ ...frameStyles.verticalLinkContainer, ...frameStyles.rightVerticalLinkContainer, ...mobileDisplayLinks }}>
        <Link className="lato-light font-size-md" href="#work" underline="none" sx={frameStyles.link}> &#124; Experience &#124; </Link>
        <Link className="lato-light font-size-md" href="#blog" underline="none" sx={frameStyles.link}> &#124; Blogs &#124; </Link>
        <Link className="lato-light font-size-md" href={`${BASE_URL}resume.pdf`} rel="noopener noreferrer" sx={frameStyles.link}> &#124; Download CV &#124; </Link>
      </Box>
    </Box>
  );
}

export default Frame;