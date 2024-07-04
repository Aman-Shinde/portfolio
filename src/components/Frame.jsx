import React from 'react';
import { Box, Link } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import BookIcon from '@mui/icons-material/Book';

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
  },
  topBottomLine: {
    position: "absolute",
    left: 0,
    width: "100%",
    height: "1px",
    backgroundColor: 'black',
    display: {lg:'block', md: 'block', sm: 'none', xs: 'none'}
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
    '&:hover' : {
      color: "white",
      backgroundColor: "black"
    }
  }
};

function Frame() {
  return (
    <Box sx={frameStyles.frameContainer}>
      <Box sx={{ ...frameStyles.topBottomBar, ...frameStyles.topBar, ...frameStyles.horizontalLinkContainer }}>
        <Link className="lato-regular font-size-md" href="#about" underline="none" sx={frameStyles.desktopLink}>  About  </Link>
        <Link className="lato-regular font-size-md" href="#resume" underline="none" sx={frameStyles.desktopLink}>  Resume  </Link>
        <Link className="lato-regular font-size-md" href="#work" underline="none" sx={frameStyles.desktopLink}>  Experience  </Link>
        <Link className="lato-regular font-size-md" href="#blog" underline="none" sx={frameStyles.desktopLink}>  Blogs  </Link>
      </Box>
      <Box sx={{ ...frameStyles.topBottomBar, ...frameStyles.bottomBar }}></Box>
      <Box sx={{ ...frameStyles.topBottomLine, ...frameStyles.topLine }}></Box>
      <Box sx={{ ...frameStyles.topBottomLine, ...frameStyles.bottomLine }}></Box>
      <Box sx={{ ...frameStyles.sideLine, ...frameStyles.leftLine }}></Box>
      <Box sx={{ ...frameStyles.sideLine, ...frameStyles.rightLine }}></Box>
      <Box sx={{ ...frameStyles.cornerBox, ...frameStyles.topLeftBox }}></Box>
      <Box sx={{ ...frameStyles.cornerBox, ...frameStyles.topRightBox }}></Box>
      <Box sx={{ ...frameStyles.cornerBox, ...frameStyles.bottomLeftBox }}></Box>
      <Box sx={{ ...frameStyles.cornerBox, ...frameStyles.bottomRightBox }}></Box>

      <Box sx={{ ...frameStyles.verticalLinkContainer, ...frameStyles.leftVerticalLinkContainer }}>
        <Link className="lato-light font-size-md" href="#home" underline="none" sx={frameStyles.link}> &#124; Home &#124; </Link>
        <Link className="lato-light font-size-md" href="#about" underline="none" sx={frameStyles.link}> &#124; About &#124; </Link>
        <Link className="lato-light font-size-md" href="#resume" underline="none" sx={frameStyles.link}> &#124; Resume &#124; </Link>
      </Box>

      <Box sx={{ ...frameStyles.verticalLinkContainer, ...frameStyles.rightVerticalLinkContainer }}>
        <Link className="lato-light font-size-md" href="#work" underline="none" sx={frameStyles.link}> &#124; Experience &#124; </Link>
        <Link className="lato-light font-size-md" href="#blog" underline="none" sx={frameStyles.link}> &#124; Blogs &#124; </Link>
        <Link className="lato-light font-size-md" underline="none" sx={frameStyles.link}> &#124; Download CV &#124; </Link>
      </Box>
    </Box>
  );
}

export default Frame;